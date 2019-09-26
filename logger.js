// Import the necessary Node.js Packages
var fs = require('fs');

module.exports = {
    getStrDivider: function () {
        return '\n----------------------------------------------------------------------';
    },
    print: function (strToPrint) {
        console.log(strToPrint);
        fs.appendFile('log.txt', strToPrint, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('also printed to log.txt file...' + module.exports.getStrDivider());
            }
        })
    }
}