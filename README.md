# Brettbutler

![Screenshot](docs/screenshot.png)

Brettbutler is a software to makes it easier for you to plan the next board game event.
Especially when there are several board games and more people than player seats.

## Features

* Manage available games (Number of players, Playtime, Description, Url)
* Create an event an add games to it
* Participates can require on any future event
* Login with just a name

## Setup

For an easy setup, a docker-compose file is provided in the `deploy` folder.
It is just a basic setup with traefik as reverse proxy on `http`.
Depending on the environment a certificate for TLS is recommended.

## Note

This software will get no versioning and lives on the bloody main branch.
