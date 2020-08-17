const app = require('./app/application');
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`\n\nServer running at http://${hostname}:${port}/\n`);
});