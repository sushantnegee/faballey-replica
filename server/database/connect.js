// const mongoose = require('mongoose')
// // mongoose.set('strictQuery', true)

// async function connectDatabase() {
//     const result = await mongoose.connect('mongodb+srv://sushantnegee:Sonu@2001@cluster0.kpgw3uv.mongodb.net/faballeyDb?retryWrites=true&w=majority');
//     return result;
// }

// module.exports = connectDatabase;


const mongooose = require('mongoose');


async function connectDatabase() {
    return new Promise((res, rej) => {
        mongooose.connect("mongodb+srv://abhinav:abhinav@cluster0.jxq2tkf.mongodb.net/testing?retryWrites=true&w=majority",(err)=>{
            if(err){
                rej(err);
            }
        })
        res();
    })
}
module.exports=connectDatabase;


