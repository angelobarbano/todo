const express = require("express");
const app = express();
const port = process.env.port || 3000;
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.send(task))
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
