CREATE DATABASE hackaton; 

CREATE table hackaton.users(
    userid INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(30),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    pitch VARCHAR(200),
    age INT,
    user_password VARCHAR(10),
    user_status VARCHAR(10),
    gender VARCHAR(100),
    picture VARCHAR(100),
    latitude  FLOAT (10),
    longitude FLOAT (10),
    PRIMARY KEY (userid)
);

CREATE table hackaton.conversations(
    conversation_id INT NOT NULL AUTO_INCREMENT ,
    user_id1 INT,
    user_id2 INT,
    FOREIGN KEY (user_id1) REFERENCES hackaton.users(userid),
    FOREIGN KEY (user_id2) REFERENCES hackaton.users(userid),
    PRIMARY KEY (conversation_id)
);

CREATE table hackaton.messages
(
    message_id INT NOT NULL
    AUTO_INCREMENT ,
    message_date DATETIME,
    message_text  VARCHAR
    (1000),
    conversationId INT,
    user_sending_id INT,
    user_receiving_id INT,
    FOREIGN KEY
    (user_sending_id) REFERENCES  hackaton.users
    (userid),
    FOREIGN KEY
    (user_receiving_id) REFERENCES  hackaton.users
    (userid),
    FOREIGN KEY
    (conversationId) REFERENCES  hackaton.conversations
    (conversation_id),
    PRIMARY KEY
    (message_id)
);


    INSERT INTO hackaton.users(userid, email, first_name, last_name, pitch, age, user_password, user_status,gender,picture,latitude,longitude)
    VALUES 
        (null, 'yambam@gmail.com' , 'yam' , 'ohana', 'living the life',33, 123123, 'active', 'male','https://randomuser.me/api/portraits/med/men/72.jpg', 31.963139899999998, 34.80461460000001),
        (null,'amitAlon@gmail.com' , 'amit' , 'alon', 'asta la vista baby',23, 11111, 'active', 'male','https://randomuser.me/api/portraits/med/men/71.jpg', 30.963139899999998, 33.80461460000001),
        (null,'inbarkal@gmail.com' , 'inbar' , 'kal', 'like jogging',28, 123133, 'active', 'female','https://randomuser.me/api/portraits/med/men/70.jpg', 32.963139899999998, 32.80461460000001),
        (null,'maoz@gmail.com' , 'maoz' , 'tzur', 'boom bolent',24, 1111, 'active', 'male','https://randomuser.me/api/portraits/med/men/20.jpg', 32.963139899999998, 32.80461460000001),
        (null,'yoav@gmail.com' , 'yoav' , 'kal', 'like boxing',28, 3333, 'active', 'male','https://randomuser.me/api/portraits/med/men/80.jpg', 31.963139899999998, 31.80461460000001)

    INSERT INTO hackaton.users
        (userid, email, first_name, last_name, pitch, age, user_password, user_status,gender,picture,latitude,longitude)
    VALUES
        (null, 'yambam@gmail.com' , 'yam' , 'ohana', 'living the life', 33, 123123, 'active', 'male', 'https://randomuser.me/api/portraits/med/men/72.jpg', 31.963139899999998, 34.80461460000001),
        (null, 'amitAlon@gmail.com' , 'amit' , 'alon', 'asta la vista baby', 23, 11111, 'active', 'male', 'https://randomuser.me/api/portraits/med/men/71.jpg', 30.963139899999998, 33.80461460000001),
        (null, 'inbarkal@gmail.com' , 'inbar' , 'kal', 'like jogging', 28, 123133, 'active', 'female', 'https://randomuser.me/api/portraits/med/men/70.jpg', 32.963139899999998, 32.80461460000001),
        (null, 'maoz@gmail.com' , 'maoz' , 'tzur', 'boom bolent', 24, 1111, 'active', 'male', 'https://randomuser.me/api/portraits/med/men/20.jpg', 32.963139899999998, 32.80461460000001),
        (null, 'yoav@gmail.com' , 'yoav' , 'kal', 'like boxing', 28, 3333, 'active', 'male', 'https://randomuser.me/api/portraits/med/men/80.jpg', 31.963139899999998, 31.80461460000001)

    INSERT INTO hackaton.conversations
    VALUES
        (null, 1, 2),
        (null, 2, 3),
        (null, 4, 1),
        (null, 2, 5)

    INSERT INTO hackaton.messages
    VALUES
        (null, "2008-11-11 13:21:44", 'Hi how are you', 1, 1, 2),
        (null, "2008-11-11 13:23:46", "Hi how are you", 1, 2, 1),
        (null, "2008-11-11 13:23:48", "Good thank for asking", 1, 1, 2),
        (null, "2008-11-11 13:30:44", "Hi how are you", 1, 2, 1 ),
        (null, "2008-11-11 13:44:44", 'Go to Hell!!!', 2, 2, 3),
        (null, "2008-11-11 14:23:44", "Hey man", 2, 3, 2),
        (null, "2008-11-11 14:33:44", "Love you too", 2, 3, 2),
        (null, "2008-11-11 13:35:44", "i pee on your grave", 2, 2, 3)