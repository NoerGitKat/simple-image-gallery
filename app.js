const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'public/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index')
})

const server = app.listen(3000, () => {
	console.log(`App listening on port ${server.address().port}`)
})