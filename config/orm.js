// import in the connection to the database
var connection = require('../config/connection.js');

// a function that will be used to build queries
// not necessary but saw someone else using this seems like a good idea for scaling up code later on for numerous queries
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

// another function for building queries
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

// define our orm that will be exported to the burgers.js model
var orm = {
	// selectAll function for grabbing everything from the table
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			// send the query result back to the callback function
			cb(result);
		});
	},
	// insertOne function for inserting one burger into table
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;
		//string builder for query
		queryString += ' (';
		queryString += cols.toString();  
		queryString += ') ';
		queryString += 'VALUES (';
		// queryString += vals[0] + ' , ' + vals[1];
		// pushes in question mark for query input sanitation for Values single "?"
		queryString += printQuestionMarks(vals.length); 
		queryString += ') ';

		console.log(queryString);
		console.log(vals);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			// send the query result back to the callback function
			cb(result);
		});
	},

	// update one function for changing a burger status
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			// send the query result back to the callback function
			cb(result);
		});
	}
};

// export the orm back to the model burger.js
module.exports = orm;