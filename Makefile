.PHONY: bootstrap lint release

all: bootstrap

bootstrap: package.json
	npm install

lint:
	npm run lint

release: lint
ifneq ($(TAG),)
	npm publish ./ --tag=$(TAG)
else
	npm publish ./
endif
