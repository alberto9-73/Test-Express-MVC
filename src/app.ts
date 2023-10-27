import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

// configuracion de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Ruta de home
app.get('/', (req: Request, res: Response) => {



    res.render('home',{
        titulo:'Mi primer noticia',
        subtitulo:'Probando nueva tecnologia en aplicacion MVC',
        contenido:'Realizando testing de Express y MVC',
        TituloDeArchivo:'TEST-MVC',
        numero:2

});
})

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto:${port}`)
})