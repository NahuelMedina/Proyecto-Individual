const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log(`Server listening on http://localhost:${PORT}`);
});
