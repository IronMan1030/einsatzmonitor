const { db } = require("../util/admin");

exports.selectAllEnabledResourceIds = (req, res) => {

    db.collection("mon_resources")
        .where("enabled", "==", 1)
        .get()
        .then(data => {
            let tableDataEnabled = [];
            data.forEach(doc => {
                tableDataEnabled.push(doc.data());
            });
            return res.json(tableDataEnabled);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
};
// {
// 	"pos": 5,
// 	"resource_id": 33,
// 	"call_sign": "jhon",
// 	"resource_type": "fire",
// 	"enabled": 1
// }
exports.storeResourcesToDB = (req, res) => {
    // if (req.body.pos.trim() === "")
    //     return res.status(400).json({ comment: "Must not be empty" });
    const newResource = {
        pos: req.body.pos,
        resource_id: req.body.resource_id,
        call_sign: req.body.call_sign,
        resource_type: req.body.resource_type,
        enabled: req.body.enabled,
        time: new Date().toISOString()
    };
    db.collection("mon_resources")
        .add(newResource)
        .then(doc => {
            const resResource = newResource;
            resResource.resourceID = doc.id;
            res.json(resResource);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};
// {
// 	"resource_id": 33,
// 	"resource_value": 0
// }
exports.updateResourcen = (req, res) => {
    db.collection("mon_resources")
        .where("resource_id", "==", req.body.resource_id)
        .get()
        .then(data => { 
            data.forEach(doc => {                
                db.collection("mon_resources")
                .doc(doc.id)
                .update({
                    enabled: req.body.resource_value,
                    time: new Date().toISOString()
                })
                .then(response => {
                    // res.json(response);
                })
            })
            res.json({msg:'ok'});           
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};

// {
// 	"resource_id": 33,
// 	"pos": 23
// }
exports.updateCarPosition = (req, res) => {
    db.collection("mon_resources")
    .where("resource_id", "==", req.body.resource_id)
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_resources")
            .doc(doc.id)
            .update({
                pos: req.body.pos
            })
            .then(response => {
                // res.json(response);
            })
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
    });
};

// exports.updateCarPosition = (req, res) => {
//     db.collection("mon_resources")
//         .doc(req.body.resource_id)
//         .update({
//             pos: req.body.pos
//         })
//         .then(doc => {
//             return res.json({ msg: "ok" });
//         })
//         .catch(err => {
//             res.status(500).json({ error: "something went wrong" });
//             console.error(err);
//         });
// };
