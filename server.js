const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db');
const cors = require('cors');

const port = 8082;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.use(cors({
	origin: '*'
}));
app.use(bodyParser.json());

// handle error handling

app.get(
	'/products',
	function (req, res) {
		const { category = null} = req.query;

		let query = 'SELECT * FROM Products';
    const queryParams = [];

    if (category) {
      query += ' WHERE category = ?';
      queryParams.push(category);
    }
		
		connection.query(
			query,
			queryParams,
			function(err, result) {
				if (err) { console.log(err, "while fetching"); }
				else { res.send(result); }
			}
		)
	},
);

app.post('/place-order', (req, res) => {
	const { cartProducts } = req.body;
	const { user_id } = req.headers;
	const total_price = cartProducts.reduce((acc, item) => acc+(item.price * item.qty), 0);
	connection.query(
		"INSERT INTO Orders (amount, user_id) VALUES ?",
		[[[total_price, user_id]]],
		function(err, result) {
			if (err) { throw err; }
			cartProducts.map((item) => {
				switch(item.category) {
					case 'chairs': {
						connection.query(
							"INSERT INTO Order_Chairs (order_id, chair_id, quantity) VALUES ?",
							[[[result.insertId, item.id, item.qty]]],
							function(err) {
								if (err) { throw err; }
							}
						);
						break;
					}
					case 'tables': {
						connection.query(
							"INSERT INTO Order_Tables (order_id, table_id, quantity) VALUES ?",
							[[[result.insertId, item.id, item.qty]]],
							function(err) {
								if (err) { throw err; }
							}
						);
						break;
					}
					case 'dining-tops': {
						connection.query(
							"INSERT INTO Order_Tops (order_id, top_id, quantity) VALUES ?",
							[[[result.insertId, item.id, item.qty]]],
							function(err) {
								if (err) { throw err; }
							}
						);
						break;
					}
				}
			});
			res.send(result);
		}
	);
});

app.post('/user', (req, res) => {
	const { name, email } = req.body;
	connection.query(
		"INSERT INTO Users (name, email) VALUES ?",
		[[[name, email]]],
		function(err, result) {
			if (err) {
				throw err;
			}
			res.send(result);
		}
	);
});