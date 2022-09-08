const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');







//Obtener tabla de alumno
router.get("/alumnos", (req, res) => {
    console.log("Obteniendo Lista alumno");
    mysqlConnection.query('Select * from alumnos', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send('error' + err);
        }
    });
});



module.exports = router;