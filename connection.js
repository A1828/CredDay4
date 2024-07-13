//importing mongoose
var mongoose =require('mongoose');
// connecting with db
// 
mongoose.connect("mongodb+srv://athira1828:athira@cluster0.j7xfhil.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db" );
})
.catch((err)=>{
    console.log(err);
});