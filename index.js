const express = require("express");

const app = express();

app.get("/json", (request, response) => {
  const days = {
    yesterday: "Servers",
    today: "JSON and APIS",
  };

  response.send(days);
});

const port = 4000;

app.listen(port, () => console.log(`Listening on port :${port}`));
