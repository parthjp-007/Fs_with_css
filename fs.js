var fs = require('fs');
var express = require('express');
var app = express();
function create_file() {
    var fs = require('fs');
    fs.open("p1.txt", 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function update_file() {
    fs.appendFile('p1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function delete_file(){
    fs.unlink('p1.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

}

app.listen(3000, () => console.log('Server is running on port 3000'));