INSERT INTO category (id,name) 
VALUES(1,"New Bikes"), 
(2,"Mountain Bikes"), 
(3,"Road Bikes");

INSERT INTO user (id,name,email,password,address,city,state,zip,category_id,accept_email,description) 
VALUES(1,"Jerry Brown","jerry@gmail.com","password","2377 West Shaw","Fresno","CA","93711",1,1,"The fastest rider in the USA"),
(2,"Donald Duck","donny@gmail.com","password","238 Weldon","Oakland","CA","94610",2,1,"The slowest rider in the USA"), 
(3,"Jose Froost","jose@gmail.com","password","311 San Pablo","San Francisco","CA","91234",3,1,"The best rider in the USA");

INSERT INTO events (id,name,address,city,state,zip,category_id,type,description,start_date,start_time,end_date,end_time) 
VALUES(1,"bike show 1","77 Brawley","Tulare","CA","93722",1,1,"The Largest Farm Show in the World","2020-06-01","08:00","2020-06-02","17:00"),
(2,"ride with us","8245 Banana","Tulare","CA","93722",2,2,"Ride Meetup","2020-07-01","08:00","2020-07-02","17:00"), 
(3,"Other","815 Testucules HWY","Los Angeles","CA","4182",3,3,"Ride Meetup","2020-08-01","08:00","2020-08-02","17:00");



INSERT INTO exhibitor (user_id,description) 
VALUES(1,"Come to my incredible booth"),
(1,"Come to my incredible booth"),
(1,"Come to my incredible booth");


INSERT INTO visitor (user_id,event_id) 
VALUES(1,1),
(1,2),
(1,3),
(2,1),
(2,2),
(2,3),
(3,1),
(3,2),
(3,3);


CREATE TABLE rating (
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  comment VARCHAR(200),
  rate INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO rating (user_id,event_id,comment,rate) 
VALUES(1,1,"Very good",1),
(1,2,"Very bad",2),
(1,3,"Very nice",3),
(2,1,"Very good",1),
(2,2,"Very nice",2),
(2,3,"Very large",3),
(3,1,"Very small",1),
(3,2,"Very clear",2),
(3,3,"Very ugly",3);
