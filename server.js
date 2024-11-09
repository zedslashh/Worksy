const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Static JSON data (This is where we have user information)
const data = [
  { id: 1, name: "Alice", age: 30, role: "Engineer", location: "New York" },
  { id: 2, name: "Bob", age: 25, role: "Designer", location: "San Francisco" },
  { id: 3, name: "Charlie", age: 35, role: "Manager", location: "Chicago" },
  { id: 4, name: "David", age: 40, role: "Engineer", location: "Austin" },
  { id: 5, name: "Eva", age: 28, role: "Designer", location: "Los Angeles" },
];

// Root endpoint to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to get all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Endpoint to filter data by role
app.get('/api/data/role/:role', (req, res) => {
  const role = req.params.role;
  const filteredData = data.filter(user => user.role.toLowerCase() === role.toLowerCase());
  res.json(filteredData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
