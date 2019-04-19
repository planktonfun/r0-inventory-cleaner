//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, 'data_pool');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    var prices = {};

    //listing all files using forEach
    files.forEach(function (file) {

    	if(file.includes('.json')) {
        	// Do whatever you want to do with the file
        	console.log(file);
        	var data = fs.readFileSync(directoryPath + '/' + file, 'utf-8');
        	var data = JSON.parse(data);


        	prices[data['data']['item_name']] = {
        		'price': data['data']['data']['price'],
        		'snapping': data['data']['data']['snapping'] | null
        	}
    	}
    });

    fs.writeFile("./price.js", "var prices = " + JSON.stringify(prices, null, 2) + ";", function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	});
});