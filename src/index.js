const express = require('express');
const app = express();
var cors = require('cors')

app.use(express.json());
app.set('port', process.env.PORT || 3000);


app.use(require('./routes/alumno'));

app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});

