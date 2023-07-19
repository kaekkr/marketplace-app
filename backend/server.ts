import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Welcome');
});

mongoose
	.connect(process.env.MONGODB_CONNECTION!)
	.then(() => {
		console.log('Mongoose Connected');
		app.listen(port, () => {
			console.log('listening on port ' + port);
		});
	})
	.catch(err => console.error(err));
