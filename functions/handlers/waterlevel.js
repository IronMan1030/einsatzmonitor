
const { db } = require("../util/admin");
// {
//     "api_url": "http://localhost:5000/ffw-einsatzmonitor-c59c3/us-central1/api/addWaterLevel",
//     "hw1": "hw1",
//     "hw100": "hw100",
//     "hw30": "hw30",
//     "hw5": "hw5",
//     "pegel_station": "pege"
// }
exports.addWaterLevel = (req, res) => {
    console.log(req.body);
    const newWaterLevel = {
        api_url: req.body.api_url,
        hw1: req.body.hw1,
        hw100: req.body.hw100,
        hw30: req.body.hw30,
        hw5: req.body.hw5,
        pegel_station: req.body.pegel_station,
        time: new Date().toISOString()
    };

    db.collection("mon_waterlevel")
        .add(newWaterLevel)
        .then(doc => {
            res.json(newWaterLevel);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};

exports.deleteWaterLevel = (req, res) => {

    db.collection("mon_waterlevel")
        .doc(req.body.waterLevelID)
        .delete()
        .then(doc => {
            return res.json({msg:"ok"});
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};
