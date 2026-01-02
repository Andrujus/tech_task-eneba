CREATE DATABASE enebatechtask

CREATE TABLE "Game" (
    GameId SERIAL PRIMARY KEY,
    UserId int REFERENCES "User"(UserId),
    GameTitle VARCHAR(255),
    GameRegion VARCHAR(255),
    GamePrice FLOAT,
    Platform VARCHAR(255)
);

CREATE TABLE "User" (
    UserId SERIAL PRIMARY KEY,
    Username VARCHAR(255),
    Email VARCHAR(255),
    PasswordHash VARCHAR(255)
);

INSERT INTO "User" (UserId, Username, Email, PasswordHash)
    VALUES(1, 'andrujus', 'test@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
--password: "password" 

SELECT * from "User";
SELECT * FROM "Game";


-- Add images to the db
INSERT INTO "Game" (GameId, UserId, GameTitle, GameRegion, GamePrice, Platform, ImageUrl) VALUES(5, 1, 'Fifa 23', 'GLOBAL', 29.99, 'XBOX One', 'fifa-23.png');

UPDATE "Game" SET "ImageUrl" = 'fifa-23.png' WHERE gameid = 1;
UPDATE "Game" SET "ImageUrl" = 'rdr-2.png' WHERE gameid = 2;
UPDATE "Game" SET "ImageUrl" = 'split-fiction.png' WHERE gameid = 3;
UPDATE "Game" SET "ImageUrl" = 'rdr-2.png' WHERE gameid = 4;

ALTER TABLE "User"
ADD ImageUrl VARCHAR(255);

UPDATE "User" SET "imageurl" = 'acc_images/andrujus.jpeg' WHERE userid = 1;