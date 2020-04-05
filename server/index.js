require('dotenv').config();
const express = require("express");
const next = require("next");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // Routes
    const users = require("./routes/users");
    const destinations = require("./routes/destinations");
    const blog = require("./routes/blog");

    server.use("/api", users);
    server.use("/api", destinations);
    server.use("/api", blog);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.get('/continent/:name', (req, res) => {
      console.log('/continent/:name on the server');
      const actualPage = '/continent';
      const queryParams = { name: req.params.name };
      return app.render(req, res, actualPage, queryParams);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port: ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
