const app = require('./app');

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(`API server is up and running on port ${port}`);
});
