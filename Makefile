.PHONY: build deploy install lint test

PROJECT = eslint-config-ezhome

all: install

deploy:
ifeq ($(CIRCLECI),)
	$(MAKE) test
endif
ifneq ($(TAG),)
	npm publish ./ --tag=$(TAG)
else
	npm publish ./
endif
ifneq ($(SLACK_WEBHOOK_URL),)
	curl -X POST --data-urlencode 'payload={"username": "circleci", "icon_url": "https://slack.global.ssl.fastly.net/d448/plugins/circleci/assets/bot_48.png", "text": "New `$(PROJECT)` version released: `$(shell node -e "console.log(require('./package.json').version)")`"}' $(SLACK_WEBHOOK_URL)
endif

install: .install

.install: package.json
	npm install
	touch $@

lint: .install
	npm run lint

test: lint
