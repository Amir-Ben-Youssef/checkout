const mongoose = require('mongoose')


const CheckoutSchema = mongoose.Schema({
    name:{type: String,
        required: true
    },
    email:{type: String,
        required: true
    },
    password:{type: String,
        required: true
    },
    line1:{type: String,
        required: true
    },
    line2:{type: String,
        required: true
    },
    city:{type: String,
        required: true
    },
    state:{type: String,
        required: true
    },
    zipCode:{type: Number,
        required: true
    },
    phone:{type: Number,
        required: true
    },
    creditCardN:{type: Number,
        required: true
    },
    expiryDate:{type: Date,
        required: true
    }, 
    CVV:{type: Number,
        required: true
    },
    billingZipCode:{type: Number,
        required: true
    },
})

const Check = mongoose.model('check', CheckoutSchema)

module.exports = Check;