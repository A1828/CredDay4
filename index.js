//importing express
var express= require('express')
require('./connection');
var sampleModel = require('./model');
// initialization
var app =express();

// middle ware
 app.use(express.json())

//api 
//to add data to db
app.post('/add', async(req,res)=>{
    try {
       await sampleModel(req.body).save()
       res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
// api to view data
app.get('/view',async(req, res)=>{
    try {
      var output=  await sampleModel.find();
      res.send(output);
    } catch (error) {
        console.log(error)
        
    }
});
// api to delete a document
app.delete('/remove/:id',async(req,res)=>{
    try {
        var id =req.params.id
        await sampleModel.findByIdAndDelete(id)
        res.send('data deleted')
    } catch (error) {
        console.log(error);
    }
});
// api to update
app.put ('/edit/:id',async(req,res)=>{
    try {
        var id= req.params.id
        var output= await sampleModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})
    } catch (error) {
        console.log(error)
        
    }
})


app.listen('3009',()=>{
    console.log("port is up and running!!")
})


