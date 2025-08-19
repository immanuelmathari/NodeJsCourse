const path = require('path');

// return the directory name of a path
// module.exports = path.dirname(process.mainModule.filename);
// gives us the path that is responsible of where our application is running and this filename is what we put in dirname to get the path to that directory
module.exports = path.dirname(require.main.filename);