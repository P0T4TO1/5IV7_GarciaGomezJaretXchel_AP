const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer")
const path = require('path')

app.use(cors());
app.use(express.json());

const conn = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "227430Jxgg.",
    //password: "n0m3l0"
    database: "db_crud",
});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage
});

app.post("/create", upload.single('image'), (req, res) => {
    const name = req.body.nombre;
    const year = req.body.yearM;
    const director = req.body.director;
    const genero = req.body.genero;
    const image = 'http://127.0.0.1:3000/images/' + req.file.filename;

    conn.query(
        "INSERT INTO peliculas (nom_pelicula, year_movie, img_pelicula, nom_director, id_genero) VALUES (?,?,?,?,?)",
        [name, year, [image], director, genero],
        (err, result) => {
            if (err) {
                console.log(err);
                console.log("no")
            } else {
                console.log("si")
                console.log(result)
            }
        }
    );
});

app.get("/readAll", (req, res) => {
    conn.query("SELECT id_pelicula, nom_pelicula, year_movie, img_pelicula, nom_director, g.nom_genero FROM db_crud.peliculas as p inner join generos as g on p.id_genero = g.id_genero",
        (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.put("/update", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    conn.query(
        "UPDATE employees SET wage = ? WHERE id = ?",
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    conn.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/getCategories", (req, res) => {
    conn.query("SELECT * FROM generos", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.listen(3001, () => {
    console.log("Servidor en el puerto 3001");
});