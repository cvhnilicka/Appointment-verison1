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
                device_brand : {
                        type: String,
                        default: ''
                },
                name : {
                        type: String,
                        default : ''
                },
                email : {
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
                },
                time : {
                        type: String,
                        default : ''
                }
});
