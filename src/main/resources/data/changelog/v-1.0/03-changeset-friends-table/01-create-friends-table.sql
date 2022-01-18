CREATE TABLE friends (
  id   serial PRIMARY KEY,
  friend_id int not null,
  user_id int not null,
    CONSTRAINT fk_friend
          FOREIGN KEY(friend_id)
              REFERENCES users(user_id),
    CONSTRAINT fk_user
          FOREIGN KEY(user_id)
              REFERENCES users(user_id)
)
GO

