const express = require('express');

const app = express();

app.get('/api/collaborators', (req, res) => {
  const collaborators = [
    {id: 1, firstName: 'Amit'},
    {id: 2, firstName: 'Fabian'},
    {id: 3, firstName: 'Rajneesh'},
    {id: 4, firstName: 'Rad'},
  ];

  res.json(collaborators);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);