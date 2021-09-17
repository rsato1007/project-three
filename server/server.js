require("dotenv").config();
/* Import External Modules */
const path = require("path");
const express = require('express');
const cors = require('cors');




/* Import Internal Modules */
const routes = require("./routes");

/* Instanced Modules */
const app = express();

/* Configurations */
const PORT = process.env.PORT || 5000;


/* Middleware */
//Cors
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());
// Create Custom Logger
app.use((req, res, next) => {
    console.log(req.url);
    // is there an auth header
    // console.log("AUTH HEADER: ", req.headers.authorization);
    if (req.body) {
        console.log("BODY BEING SENT: ", req.body);
    }
    next();
});


/* Routes and Controllers */
app.use("/api", routes);


/* React.JS Connection */
app.use((req, res, next) => {
    // console.log(req.headers);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

/* Server Listener */
app.listen(PORT, () => {
    console.log("server started on port 5000");
});