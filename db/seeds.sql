-- work on the burgers_db
USE `burgers_db`;

-- insert 3 burgers
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Dill Burger', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Poblano Picasso Burger', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Beets of Burden Burger', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Sgt. Poblano Pepper Lonely Artichoke Hearts Club Burger', false, CURRENT_TIMESTAMP);

SELECT * FROM burgers;