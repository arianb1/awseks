const express=require('express');

const port=3000
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello!! this is running')
})

app.get('/api/test',(req,res)=>{
    res.send('Hello from test route')
})

app.listen(port,()=>{
    console.log(`App listening at port:${port}`)
})