CREATE TABLE video (
  id   serial PRIMARY KEY,
  user_id int not null,
  title varchar(200),
  author varchar(200),
  views int,
  url varchar(200),
  img varchar(200),
  timeOfCreation varchar(50),
  CONSTRAINT fk_video
    FOREIGN KEY(user_id)
      REFERENCES users(user_id)
)
GO

