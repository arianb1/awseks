const express=require('express');

const app=express();


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from from Primus Learning, this was awesome';
  res.send('SUCCESS');
});

app.get('/api/test', (req, res) => {
  res.statusCode = 200;
  res.send('Hello from test route')
});

app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
})
