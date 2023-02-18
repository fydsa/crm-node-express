import {
	addNewContact,
	deleteContact,
	getContacts,
	getContactWithID,
	updateContact,
} from '../controllers/crmController';

const routes = (app) => {
	app.route('/contact')
		.get((req, res, next) => {
			// middleware
			console.log('the req?', req.originalUrl);
			console.log('the type?', req.method);
			next();
		}, getContacts)
		.post(addNewContact);
	app.route('/contact/:contactId')
		// get specific contact
		.get(getContactWithID)
		.put(updateContact)
		.delete(deleteContact);
};

export default routes;
