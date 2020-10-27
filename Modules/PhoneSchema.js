import mongoose from 'mongoose'

const PhoneDetailsSchema= new mongoose.Schema({
    FirstName :{
        type:String,
        required: true
    },
    LastName :{
        type:String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
        })
     
const PhoneDetailModel = mongoose.model('PhoneDetails', PhoneDetailsSchema);

export default  PhoneDetailModel