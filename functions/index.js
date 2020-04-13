const functions = require('firebase-functions');

const app = require("express")();

const cors = require("cors");
app.use(cors());

// const { db } = require("./util/admin");
const FBAuth = require("./util/fbAuth");
const {
    init
} = require("./handlers/initdb.js");

const {
    selectAllDataFromWhere,
    selectAllDataFrom,
    upgradeToPro,
    downgradeToFree
} = require("./handlers/common.js");

const {
    selectAllEnabledResourceIds,
    storeResourcesToDB,
    updateResourcen,
    updateCarPosition
} = require("./handlers/resource");

const {
    saveLogin,
    updateConfiguration,
    removeLock,
    storeConfigToDB
} = require("./handlers/configuration");

const {
    enableWidget,
    disableWidget,
    updateWidgetContent,
    readWidgetContent
} = require("./handlers/widget");

const {
    addWaterLevel,
    deleteWaterLevel
} = require("./handlers/waterlevel");

const {
	signup,
    login,
    logout,
	uploadImage,
	addUserDetails,
	getUserDetails
} = require("./handlers/users");

//init
app.post("/init", init);
//signup
app.post("/signup", signup);
app.post("/login", login);
app.post("/logout", logout);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user/:handle", getUserDetails);


//common
app.post("/get", selectAllDataFromWhere);
app.get("/get/:table", selectAllDataFrom);
app.post("/upgrade", upgradeToPro);
app.post("/downgrade", downgradeToFree);


//resource
app.get("/resourceEnable", selectAllEnabledResourceIds);
app.post("/storeResource", storeResourcesToDB);
app.post("/updateResource", updateResourcen);
app.post("/updatePos", updateCarPosition);

//configuration
app.post("/updateConfig", updateConfiguration);
app.get("/removeLock", removeLock);
app.post("/savelogin", saveLogin);
app.post("/storeConfig", storeConfigToDB)

//widget
app.post("/enable", enableWidget);
app.post("./disable", disableWidget);
app.post("./update", updateWidgetContent);
app.post("./read", readWidgetContent);

// WaterLevel
app.post("./add", addWaterLevel);
app.post("./del", deleteWaterLevel);

exports.api = functions.https.onRequest(app);