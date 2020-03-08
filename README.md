# Marvel app

## Intro

The repository contains one folder for api, one other for the app.
The api acts mainly as a proxy, it remains public but marvel api keys are not shared directly in the browser. It also demonstrates how i usually handle application architecture server side.

## Installation

Clone repository and use docker to run all the things

```sh
    git clone git@github.com:baptistelemoine/pandore.git marvel-app
    cd marvel-app
    docker-compose up

    #api runs on http://localhost:9000/api/{ressource}
    #frontend runs on http://localhost:3000
```
