const { db } = require("../util/admin");

exports.init = (req, res) => {
  const newConfig = Array(
    {
      config_key: "firestation",
      config_value: "",
      config_group: "GENERAL",
      input_placeholder: "Feuerwehr",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "user_leitstelle",
      config_value: "",
      config_group: "GENERAL",
      input_placeholder: "Benutzername Leitstelle",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "pass_leitstelle",
      config_value: "U2FsdGVkX1/DAj/58OsFI3vm29SI8Lw8cInc75PVlLY=",
      config_group: "GENERAL",
      input_placeholder: "Passwort Leitstelle",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "lock_configuration",
      config_value: "",
      config_group: "GENERAL",
      input_placeholder: "Konfiguration sperren",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "max_alarmstirol",
      config_value: "9",
      config_group: "STANDARD",
      input_placeholder: "Max. Anzahl Aktuelle Einsätze",
      feature: "ENABLED",
      widgetname: "ALARMS-TIROL",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "alarmstirol_aslist_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Listenansicht aktivieren",
      feature: "ENABLED",
      widgetname: "ALARMS-TIROL",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "user_leitstelle",
      config_value: "",
      config_group: "STANDARD",
      input_placeholder: "Benutzername Leitstelle",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "max_twitterfeeds",
      config_value: "2",
      config_group: "STANDARD",
      input_placeholder: "Max. Anzahl Twitter Feeds",
      feature: "ENABLED",
      widgetname: "TWITTER",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeightTwitter_enabl",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "TWITTER",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "max_ownalarms",
      config_value: "9",
      config_group: "STANDARD",
      input_placeholder: "Max. Anzahl eigener Einsätze",
      feature: "DISABLED",
      widgetname: "OWN-ALARMS",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeightOwn_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "OWN-ALARMS",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "oei_types",
      config_value:
        "ANLST,BATUP,BEPWA,BMZ,BRAND,BSTR,CHEM,DFBRE,DFHOE,DSTP,EBAHN,EXPL,FWZUF,GGAS,GWLIM,HUBL,LOTSP,NOTST,OBFA,OELSP,RADIO,RETST,SAUG,SPERR,SSTB,STAND,STGL,STGLN,STPPU,STROM,STTUP,TRBMZ,TRES,UEHD,UEHDR,UFHD,UFHDR,WAEST,WASS",
      config_group: "ALARM",
      input_placeholder: "Anzeige OEI Typen",
      feature: "DISABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "ortho-map_enabled",
      config_value: "1",
      config_group: "ALARM",
      input_placeholder: "Satellitenansicht aktivieren",
      feature: "ENABLED",
      widgetname: "MAP",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "oortho-map-small_enabled",
      config_value: "1",
      config_group: "ALARM",
      input_placeholder: "Satellitenansicht aktivieren",
      feature: "ENABLED",
      widgetname: "EVENTINFO",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "carpos_enabled",
      config_value: "1",
      config_group: "ALARM",
      input_placeholder: "Standort Fahrzeuge anzeigen",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "uwz_enabled",
      config_value: "1",
      config_group: "STANDARD",
      input_placeholder: "UWZ aktivieren",
      feature: "ENABLED",
      widgetname: "UWZ",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeightUwz_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "UWZ",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "colored_res_enabled",
      config_value: "1",
      config_group: "STANDARD",
      input_placeholder: "Fahrzeugstatus farblich anzeigen",
      feature: "DISABLED",
      widgetname: "RESOURCEN",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "resources_aslist_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Fahrzeuge als Liste anzeigen",
      feature: "ENABLED",
      widgetname: "RESOURCEN",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeight_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "RESOURCEN",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "screensaver_enabled",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Bildschirmschoner aktivieren",
      feature: "DISABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "debug_enabled",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Logging Console einschalten",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "calender_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Outlook Kalender aktivieren",
      feature: "DISABLED",
      widgetname: "CALENDAR",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "zoom_level-map",
      config_value: "17",
      config_group: "ALARM",
      input_placeholder: "Karte Zoomstufe (4-19)",
      feature: "DISABLED",
      widgetname: "MAP",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "zoom_level-map-small",
      config_value: "17",
      config_group: "ALARM",
      input_placeholder: "Karte Zoomstufe (4-19)",
      feature: "DISABLED",
      widgetname: "EVENTINFO",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "testalarm_enabled",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Alarmansicht aktivieren",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "testalarmjson_enabled",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Test mit JSON file (Ordner testdata/fakealarm)",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "widgetresize_enabled",
      config_value: "0",
      config_group: "GENERAL",
      input_placeholder: "Widget Höhe anpassen(pro Zeile)",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "ownalarms_enabled",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Eigene Einsätze anzeigen",
      feature: "DISABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "google_calender_height",
      config_value: "450",
      config_group: "STANDARD",
      input_placeholder: "Kalender Höhe",
      feature: "ENABLED",
      widgetname: "GOOGLE",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "google_calender_id",
      config_value: "",
      config_group: "STANDARD",
      input_placeholder: "Kalender ID",
      feature: "ENABLED",
      widgetname: "GOOGLE",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "google_calender_mode",
      config_value: "AGENDA",
      config_group: "STANDARD",
      input_placeholder: "Ansicht: AGENDA, WEEK, MONTH",
      feature: "ENABLED",
      widgetname: "GOOGLE",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeightGoogle_enable",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "GOOGLE",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "zipcode",
      config_value: "6020",
      config_group: "STANDARD",
      input_placeholder: "Wetterdaten für Postleitzahl",
      feature: "ENABLED",
      widgetname: "WEATHER",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "excludeCalcHeightWeather_enabl",
      config_value: "0",
      config_group: "STANDARD",
      input_placeholder: "Bei der Höhenberechnung nicht berücksichtigen",
      feature: "ENABLED",
      widgetname: "WEATHER",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "auth_token",
      config_value: "74b87337454200d4d33f80c4663dc5e5",
      config_group: "STANDARD",
      input_placeholder: "Authentication",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    },
    {
      config_key: "kind",
      config_value: "FREE",
      config_group: "STANDARD",
      input_placeholder: "Authentication",
      feature: "ENABLED",
      widgetname: "",
      slot: "",
      time: "1577723128"
    }
  );

  db.collection(`mon_configuration`)
    .get()
    .then(data => {
      if (data._size == 0) {
        newConfig.forEach(element => {
          console.log(element);
          db.collection(`mon_configuration`)
            .add(element)
            .then(doc => {
              //   const resConfig = newConfig;
              //   resConfig.configID = doc.id;
              res.json({ msg: "ok" });
            })
            .catch(err => {
              res.status(500).json({ error: "something went wrong" });
              console.error(err);
            });
        });
      } else {
        res.json({ msg: "exist table" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });

  const newWidget = Array(
    {
      widgetname: "TWITTER",
      slot: "CONTENT-4_CENTER",
      enabled: 1,
      feature: "ENABLED",
      content: "",
      time: "1577723128"
    },
    {
      widgetname: "UWZ",
      slot: "CONTENT-4_LEFT",
      enabled: 1,
      feature: "ENABLED",
      content: "",
      time: "1577723128"
    },
    {
      widgetname: "ALARMS-TIROL",
      slot: "CONTENT-4_RIGHT",
      enabled: 1,
      feature: "ENABLED",
      content: "",
      time: "1577723128"
    },
    {
      widgetname: "WATERLEVEL",
      slot: "FULL",
      enabled: 0,
      feature: "ENABLED",
      content: "",
      time: "1577723128"
    },
    {
      widgetname: "RESOURCEN",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "ENABLED",
      content: "",
      time: "1577723128"
    },
    {
      widgetname: "EMPTY-ONE",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "ENABLED",
      content: "201459-at",
      time: "1577723128"
    },
    {
      widgetname: "EMPTY-TWO",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "ENABLED",
      content: "201459-at",
      time: "1577723128"
    },
    {
      widgetname: "EMPTY-THREE",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "DISABLED",
      content: "Leeres Widge",
      time: "1577723128"
    },
    {
      widgetname: "GOOGLE",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "DISABLED",
      content: "Google Kalender Widget",
      time: "1577723128"
    },
    {
      widgetname: "OWN-ALARMS",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "DISABLED",
      content: "Eigene Alarmierungen",
      time: "1577723128"
    },
    {
      widgetname: "WEATHER",
      slot: "CONTENT-4_RIGHT",
      enabled: 0,
      feature: "DISABLED",
      content: "Anzeige Wetter",
      time: "1577723128"
    }
  );

  db.collection(`mon_widget`)
    .get()
    .then(data => {
      if (data._size == 0) {
        newWidget.forEach(element => {
          db.collection(`mon_widget`)
            .add(element)
            .then(doc => {
              res.json({ msg: "ok" });
            })
            .catch(err => {
              res.status(500).json({ error: "something went wrong" });
              console.error(err);
            });
        });
      } else {
        res.json({ msg: "exist table" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });

  newCate = Array(
    {
      name: "BRAND",
      used: 0,
      time: "1577723128"
    },
    {
      name: "EXPLOSION",
      used: 0,
      time: "1577723128"
    },
    {
      name: "TECHNIK",
      used: 0,
      time: "1577723128"
    },
    {
      name: "VERKEHR",
      used: 0,
      time: "1577723128"
    },
    {
      name: "ÖL",
      used: 0,
      time: "1577723128"
    },
    {
      name: "ABC",
      used: 0,
      time: "1577723128"
    },
    {
      name: "GAS",
      used: 0,
      time: "1577723128"
    },
    {
      name: "WASSER",
      used: 0,
      time: "1577723128"
    },
    {
      name: "EINSTURZ",
      used: 0,
      time: "1577723128"
    },
    {
      name: "WASUNTERSTÜTZSER",
      used: 0,
      time: "1577723128"
    },
    {
      name: "ERKUND",
      used: 0,
      time: "1577723128"
    },
    {
      name: "BAHN",
      used: 0,
      time: "1577723128"
    },
    {
      name: "FLUG",
      used: 0,
      time: "1577723128"
    },
    {
      name: "BMA",
      used: 0,
      time: "1577723128"
    },
    {
      name: "STROM",
      used: 0,
      time: "1577723128"
    },
    {
      name: "RETTUNG",
      used: 0,
      time: "1577723128"
    },
    {
      name: "BSW",
      used: 0,
      time: "1577723128"
    },
    {
      name: "ÜBUNG",
      used: 0,
      time: "1577723128"
    },
    {
      name: "EIGEN",
      used: 0,
      time: "1577723128"
    },
    {
      name: "PROBE",
      used: 0,
      time: "1577723128"
    }
  );
  db.collection(`mon_category`)
    .get()
    .then(data => {
      if (data._size == 0) {
        newCate.forEach(element => {
          db.collection(`mon_category`)
            .add(element)
            .then(doc => {
              res.json({ msg: "ok" });
            })
            .catch(err => {
              res.status(500).json({ error: "something went wrong" });
              console.error(err);
            });
        });
      } else {
        res.json({ msg: "exist table" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
