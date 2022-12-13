const {Router} = require('express')
const User = require('./../modules/models/User')

const router = Router()

router.post('/register' , async (req, res)=>{
    const {username , password} = await req.body

    if(!username && !password){
        res.json({
            status:"bad",
            msg:"Please, full in all rows"
        })
    if(username.length < 4){
        res.json({
            status:"bad",
            msg:"Username must belong minimum 4 characters"
        })
    if(username.length > 20){
        res.json({
            status:"bad",
            msg:"Username must belong maximum 20 characters"
        })
    if(password.length < 5){
        res.json({
            status:"bad",
            msg:"Password must belong minimum 4 characters"
        })        
    }    
    }
})
