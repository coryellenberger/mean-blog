# Mean Blog

[![Build Status](https://travis-ci.org/coryellenberger/mean-blog.svg?branch=master)](https://travis-ci.org/coryellenberger/mean-blog) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Angular Style Guide](https://img.shields.io/badge/style-angularjs-brightgreen.svg?style=flat)](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) [![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()

#### Initializing Project
This will install all of the node modules for this project
After node modules it will run gulp to execute bower bringing in client components
``` 
$ npm install
```

#### Start Project
The following command will start the node express server on port 3000 
```
$ npm start
```
You can then go to localhost:3000

#### Run Unit tests/JSDocs
```
$ npm test
```

#### Starting up MongoDB local
After installing MongoDB MSI locally (Windows)
execute the following command in
C:\Program Files\MongoDB\Server\3.0\bin

```
$ mongod.exe --dbpath "D:\mean-blog\data"
```

#### Mocking a Heroku Release
delete the node_modules and public/components folder then run the following command
```
$ npm install --quiet --production
```

#### get JSDocs
```
$ gulp docs
```