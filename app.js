const weather = require('./weather');

// clean up user input
const query = process.argv.slice(2).join(" ");

weather.get(query);

