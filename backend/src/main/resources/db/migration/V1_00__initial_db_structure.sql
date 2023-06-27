CREATE SEQUENCE user_id_seq;
CREATE TABLE users
(
  id       bigint DEFAULT nextval('user_id_seq'::regclass) NOT NULL,
  username varchar(100)                                    NOT NULL,
  PRIMARY KEY (id)
);

CREATE SEQUENCE event_id_seq;
CREATE TABLE events
(
  id         bigint DEFAULT nextval('event_id_seq'::regclass) NOT NULL,
  event_date timestamp                                        NOT NULL,

  PRIMARY KEY (id)
);

CREATE SEQUENCE game_id_seq;
CREATE TABLE games
(
  id                  bigint DEFAULT nextval('game_id_seq'::regclass) NOT NULL,
  game_name           varchar(200)                                    NOT NULL,
  number_of_players   varchar(20)                                     NOT NULL,
  playtime_in_minutes integer                                         NOT NULL,
  description         varchar(400)                                    NOT NULL,
  url                 varchar(200)                                    NOT NULL,

  PRIMARY KEY (id)
);

CREATE SEQUENCE playing_game_id_seq;
CREATE TABLE playing_games
(
  id       bigint DEFAULT nextval('playing_game_id_seq'::regclass) NOT NULL,
  owner_id bigint                                                  NOT NULL,
  game_id  bigint                                                  NOT NULL,
  event_id bigint                                                  NOT NULL,

  PRIMARY KEY (id),
  CONSTRAINT fk_playing_games_game FOREIGN KEY (game_id) REFERENCES games (id),
  CONSTRAINT fk_playing_games_owner FOREIGN KEY (owner_id) REFERENCES users (id),
  CONSTRAINT fk_playing_games_event FOREIGN KEY (event_id) REFERENCES events (id)
);
CREATE INDEX IF NOT EXISTS playing_games_game_idx ON games (id);
CREATE INDEX IF NOT EXISTS playing_games_owner_idx ON users (id);
CREATE INDEX IF NOT EXISTS playing_games_event_idx ON events (id);


CREATE SEQUENCE playing_game_user_id_seq;
CREATE TABLE playing_game_user
(
  id              bigint DEFAULT nextval('playing_game_user_id_seq'::regclass) NOT NULL,
  playing_game_id bigint                                                       NOT NULL,
  user_id         bigint                                                       NOT NULL,

  PRIMARY KEY (id),
  CONSTRAINT fk_playing_game_user_playing_game FOREIGN KEY (playing_game_id) REFERENCES playing_games (id),
  CONSTRAINT fk_playing_game_user_user FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE INDEX IF NOT EXISTS playing_game_user_playing_game_idx ON playing_games (id);
CREATE INDEX IF NOT EXISTS playing_game_user_user_idx ON users (id);
