# tech_task-eneba

## Database

### Introduction

This project includes a PostgreSQL database, used by the back-end to store, retrieve, and manage application data.

### Structure

#### Game
| Field | Type | Desc |
| --- | --- | --- |
| GameId | int | Serial Primary Key |
| UserId | int | Foreign Key |
| GameTitle | VARCHAR | Game Title |
| GameRegion | VARCHAR | Region displayed in the Game Card |
| GamePrice | FLOAT | Game price displayed in the Game Card |
| Platform | VARCHAR | Platform for future development (Filter by platform) |
| ImageUrl | VARCHAR | Image URL which is stored in the back-end |

#### User

| Field | Type | Desc |
| --- | --- | --- |
| UserId | int | Serial Primary Key |
| Username | VARCHAR | User's name |
| Email | VARCHAR | User's email address |
| PasswordHash | VARCHAR | User's Hashed Password |

#### Entity Relation Diagram
<img width="640" height="300" alt="Untitled Diagram drawio" src="https://github.com/user-attachments/assets/b8ae631c-818b-4d38-bbad-08982c019eed" />
