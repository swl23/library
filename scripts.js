const myLibrary = [];

function Book(name, author, length, read) {
	this.name = name;
	this.author = author;
	this.length = length;
	this.read = read;
}

function addBookToLibrary(name, author, length, read) {
	const newBook = new Book(name, author, length, read);
	myLibrary.push(newBook)
}

function displayBooks(arr) {
	arr.forEach(book => console.table(book))
}


addBookToLibrary("Batman", "Bob Kane", "27 pages", "not read");
addBookToLibrary("Slaughterhouse-Five", "Kurt Vonnegut Jr.", "275 pages", "have read");
addBookToLibrary("Will You Please Be Quiet, Please?", "Raymond Carver", "181 pages", "have read");
addBookToLibrary("The Nix", "Nathan Hill", "625 pages", "have read");

displayBooks(myLibrary);