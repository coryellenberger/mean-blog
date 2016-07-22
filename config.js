module.exports = {
  'pageSecret'	: process.env.FLOTILLA_PAGE_SECRET 	|| 'mylocalsecret',
	'apiSecret'		: process.env.FLOTILLA_API_SECRET 	|| 'mylocalapi',
	// 'databaseUrl'	: process.env.FLOTILLA_DATABASE_URL || 'mongodb://w85dwa918w8a981fwef:faw819ef8w19eawe94w8fEWDA841a9w1a9w8DAwd461d@ds041164.mlab.com:41164/flotilla-test',
	'databaseUrl'	: process.env.FLOTILLA_DATABASE_URL || 'mongodb://M7NmmFuutBCqt3zDo8kc:iM4NUUuZyyZfqEi0TRgFDMYTWrxyjjIyy2hgGtZz@ds035740.mongolab.com:35740/flotilla-node',
	'environment'	: process.env.FLOTILLA_ENVIRONMENT 	|| 'prod'
};