const { db } = require("../util/admin");

exports.selectAllDataFromWhere = (req, res) => {
	console.log(req.body.value);
	db.collection(req.body.table)
		.orderBy("time", "asc")
		.where(req.body.field, "==", req.body.value)
		.get()
		.then(data => {
			let tableDataWhere = [];
			data.forEach(doc => {
				tableDataWhere.push(doc.data());
			});
			return res.json(tableDataWhere);
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ error: err.code });
		});
};
exports.selectAllDataFrom = (req, res) => {

	db.collection(`${req.params.table}`)
		.orderBy("time", "desc")
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

exports.upgradeToPro = (req,res) => {
	
    db.collection("mon_configuration")
    .where("config_key", "==", "max_ownalarms")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "oei_types")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ortho-map_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ortho-map-small_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "screensaver_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "calender_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ownalarms_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "kind")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                config_value: 'PAID' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "zoom_level-map")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "zoom_level-map-small")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "EMPTY-THREE")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "GOOGLE")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "OWN-ALARMS")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "WEATHER")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'ENABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});
};

exports.downgradeToFree = (req,res) => {
	db.collection("mon_configuration")
    .where("config_key", "==", "max_ownalarms")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "oei_types")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ortho-map_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ortho-map-small_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "screensaver_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "calender_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "ownalarms_enabled")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "kind")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                config_value: 'FREE' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "zoom_level-map")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_configuration")
    .where("config_key", "==", "zoom_level-map-small")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_configuration")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "EMPTY-THREE")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "GOOGLE")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "OWN-ALARMS")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});

	db.collection("mon_widget")
    .where("widgetname", "==", "WEATHER")
    .get()
    .then(data => { 
        data.forEach(doc => {                
            db.collection("mon_widget")
            .doc(doc.id)
            .update({
                feature: 'DISABLED' 
            })
            .then(response => {
                
			})
			.catch(err => {
				console.log(err);
			})
        })
        res.json({msg:'ok'});           
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong" });
        console.error(err);
	});
};