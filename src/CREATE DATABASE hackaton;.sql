-- CREATE DATABASE hackaton; 
use hackaton;

-- CREATE TABLE users(
--     userid INT NOT NULL AUTO_INCREMENT,
--     email VARCHAR(30),
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     pitch VARCHAR(200),
--     age INT,
--     user_password VARCHAR(10),
--     user_status VARCHAR(10),
--     gender VARCHAR(100),
--     picture VARCHAR(100),
--     latitude  FLOAT (10),
--     longitude FLOAT (10),
--     PRIMARY KEY (userid)
-- );

-- CREATE TABLE conversations(
--     conversation_id INT NOT NULL AUTO_INCREMENT,
--     user_id1 INT,
--     user_id2 INT,
--     FOREIGN KEY (user_id1) REFERENCES hackaton.users(userid),
--     FOREIGN KEY (user_id2) REFERENCES hackaton.users(userid),
--     PRIMARY KEY (conversation_id)
-- );

-- CREATE table hackaton.messages(
--     message_id INT NOT NULL AUTO_INCREMENT ,
--     message_date DATETIME,
--     message_text  varchar(1000),
--     conversationId INT,
--     user_sending_id INT,
--     user_receiving_id INT,
--     FOREIGN KEY (user_sending_id) REFERENCES  hackaton.users(userid),
--     FOREIGN KEY (user_receiving_id) REFERENCES  hackaton.users(userid),
--     FOREIGN KEY (conversationId) REFERENCES  hackaton.conversations(conversation_id),
--     PRIMARY KEY (message_id)
-- );
