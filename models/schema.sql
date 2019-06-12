DROP DATABASE IF EXISTS eventsDB;
CREATE DATABASE eventsDB;

-- CREATE TABLE classes
-- (
--     id INT AUTO_INCREMENT,
--     teacher VARCHAR(50) NOT NULL,
--     eventname VARCHAR(50) NOT NULL,
--     category VARCHAR(30) NOT NULL,
--     eventlocation VARCHAR(100) NOT NULL,
--     eventdate DATE NOT NULL,
--     eventtime TIME NOT NULL,
--     eventdescription VARCHAR(4000) NOT NULL,
--     PRIMARY KEY(id)
-- )

--     /* Seeds full of dummy data for testing */
--     INSERT INTO classes (teacher, eventname, category, eventlocation, eventdate, eventtime, eventdescription)
--     VALUES
--     ("User1", "Yoga Class", "Health and Wellness", "1533 Pine Street, Oakland, CA", "2020/06/12", "09:45:00", "We invite you to join us for a yoga class!"),
--     ("User2", "Woodworking Workshop", "Crafting", "123 Berkeley Way, Berkeley, CA", "2020/07/16", "10:00:00", "A basic beginner's woodworking workshop."),
--     ("User3", "Gardening Class", "Gardening", "123 Someplace, Oakland, CA", "2019/10/10", "11:30:00", "Come join us for a gardening class taught by our master gardener.")