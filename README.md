# flotilla

#### Starting up MongoDB local
After installing MongoDB MSI locally (Windows)
execute the following command in
C:\Program Files\MongoDB\Server\3.0\bin

`mongod.exe --dbpath "D:\flotilla-work\data"`

#### Mocking a Heroku Release
delete the node_modules and public/components folder then run the following command
`npm install --quiet --production`

#### get JSDocs
`jsdoc ./src/ -r`