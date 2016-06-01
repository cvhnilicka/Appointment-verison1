var mongoose = require('mongoose');

module.exports = mongoose.model('Appointments', {
                device_type : {
                        type: String,
                        default: ''
                },
                consult_type : {
                        type: String,
                        default: ''
                },
                name : {
                        type: String,
                        default : ''
                },
                description : {
                        type: String,
                        default : ''
                },
                date : {
                        type: String,
                        default : ''
                }
});
