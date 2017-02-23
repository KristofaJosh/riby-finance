var fs = require('fs');
var watched_file = "currency.txt";

var watched_file_stat = new Object();
watched_file_stat = fs.statSync(watched_file);

fs.watch(watched_file, function (event, filename) {
    var current_file = fs.statSync(watched_file);
    fs.open(watched_file, 'r', function(err, fd) {
      var buffer = new Buffer(current_file.size, 'utf-8');

      fs.read(fd, buffer, 0, newDataLength, watched_file_stat.size, function (err, bytesRead, newData) {
        if (err) {
            console.log(err);
        };
        console.log(buffer.slice(0, bytesRead).toString());
      });
      
      watched_file_stat = fs.statSync(watched_file);
    });
});