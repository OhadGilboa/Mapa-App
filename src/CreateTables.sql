--  CREATE DATABASE hackaton;
USE hackaton; 
--  DROP TABLE messages;
--  DROP TABLE conversations;
--  DROP TABLE users;

-- CREATE table hackaton.users(
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

-- CREATE table hackaton.messages
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



--   INSERT INTO hackaton.users(userId,facebookId, email, first_name, last_name, pitch, age, user_status,gender,picture,latitude,longitude, mode, distanceRange, silence)
--     VALUES 
--         (null,'10157306388551009','yambam@gmail.com' , 'yam' , 'ohana', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/72.jpg', 31.963139899999998, 34.80461460000001, "movie",2,false),
--         (null,'10157306388551095','amitAlon@gmail.com' , 'amit' , 'alon', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/71.jpg', 30.963139899999998, 33.80461460000001, "message",2,false),
--         (null,'10157306388551096','inbarkal@gmail.com' , 'inbar' , 'kal', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/70.jpg', 32.963139899999998, 32.80461460000001, "cigarette",2,false),
--         (null,'10157306388551097','maoz@gmail.com' , 'maoz' , 'tzur', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/20.jpg', 32.963139899999998, 32.80461460000001, "sport",2,false),
--         (null,'10157306388551098','yoav@gmail.com' , 'yoav' , 'kal', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/80.jpg', 31.963139899999998, 31.80461460000001, "beer",2,false),
--         (null,'10157306388551099','bam@gmail.com' , 'moran' , 'ohana', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/67.jpg', 31.963139899999998, 34.80461460000001, "movie",2,false),
--         (null,'10157306388551000','yarden@gmail.com' , 'affmit' , 'alon', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/77.jpg', 30.963139899999998, 33.80461460000001, "sos",2,false),
--         (null,'10157306388551001','bbbbb@gmail.com' , 'shmolib' , 'kal', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/45.jpg', 32.963139899999998, 32.80461460000001, "cigarette",2,false),
--         (null,'10157306388551002','dddd@gmail.com' , 'yogev' , 'tzur', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/34.jpg', 32.963139899999998, 32.80461460000001, "dog",2,false),
--         (null,'10157306388551003','yoav@gmail.com' , 'yfff' , 'kal', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/33.jpg', 31.963139899999998, 31.80461460000001, "drink",2,false),
--         (null,'10157306388551004','bam@gmail.com' , 'moran' , 'ohana', 'living the life',33, 'active', 'male','https://randomuser.me/api/portraits/med/men/12.jpg', 31.963139899999998, 34.80461460000001, "coffee",2,false),
--         (null,'10157306388551005','yarden@gmail.com' , 'affmit' , 'alon', 'asta la vista baby',23, 'active', 'male','https://randomuser.me/api/portraits/med/men/28.jpg', 30.963139899999998, 33.80461460000001,"sos",2,false),
--         (null,'10157306388551006','bbbbb@gmail.com' , 'shmolib' , 'kal', 'like jogging',28, 'active', 'female','https://randomuser.me/api/portraits/med/men/42.jpg', 32.963139899999998, 32.80461460000001, "coffee",2,false),
--         (null,'10157306388551007','dddd@gmail.com' , 'yogev' , 'tzur', 'boom bolent',24, 'active', 'male','https://randomuser.me/api/portraits/med/men/44.jpg', 32.963139899999998, 32.80461460000001, "movie",2,false),
--         (null,'10157306388551008','yoav@gmail.com' , 'yfff' , 'kal', 'like boxing',28, 'active', 'male','https://randomuser.me/api/portraits/med/men/45.jpg', 31.963139899999998, 31.80461460000001, "coffee",2,false)


    -- INSERT INTO hackaton.conversations
    -- VALUES
    --     (null, 1, 2),
    --     (null, 2, 3),
    --     (null, 4, 1),
    --     (null, 2, 5)


    -- INSERT INTO hackaton.messages VALUES
    --     (null, "2008-11-11 13:21:44", 'Hi how are you', 1, 1, 2),
    --     (null, "2008-11-11 13:23:46", "Hi how are you", 1, 2, 1),
    --     (null, "2008-11-11 13:23:48", "Good thank for asking", 1, 1, 2),
    --     (null, "2008-11-11 13:30:44", "Hi how are you", 1, 2, 1 ),
    --     (null, "2008-11-11 13:44:44", 'Go to Hell!!!', 2, 2, 3),
    --     (null, "2008-11-11 14:23:44", "Hey man", 2, 3, 2),
    --     (null, "2008-11-11 14:33:44", "Love you too", 2, 3, 2),
    --     (null, "2008-11-11 13:35:44", "i pee on your grave", 2, 2, 3)

-- UPDATE users SET facebookId = "10157306388551006" WHERE facebookId = "10157306388551094"

-- DELETE FROM hackaton.users WHERE facebookId = "4195687070445265" 


