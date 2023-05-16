const express = require('express');
const {talkWithChatGpt} = require('../services/openai.services')

const router = express.Router();

router.get('/', async (req,res, next) =>{
    try {
        const response = await talkWithChatGpt("Di que esto es una prueba");
        res.json(response);
    } catch (error) {
        next(error)
    }
});


module.exports = router;