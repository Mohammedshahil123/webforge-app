const http = require('http');

// Use dynamic port (important for DevOps & Docker)
const PORT = process.env.PORT || 5490;

// Create server
const server = http.createServer((req, res) => {
  res.write("Welcome to WebForge App 🚀");
  res.end();
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
