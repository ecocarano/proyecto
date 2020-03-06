const express = require('express');
const path = require('path');
const app = express();

//app.set('port',process.env.PORT || 5000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));



//router
app.use(require ('./routes/customer'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log('servidor ', app.get('port'));
})