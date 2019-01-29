docker build . -t lhl-lectures/w01d2-breakout:latest
docker run --rm -it -v `pwd`:/usr/src/app lhl-lectures/w01d2-breakout:latest bash