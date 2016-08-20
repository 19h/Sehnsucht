all:
	../../node_modules/.bin/browserify -t [ babelify --presets [ es2015 stage-3 ] ] -t uglifyify init.js > production.js
	../../node_modules/.bin/uglifyjs production.js -p 5 -c -m -o production.js
