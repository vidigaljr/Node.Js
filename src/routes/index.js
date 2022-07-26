const express = required('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.status(200).send({
        title: 'API Node com ExpressJs',
        version: '0.0.1'
    })
})
module.exports = router;