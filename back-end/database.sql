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

INSERT INTO "Game" (GameId, UserId, GameTitle, GameRegion, GamePrice, Platform) VALUES(1, 1, 'Fifa 23 Steam Key', 'GLOBAL', 41.99, 'PC');