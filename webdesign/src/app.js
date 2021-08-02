//Requiriendo Express
const express = require('express');
const app = express();

//Requiriendo Path y estableciendo carpeta estática
const path = require("path");
const publicPath = path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

//Configurando View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

//Levantando server
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => 
    console.log('Server corriendo en el http://localhost:3000')
);

//Llamando a las rutas
const mainRoutes = require('./routes/mainRoutes');
app.use(mainRoutes);