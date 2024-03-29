const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index_routes');


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT|| 3001;



app.use('/', routes);




app.listen(PORT, () => console.log(`SERVIDOR CORRIENDO EN PUERTO ${PORT}`));