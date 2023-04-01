const express=require('express');

const app=express();
app.disable('etag');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


app.get('/', (req, res) => {
    let ts = Date.now();
    res.statusCode = 200;
    res.send('* SUCCESS: ' + ts.toString());
});

app.get('/api/test', (req, res) => {
  res.statusCode = 200;
  res.send('TESTING ROUTE with rolling strategy');
});

app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
})

