const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:1234@localhost/sql_intro");

// User Routes:

// Get users
router.get("/users", async function(req, res) {
  await sequelize
    .query("SELECT * FROM users")
    .spread(function(results, metadata) {
      res.send(results);
    });
});

// Get user by id
router.get("/user/:id", async function(req, res) {
  let userId = req.params.id;
  await sequelize
    .query(`SELECT * FROM users WHERE id = ${userId}`)
    .spread(function(results, metadata) {
      res.send(results);
    });
});

// Post user
router.post("/users", async function(req, res) {
  let user = req.body;
  console.log(user);
  let query = `INSERT INTO users VALUES 
  (null, 
    '${user.email}',
    '${user.first_name}', 
    '${user.last_name}',
    '${user.pitch}',
    '${user.age}',
    '${user.user_password}',
    '${user.user_status}',
    '${user.gender}',
    '${user.picture}',
    '${user.latitude}',
    '${user.longitude}',
    )`;
  await sequelize.query(query);
});

// Put user
router.put("/user/:toUpdate", async function(req, res) {
  let toUpdate = req.params.toUpdate;
  let data = req.body;
  console.log(data); //Check what is this and how to manipulate it
  await sequelize
    .query(
      `UPDATE users
    SET ${toUpdate} = '${data}'
    where id = "${req.body.id}"`
    )
    .spread(function(results, metadata) {
      res.send(results);
    });
});

//Delete user

// Messages Routes:

// Get messages by id
router.get("/conversation/:id", async function(req, res) {
  let conversationId = req.params.id;
  await sequelize
    .query(
      `SELECT * 
    FROM messages
    WHERE messages.conversationId= ${conversationId}`
    )
    .spread(function(results, metadata) {
      res.send(results);
    });
});

// Post message
router.post("/message", async function(req, res) {
  let message = req.body;
  console.log(message);
  let query = `INSERT INTO messages VALUES 
  (null, 
    '${message.message_date}',
    '${message.message_text}', 
    '${message.conversationId}',
    '${message.user_sending_id}',
    '${message.user_receiving_id}'
    )`;
  await sequelize.query(query);
});

module.exports = router;
