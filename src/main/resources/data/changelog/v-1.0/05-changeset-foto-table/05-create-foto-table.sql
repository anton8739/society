CREATE TABLE fotos (
  id   serial PRIMARY KEY,
  author_id int not null,
  url varchar(200),
  timeOfCreating timestamp with TIME ZONE,
  CONSTRAINT fk_friend
      FOREIGN KEY(author_id)
          REFERENCES users(user_id)
)
GO

