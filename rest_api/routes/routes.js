const express = require("express");
const router = express.Router();
const routesService = require("../service/services.js");
//const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');
const jwt = require('jsonwebtoken');
router.get("/campanhas",  async function (req, res) {
    const campanhas = await routesService.getCampanha();
    res.json(campanhas);
  });

router.post("/campanhas", async function (req, res) {
   const campanha = req.fields;

  const newCampanha = await routesService.saveCampanha(campanha);
    return res.json('campanha');
  
  });

  router.post('/login', async function(req, res){
    const email = req.fields.email;
    const senha = req.fields.senha;
    const senhaUser = await routesService.getSenha(email);
  
  console.log(senhaUser[0].senha)

  if(senhaUser[0].senha = senha){
    const token = jwt.sign(
      {
        email: email
      },
      'somesupersecretsecret',
      { expiresIn: '1h' }
    );
  }
   
      });
module.exports = router;

