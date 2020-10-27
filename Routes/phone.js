// making indepent routers , distant from the server file 
import express  from 'express'
import PhoneDetailModel  from '../Modules/PhoneSchema.js'
const router = express.Router(); 

// get request 
router.get('/',async(req, res)=>{
    try {
        const phones= await  PhoneDetailModel.find()
        res.json(phones)
    } 
    catch (error) {
        res.send(error);
    }
}) 

//post request 
router.post('/',async(req, res)=>{
    console.log(req)
        const contact = new PhoneDetailModel({
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        phone:req.body.phone
})
    try {
        await contact.save()
        res.json(contact)

        } catch (error) {
        res.send(error)
            }
        } )

router.get('/:id',async(req, res)=>{
    try {
        const phones= await  PhoneDetailModel.findById(req.params.id)
        res.json(phones)
    } 
    catch (error) {
        res.send(error);
    }
    }) 

router.delete('/delete/:id',async(req, res)=>{
    try {
        const phones= await  PhoneDetailModel.findByIdAndDelete(req.params.id)
        const resp =await  contact.save()
        res.json(resp)
    } 
    catch (error) {
        res.send(error);
    }
})

export default router