const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.get('/status', (req, res) => {
  res.json({
    service: 'API Azure',
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
}
);