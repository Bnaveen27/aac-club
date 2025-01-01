const mongoose=require('mongoose')

const InnovatorsSchema=new mongoose.Schema({
    Username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const InnovatorsModel=mongoose.model("innovators",InnovatorsSchema)

module.exports=InnovatorsModel