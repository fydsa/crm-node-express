import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
	useNewUrlParser: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ expected: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`app is listening to port ${PORT}`);
});
