.PHONY: dev
dev:
	docker build -f Dockerfile.development -t rtssl-game-dev .
	docker run -it -p 3000:3000 --rm -v ${PWD}:/app -v /app/node_modules -e CHOKIDAR_USEPOLLING=true --name rtssl-game-dev rtssl-game-dev

.PHONY: build
build:
	docker build -f Dockerfile.production -t rtssl-game-prod .
	docker run -p 3001:80 --rm --name rtssl-game-prod rtssl-game-prod