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