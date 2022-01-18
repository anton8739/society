CREATE TABLE audio (
  id   serial PRIMARY KEY,
  user_id int,
  url varchar(200),
  img varchar(200),
  author varchar(100),
  title varchar(100),
  CONSTRAINT fk_audio
    FOREIGN KEY(user_id)
      REFERENCES users(user_id)
)
GO

