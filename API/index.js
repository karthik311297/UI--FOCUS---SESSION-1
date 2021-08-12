const { request, response } = require('express');
const express = require('express');
const app = express();

const PORT = 8000;
const router = require('./routes/index');

//Adding body parse (middleware)
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//cross origin resource sharing policy setting
app.use((request, response, next)=>{
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', router)

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`APP Started at http://localhost:${PORT}`);
});