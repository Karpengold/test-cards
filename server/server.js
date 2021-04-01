const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

const users = [
  {
    id: "1",
    status: "Working",
    username: "Mr. Jackson"
  },
  {
    id: "2",
    status: "BusinessTrip",
    username: "Ms. Jackson"
  },
  {
    id: "3",
    status: "LunchTime",
    username: "Jackson Junior"
  },
  {
    id: "4",
    status: "OnVacation",
    username: "Jackson Junior the III"
  },
  {
    id: "5",
    status: "OnVacation",
    username: "Jackson Five"
  }
];

app.get("/users", (req, res) => {
  res.json({ users });
});

app.post("/users/:userId", (req, res) => {
  const user = users.find(u => u.id === req.params.userId);

  if (user !== undefined) {

    //Changed req.params.status -> req.body.status
    user.status = req.body.status;
    res.json({});
  } else {
    res.statusCode = 404;
    res.json({});
  }
});
app.post("/user", (req, res) => {
  const user = {id: `${users.length + 1}` , username: req.body.name, status: req.body.status};
  users.push(user);
  res.json({user})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
