const express = require('express');
// const cors = require('cors');
const {ProductModel} = require('./models/model')
const connectDatabase = require("./database/connect")
const {routes} = require('./routes/routes')
const app = express();

app.use(express.json());
// app.use('/',routes);
app.get('/',async (req,res)=>{
    try{
        await ProductModel.find();
    res.send("done")
    }catch(err){
        console.log(err.message+" inside get")
    }
})
// app.use(cors());

const port = process.argv[2] || 3030;

// connectDatabase()
// .then(() => {
//     app.listen(port, () => {
//         console.log(`Server listening to http requests on http://localhost:${port}`)
//     })
// })



app.listen(port,async ()=>{
   try{
    await connectDatabase()
    console.log(`Server listening to http requests on http://localhost:${port}`)
   }catch(err){
    console.log(err.message);
   }
})