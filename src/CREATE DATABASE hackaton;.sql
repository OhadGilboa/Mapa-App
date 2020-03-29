CREATE DATABASE hackaton; 

CREATE table hackaton.users(
    userid int NOT NULL AUTO_INCREMENT,
    email varchar(30),
    first_name varchar(50),
    last_name varchar(50),
    pitch varchar(200),
    age int,
    user_password varchar(10),
    user_status varchar(10),
    gender varchar(100),
    picture varchar(100),
    latitude  FLOAT (10),
    longitude FLOAT (10),
    PRIMARY KEY (userid)
);

CREATE table hackaton.conversations(
    conversation_id int NOT NULL AUTO_INCREMENT ,
    user_id1 INT,
    user_id2 INT,
    FOREIGN KEY (user_id1) REFERENCES hackaton.users(userid),
    FOREIGN KEY (user_id2) REFERENCES hackaton.users(userid),
    PRIMARY KEY (conversation_id)
);

CREATE table hackaton.messages(
    message_id INT NOT NULL AUTO_INCREMENT ,
    message_date DATETIME,
    message_text  varchar(1000),
    conversationId INT,
    FOREIGN KEY (conversationId) REFERENCES  hackaton.conversations(conversation_id),
    PRIMARY KEY (message_id)
)


