const express=require('express');

const app=express();


app.get('/v1/',req,res=>{
res.send('Éxpress Running fine on vercel')
});


app.listen(5000,()=>{
console.llog('ón 5000');

})
module.exports=app;
