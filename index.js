const express = require('express');
const app = express();
const port = 3031;

app.get('/', (req,res) => {
  res.send('Hello from Docker!');
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:${port}');
}); 










