const express = require('express');
const router = express.Router();

const {getPosts,sendPosts} = require ('../consultas/consultas')


router.get('/usuarios', async (req, res) => {
    const results = await getPosts();
    res.json(results)
})


router.post('/usuarios', async (req, res) => {
    const {email,password,rol,lenguage} = req.body;
    await sendPosts(email,password,rol,lenguage);
    res.send('datos agregados')
})



module.exports = router;