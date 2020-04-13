const { db } = require("../util/admin");

exports.enableWidget = (req, res) => {
    db.collection("mon_widget")
        .where("widgetname", "==", req.body.widgetName)
        .get()
        .then(data => {
            if(data.size != 0){
                data.forEach(doc => {
                    db.collection("mon_widget")
                        .doc(doc.id)
                        .update({
                            enabled: 1,
                            slot: req.body.slot,
                            time: new Date().toISOString()
                        })
                        .then(response => {
                            res.json({ msg: 'ok' });
                        })
                })
            }else{
                res.json({ msg: 'No data to update' });
            }            
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};
exports.disableWidget = (req, res) => {
    console.log(req.body);
    db.collection("mon_widget")
        .where("widgetname", "==", req.body.widgetName)
        .get()
        .then(data => {
            if(data.size != 0){
                data.forEach(doc => {
                    db.collection("mon_widget")
                        .doc(doc.id)
                        .update({
                            enabled: 1,
                            time: new Date().toISOString()
                        })
                        .then(response => {
                            res.json({ msg: 'ok' });
                        })
                })
            }else{
                res.json({ msg: 'No data to update' });
            }            
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};

exports.updateWidgetContent = (req, res) => {

    db.collection("mon_widget")
        .where("widgetname", "==", req.body.widgetName)
        .get()
        .then(data => {
            if(data.size != 0){
                data.forEach(doc => {
                    db.collection("mon_widget")
                        .doc(doc.id)
                        .update({
                            content: req.body.content,
                            time: new Date().toISOString()
                        })
                        .then(response => {
                            res.json({ msg: 'ok' });
                        })
                })
            }else{
                res.json({ msg: 'No data to update' });
            }
            
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
};

exports.readWidgetContent = (req, res) => {
    db.collection("mon_widget")
        .where("widgetname", "==", req.body.widgetName)
        .get()
        .then(data => {
            let tableData = [];
            data.forEach(doc => {
                tableData.push(doc.data());
            });
            return res.json(tableData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
};