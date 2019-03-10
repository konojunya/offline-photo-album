build:
	yarn build:prod
	cp ./_redirects ./dist/_redirects
	cp ./src/sw.js ./dist/sw.js