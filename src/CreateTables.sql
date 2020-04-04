--  CREATE DATABASE hackaton;

USE hackaton; 

--  DROP TABLE messages;
--  DROP TABLE conversations;

--  DROP TABLE users;

-- CREATE table users(
--     userId INT NOT NULL AUTO_INCREMENT,
--     facebookId VARCHAR(35),
--     email VARCHAR(30),
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     pitch VARCHAR(200),
--     age INT,
--     user_status VARCHAR(10),
--     gender VARCHAR(100),
--     picture VARCHAR(300),
--     latitude  FLOAT (10),
--     longitude FLOAT (10),
--     mode VARCHAR(10),
--     distanceRange FLOAT(10),
--     silence BOOLEAN,
--     PRIMARY KEY (userId)
-- );

-- CREATE table hackaton.conversations(
--     conversation_id INT NOT NULL AUTO_INCREMENT ,
--     user_id1 INT,
--     user_id2 INT,
--     FOREIGN KEY (user_id1) REFERENCES hackaton.users(userId),
--     FOREIGN KEY (user_id2) REFERENCES hackaton.users(userId),
--     PRIMARY KEY (conversation_id)
-- );

-- CREATE table messages
-- (
--     message_id INT NOT NULL
--     AUTO_INCREMENT ,
--     message_date DATETIME,
--     message_text  VARCHAR
--     (1000),
--     conversationId INT,
--     user_sending_id INT,
--     user_receiving_id INT,
--     FOREIGN KEY
--     (user_sending_id) REFERENCES  hackaton.users
--     (userId),
--     FOREIGN KEY
--     (user_receiving_id) REFERENCES  hackaton.users
--     (userId),
--     FOREIGN KEY
--     (conversationId) REFERENCES  hackaton.conversations
--     (conversation_id),
--     PRIMARY KEY
--     (message_id)
-- );


  -- INSERT INTO hackaton.users(userId,facebookId, email, first_name, last_name, pitch, age, user_status,gender,picture,latitude,longitude, mode, distanceRange, silence)
  --   VALUES 
  --       (null,'10157306388551009','yambam@gmail.com' , 'Yam' , 'Hadar', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/72.jpg', 31.963139899999998, 34.80461460000001, "movie",2,false),
  --       (null,'10157306388551095','amitAlon@gmail.com' , 'Eram' , 'Chen', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/71.jpg', 31.991253, 34.770701, "message",2,false),
  --       (null,'10157306388551096','inbarkal@gmail.com' , 'Inbar' , 'Levi', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/70.jpg', 32.004011, 34.768046, "cigarette",2,false),
  --       (null,'10157306388551097','maoz@gmail.com' , 'Maor' , 'Tzur', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/20.jpg', 32.006900, 34.767752, "sport",2,false),
  --       (null,'10157306388551098','yoav@gmail.com' , 'Yoav' , 'Natan', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/80.jpg', 32.010973, 34.768090, "beer",2,false),
  --       (null,'10157306388551099','bam@gmail.com' , 'Nir' , 'Dankor', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/67.jpg', 32.014712, 34.767269, "movie",2,false),
  --       (null,'10157306388551000','yarden@gmail.com' , 'Amir' , 'Shemesh', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/77.jpg', 32.017912, 34.765719, "sos",2,false),
  --       (null,'10157306388551001','bbbbb@gmail.com' , 'Nofar' , 'Akhilov', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/45.jpg', 32.021727, 34.766935, "cigarette",2,false),
  --       (null,'10157306388551002','dddd@gmail.com' , 'Noa' , 'Haina', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/34.jpg', 32.026501, 34.766090, "dog",2,false),
  --       (null,'10157306388551003','yoav@gmail.com' , 'Yoni' , 'Shaked', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/33.jpg', 32.033556, 34.763185, "drink",2,false),
  --       (null,'10157306388551004','bam@gmail.com' , 'Omer' , 'Morag', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/12.jpg', 32.051968, 34.757965, "coffee",2,false),
  --       (null,'10157306388551005','yarden@gmail.com' , 'Roy' , 'Sade', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/28.jpg', 32.084162, 34.790629,"sos",2,false),
  --       (null,'10157306388551006','bbbbb@gmail.com' , 'Shlomi' , 'Amir', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/42.jpg', 32.086343, 34.793526, "coffee",2,false),
  --       (null,'10157306388551007','dddd@gmail.com' , 'Dan' , 'Shalom', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/44.jpg', 32.091016, 34.786362, "movie",2,false),
  --       (null,'10157306388551008','yoav@gmail.com' , 'Ron' , 'Moran', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/45.jpg', 32.093870, 34.791544, "coffee",2,false)


    -- INSERT INTO hackaton.conversations
    -- VALUES
    --     (null, 1, 16),
    --     (null, 15, 3),
    --     (null, 4, 16),
    --     (null, 2, 16),
    --     (null, 16, 5),
    --     (null, 2, 17),
    --     (null, 12, 15),
    --     (null, 2, 17),
    --     (null, 2, 5),
    --     (null, 2, 17),
    --     (null, 17, 5),
    --     (null, 2, 15)


    -- INSERT INTO hackaton.messages VALUES
    --     (null, "2008-11-11 13:21:44", 'Hi how are you', 1, 1, 16),
    --     (null, "2008-11-11 13:23:46", "Hi how are you", 1, 16, 1),
    --     (null, "2008-11-11 13:23:48", "Good thank for asking", 1, 1, 16),
    --     (null, "2008-11-11 13:30:44", "Hi how are you", 1, 16, 1 ),
    --     (null, "2008-11-11 13:44:44", 'Go to Hell!!!', 1, 16, 1),
    --     (null, "2008-11-11 14:23:44", "Hey man", 1, 1, 16),
    --     (null, "2008-11-11 14:33:44", "Love you too", 1, 1, 16),
    --     (null, "2008-11-11 13:35:44", "i pee on your grave", 1, 16, 1),

    --     (null, "2008-11-11 13:21:44", 'Hi how are you', 6, 2, 17),
    --     (null, "2008-11-11 13:23:46", "Hi how are you", 6, 17, 2),
    --     (null, "2008-11-11 13:23:48", "Good thank for asking", 6, 2, 17),
    --     (null, "2008-11-11 13:30:44", "Hi how are you", 6, 17, 2 ),
    --     (null, "2008-11-11 13:44:44", 'Go to Hell!!!', 6, 17, 2),
    --     (null, "2008-11-11 14:23:44", "Hey man", 6, 2, 17),
    --     (null, "2008-11-11 14:33:44", "Love you too", 6, 2, 17)




-- UPDATE users SET facebookId = "10157306388551006" WHERE facebookId = "10157306388551094"
-- DELETE FROM hackaton.users WHERE facebookId = "4195687070445265" 