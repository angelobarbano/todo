const express = require("express");
const app = express();
const port = process.env.port || 3000;
require("./db/mongoose");
const userRouter = require("./routes/usersRoute");
const taskRouter = require("./routes/tasksRoute");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("App listening on port" + port);
});
