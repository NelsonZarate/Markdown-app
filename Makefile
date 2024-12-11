bash: 
	docker run -it nginx bash

build:
	docker build -t nginx -f ./ops/Dockerfile .


run: build
	docker run -p 8080:80 -v $(shell pwd)/src/:/usr/share/nginx/html/ nginx

up:
	docker compose up