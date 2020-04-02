const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");




const sequelize = new Sequelize("mysql://root:12345678@localhost/hackaton");
// const sequelize = new Sequelize("mysql://root:1234@localhost/hackaton");
// const sequelize = new Sequelize("mysql://root:password@localhost/hackaton");




// User Routes:

// Get users
router.get("/users", async function (req, res) {
  await sequelize
    .query("SELECT * FROM users")
    .spread(function (results, metadata) {
      res.send(results);
    });
});

// Get user by facebookId
router.get("/user/:facebookId", async function (req, res) {
  let { facebookId } = req.params;
  await sequelize
    .query(`SELECT * FROM users WHERE facebookId = '${facebookId}'`)
    .spread(function (results, metadata) {
      res.send(results);
    });
});

// Post user
router.post("/user", async function (req, res) {
  let user = req.body;
  let query = `INSERT INTO users VALUES 
  (null, 
    '${user.facebookId}',
    '${user.email}',
    '${user.first_name}', 
    '${user.last_name}',
    '${user.pitch}',
    '${user.age}',
    '${user.user_status}',
    '${user.gender}',
    '${user.picture}',
    '${user.latitude}',
    '${user.longitude}',
    '${user.mode}',
    '${user.range}',
    ${user.silence}
    )`;
  await sequelize.query(query);
  res.end()
});

// Put user
router.put("/user", async function (req, res) {
  let data = req.body;
  console.log(data)
  await sequelize
    .query(
      `UPDATE users
    SET ${data.column} = '${data.value}'
    WHERE facebookId = "${data.facebookId}"`
    )
    .spread(function (results, metadata) {
      res.send(results);
    });
});

//put user for boolean
router.put("/boolean", async function (req, res) {
  let data = req.body;
  console.log(data)
  await sequelize
    .query(
      `UPDATE users
    SET ${data.column} = ${data.value}
    WHERE facebookId = "${data.facebookId}"`
    )
    .spread(function (results, metadata) {
      res.send(results);
    });
});

//Put change 2 params in 1 call
router.put("/user2", async function (req, res) {
  let data = req.body;
  await sequelize
    .query(
      `UPDATE users
    SET ${data.column1} = '${data.value1}',
    ${data.column2} = '${data.value2}'
    WHERE facebookId = "${data.facebookId}"`
    )
    .spread(function (results, metadata) {
      res.send(results);
    });
});

//Delete user

// Messages Routes:

// Get messages by id
router.get("/conversation/:id", async function (req, res) {
  let conversationId = req.params.id;
  await sequelize
    .query(
      `SELECT * 
    FROM messages
    WHERE messages.conversationId= ${conversationId}`
    )
    .spread(function (results, metadata) {
      res.send(results);
    });
});

// Post message
router.post("/message", async function (req, res) {
  let message = req.body;
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


router.get("/distance/:facebookId", async function (req, res) {
  console.log("im in")
  const arrDistance = []
  await sequelize
    .query("SELECT * FROM users")
    .spread(function (results, metadata) {
      let { facebookId } = req.params;
      let connectedUser = results.find(u => u.facebookId === facebookId)
      console.log(connectedUser)
      results.map(u => {
        let temp = {id: u.facebookId, distance: Math.round(calcDistanceBetweenTwoPeopleInKM(connectedUser.latitude, connectedUser.longitude, u.latitude, u.longitude) * 10) / 10}
        arrDistance.push(temp)
      })
    });
    res.send(arrDistance)
});


calcDistanceBetweenTwoPeopleInKM = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = changeDegreesToRadians(lat2 - lat1);
  const dLon = changeDegreesToRadians(lon2 - lon1);
  const radLat1 = changeDegreesToRadians(lat1);
  const tadLat2 = changeDegreesToRadians(lat2);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(tadLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

function changeDegreesToRadians(value) {
  return value * Math.PI / 180;
}




module.exports = router;
