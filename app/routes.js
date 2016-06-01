var Appointment = require('./models/appointment');

function getAppointments(res) {
        Appointment.find(function (err, appointments) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(appointments); // return all todos in JSON format
    });
};

module.exports = function (app) {
        // get all appointments
        app.get('/api/appointments', function (req, res){
                // use mongoose to get all appointments
                getAppointments(res);
        });


        // create appointment and send back to all appointments in database
        app.post('/api/appointments', function(req, res) {
                debugger;
                // create an appoint, information comes from ajax request from angular
                Appointment.create({
                        device_type : req.body.device_type,
                        consult_type : req.body.consult_type,
                        device_brand : req.body.device_brand,
                        name : req.body.name,
                        description : req.body.description,
                        date : req.body.date,
                        done : false
                }, function(err, data){
                        if (err)
                                res.send(err);

                                // get and return all appointments
                                getAppointments(res);

                });
        });

        // delete an appointment
        app.delete('/api/appointments/:appointment_id', function (req, res){
                Appointment.remove({
                        _id: req.params.appointment_id
                }, function (err, todo){
                        if(err)
                                res.send(err)
                        getAppointments(res);
                        });
        });

app.get('*', function (req, res) {
        res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};


