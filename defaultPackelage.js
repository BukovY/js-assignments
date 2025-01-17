{
  "name": "js-training",
  "version": "1.1.0",
  "description": "JS training tasks",
  "scripts": {
  "lint": "eslint ./**/*.js",
    "test": "./node_modules/.bin/mocha",
    "test-debug": "./node_modules/.bin/mocha --debug-brk",
    "prepush": "npm run lint && npm test"
},
  "author": "IT Shark Pro",
  "license": "MIT",
  "devDependencies": {
  "eslint": "^5.4.0",
    "husky": "^1.0.0",
    "mocha": "^5.2.0"
},
  "repository": {
  "type": "git",
    "url": "git@git.github.com:it-shark-pro/js-assignments.git"
}
}
