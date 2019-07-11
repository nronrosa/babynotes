-- Users that must be in Db for associations to work. 
use babyNotesdb;
INSERT INTO users (firstname, lastname, email, password, createdAt, updatedAt) 
VALUES ("A", "A", "a@a.com", "123", now(), now());

INSERT INTO users (firstname, lastname, email, password, createdAt, updatedAt) 
VALUES ("B", "B", "b@b.com", "123", now(), now());

INSERT INTO users (firstname, lastname, email, password, createdAt, updatedAt) 
VALUES ("C", "C", "c@c.com", "123", now(), now());

-- Activites List options: insert actlists
-- Order: Activity 1, Activity 2, Acitivity 3, Activity 4

-- Children: Insert into children
-- Each child is named per user id: child a.1 is the first childe of user 1, etc.

-- Child activities


use babyNotesdb;
INSERT INTO actlists (activity, createdAt, updatedAt) 
VALUES ("journal", now(), now());

INSERT INTO actlists (activity, createdAt, updatedAt) 
VALUES ("sleep", now(), now());

INSERT INTO actlists (activity, createdAt, updatedAt) 
VALUES ("diaper change", now(), now());

INSERT INTO actlists (activity, createdAt, updatedAt) 
VALUES ("eat", now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child A.1","2019-01-01", 1, now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child B.1","2017-12-25", 1, now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child A.2","2014-06-10", 2, now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child B.2","2017-07-13", 2, now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child C.2","2016-09-09", 2, now(), now());

INSERT INTO children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Child A.3","2019-05-18", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child A.1 journal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis nisl in tincidunt congue. Sed sed ultricies urna. Suspendisse risus est, ultrices et turpis at, malesuada elementum felis. In hac habitasse platea dictumst. Ut ut eros auctor, finibus orci faucibus, scelerisque nunc. Maecenas urna enim, semper vel risus id, bibendum egestas ex. ", now(), now(), now(), "title", 1, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Child A.1 sleep", now(), now(), now(), "title", 1, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child A.1 diaper change", now(), now(), now(), "title", 1, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Child A.1 eat", now(), now(), now(), "title", 1, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Child B.1 sleep", now(), now(), now(), "title", 2, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child B.1 diaper change", now(), now(), now(), "title", 2, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child A.2 journal 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis nisl in tincidunt congue. Sed sed ultricies urna. Suspendisse risus est, ultrices et turpis at, malesuada elementum felis. In hac habitasse platea dictumst. Ut ut eros auctor, finibus orci faucibus, scelerisque nunc. Maecenas urna enim, semper vel risus id, bibendum egestas ex. ", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Child A.2 sleep 1", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child A.2 diaper change 1", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Child A.2 eat 1", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child A.2 journal 2  Proin condimentum, ante id lobortis sodales,", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Child A.2 sleep 2", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child A.2 diaper change 2", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Child A.2 eat 2", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child A.2 journal 3 Phasellus auctor purus vel lorem molestie auctor. Donec placerat vehicula enim ac lacinia. Proin suscipit purus id viverra congue. Mauris eget ipsum erat. Integer consequat dui ligula, vitae rhoncus nibh tincidunt a. Curabitur eu convallis orci. Sed imperdiet lacus ut felis maximus fringilla. Pellentesque eu hendrerit enim. Sed sed laoreet orci.", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Child A.2 sleep 3", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child A.2 diaper change 3", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Child A.2 eat 3", now(), now(), now(), "title", 3, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Child B.2 diaper change", now(), now(), now(), "title", 4, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Child B.2 eat", now(), now(), now(), "title", 4, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child C.2 journal Donec vel eros ac odio blandit lacinia. Phasellus vehicula erat eget imperdiet hendrerit. Etiam vulputate neque lectus, id suscipit odio aliquet eget. Proin quis leo sed enim fermentum venenatis. Sed sed augue fermentum, malesuada orci a, eleifend sem. Proin non nulla vel mauris convallis ultricies vulputate a ligula. Ut euismod accumsan imperdiet. Morbi ut lectus et magna consectetur faucibus in vitae magna. Fusce volutpat augue non elit hendrerit tincidunt. Donec interdum nibh eu sagittis pulvinar. Duis pellentesque neque et diam vehicula tristique et at dolor. Integer vel commodo turpis.

Pellentesque egestas vehicula elit, sed pretium risus dapibus a. Phasellus non quam vestibulum, tempus diam nec, aliquam magna. Phasellus et hendrerit massa, sit amet euismod dolor. Sed eget quam enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus congue, mauris ac ullamcorper volutpat, odio felis pretium lacus, nec varius orci ex nec quam. Fusce in dignissim tortor, gravida finibus elit. Vivamus venenatis condimentum leo, mollis auctor ante gravida a. Integer id tincidunt purus, id porttitor purus. Integer nec purus sed ligula placerat varius. Nullam non turpis tortor. Aenean imperdiet tortor nec posuere vehicula. Aliquam non est facilisis, dapibus orci eget, posuere augue. Nulla viverra quis nulla at gravida. Phasellus id suscipit dui, sed dictum leo.", now(), now(), now(), "title", 5, now(), now());

INSERT INTO activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Child A.3 journal", now(), now(), now(), "title", 6, now(), now());



-- for heroku seed data

INSERT INTO Children (name, dob, UserId, createdAt, updatedAt) 
VALUES ("Baby Fafrak","2019-09-08", 1, now(), now());

INSERT INTO Activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (1, "Baby Fafrak journal: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis nisl in tincidunt congue. Sed sed ultricies urna. Suspendisse risus est, ultrices et turpis at, malesuada elementum felis. In hac habitasse platea dictumst. Ut ut eros auctor, finibus orci faucibus, scelerisque nunc. Maecenas urna enim, semper vel risus id, bibendum egestas ex. ", now(), now(), now(), "First Journal", 2, now(), now());

INSERT INTO Activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (2, "Baby Fafrak sleep", now(), now(), now(), "First sleep", 2, now(), now());

INSERT INTO Activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (3, "Baby Fafrak diaper change", now(), now(), now(), "First Diaper", 2, now(), now());

INSERT INTO Activities (actList_Id, description, starttime, endtime, date, title, ChildId, createdAt, updatedAt) 
VALUES (4, "Baby Fafrak eat", now(), now(), now(), "First feeding", 2, now(), now());