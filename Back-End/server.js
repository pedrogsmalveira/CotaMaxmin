import app from './src/app.js'

const port = process.env.PORT || 5501;

app.listen(port, () => {
    console.log('Server on!!!');
});