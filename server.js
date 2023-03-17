const express = require("express")

const app = express();
const port = 8888;
app.use(express.static(__dirname + '/public'))
app.engine('html', require('ejs').renderFile);
app.get('/',((req, res) => {
    res.render(__dirname + '/main.html')
}))
app.get('/provisions',((req, res) => {
    res.render(__dirname + '/provisions.html')
}))
app.get('/guide',((req, res) => {
    res.render(__dirname + '/guide.html')
}))
app.get('/contacts',((req, res) => {
    res.render(__dirname + '/contacts.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`))

