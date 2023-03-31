CREATE SEQUENCE game_id_seq;

CREATE TABLE games
(
    id                integer DEFAULT nextval('game_id_seq'::regclass) NOT NULL,
    game_name         varchar(200)                                     NOT NULL,
    number_of_players integer                                          NOT NULL
)
