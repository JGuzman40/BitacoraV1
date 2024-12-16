require("dotenv").config();
const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(async () => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
