const { db } = require("../util/admin");

exports.saveLogin = (req, res) => {

    db.collection("mon_configuration")
        .where("config_key", "==", "user_leitstelle")
        .get()
        .then(data => {
            data.forEach(doc => {
                db.collection("mon_configuration")
                    .doc(doc.id)
                    .update({
                        config_value: req.body.user
                    })
                    .then(response => {
                        res.json({ msg: 'ok' });
                    })
            })

        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

        db.collection("mon_configuration")
        .where("config_key", "==", "pass_leitstelle")
        .get()
        .then(data => {
            data.forEach(doc => {
                db.collection("mon_configuration")
                    .doc(doc.id)
                    .update({
                        config_value: req.body.pass
                    })
                    .then(response => {
                        res.json({ msg: 'ok' });
                    })
            })

        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

        db.collection("mon_configuration")
        .where("config_key", "==", "firestation")
        .get()
        .then(data => {
            data.forEach(doc => {
                db.collection("mon_configuration")
                    .doc(doc.id)
                    .update({
                        config_value: req.body.firestation
                    })
                    .then(response => {
                        res.json({ msg: 'ok' });
                    })
            })

        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
};

exports.storeConfigToDB = (req, res) => {
    const newConfig = {
        config_group: "STANDARD",
        config_key: req.body.config_key,
        config_value: req.body.config_value,
        feature: "ENABLED",
        input_placeholder: "Authentication",
        slot: "",
        time: new Date().toISOString(),
        widgetname: "ALARMS-TIROL"
    };

    db.collection("mon_configuration")
        .add(newConfig)
        .then(doc => {
            const resConfig = newConfig;
            resConfig.configID = doc.id;
            res.json(resConfig);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
}
// {
// 	"configID":"s9ILHFov0ml0o8wneMiQ",
// 	"config_value": "firestation2"
// }
exports.updateConfiguration = (req, res) => {
    console.log(req.body);
    db.collection("mon_configuration")
        .doc(req.body.configID)
        .update({
            config_value: req.body.config_value,
            time: new Date().toISOString()
        })
        .then(() => {
            return res.json({ msg: "ok" });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
};


exports.removeLock = (req, res) => {

    db.collection("mon_configuration")
        .where("config_key", "==", "lock_configuration")
        .get()
        .then(data => {
            if (data.size != 0) {
                data.forEach(doc => {
                    db.collection("mon_configuration")
                        .doc(doc.id)
                        .update({
                            config_value: ""
                        })
                        .then(() => {
                            res.json({ msg: 'ok' });
                        })
                })
            }else{
                res.json({msg:"No data"});
            }


        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });

};