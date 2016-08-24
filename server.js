// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var mysql = require('mysql');
var port = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var vpnc = require('vpnc');

var config = {
    IPSec_ID: 'WiscVPN-OnCampus',
    IPSec_gateway: 'wiscvpn.doit.wisc.edu',
    IPSec_secret: 'vpnw1sc2002',

    Xauth_username: 'cvhnilicka',
    Xauth_password: 'Busterboca3',

    IKE_Authmode: 'psk',
    IKE_DH_Group: 'WiscVPN-OnCampus',
    DNSUpdate: 'no',
    NAT_Traversal_Mode: 'force-natt',
    Local_Port: 0,
    Cisco_UDP_Encapsulation_Port: 0,
};


console.log("vpnc", vpnc)

vpnc.available(function (err, version) {
    if (err) {
        console.log('VPN unavailable:');
        console.log(err);
    } else {
        console.log('Found ' + version);
        connect();
    }
});

function connect() {
    vpnc.connect(config, function (err, code) {
        if (err) {
            console.log('Error connecting VPN:');
            console.log(err);
        } else {
            console.log('VPN connected. Disconnecting in five seconds.');
            setTimeout(disconnect, 5000);
        }
    });
}

function disconnect() {
    vpnc.disconnect(function (err, code) {
        if (err) {
            console.log('Error disconnecting VPN:');
            console.log(err);
        } else {
            console.log('VPN disconnected.');
        }
    });
}


// configuration ===============================================================
mongoose.connect(database.localUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)




app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


require('./app/routes.js')(app);


// routes ======================================================================

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

