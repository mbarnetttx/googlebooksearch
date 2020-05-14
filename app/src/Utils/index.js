
// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have 
// this _after_ all other routes are defined.

import axios from "axios";

export default {
	// Gets all items
	allBooks: function () {
		console.log("All books");
		return axios.get("/api/books/");
	},
	// Gets the item with the given id
	getBooks: function (id) {
		return axios.get("/api/books/" + id);
	},
	updateBooks: function (id, books) {
		return axios.put("/api/books/" + id, books);
	},
	// Deletes the item with the given id
	deleteBooks: function (id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves an item to the database
	saveBooks: function (books) {
		console.log("Book saved");
		return axios.post("/api/books/", books);
	},
};
