const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.static('pages'));

app.get('/v1/cep/:cep', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const cep = req.params.cep;
  const resData = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return await res.json(resData.data);
});

app.listen(80, () => {
  console.log('Server started in port ' + 80);	
});