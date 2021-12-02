
const express = require('express');
const formidableMiddleware = require('express-formidable');
const cors= require('cors')
const app = express();
const routes= require('./routes/routes.js')

 app.use(express.urlencoded({extended: false}))
 app.use(cors())
 app.use(formidableMiddleware());
app.use('/', routes)
app.listen(3001)




//app.use('/', require('./rest_api/server/route/questaoRoute'));
/*
app.get('/', (req, res)=>{
    return res.json({message:'okay'})
})
*/


