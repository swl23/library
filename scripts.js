const myLibrary = [];

addBookToLibrary("Batman", "Bob Kane", "27 pages", "not read");
addBookToLibrary("Slaughterhouse-Five", "Kurt Vonnegut Jr.", "275 pages", "have read");
addBookToLibrary("Will You Please Be Quiet, Please?", "Raymond Carver", "181 pages", "have read");
addBookToLibrary("The Nix", "Nathan Hill", "625 pages", "have read");

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
	arr.forEach(book => {
		const displayArea = document.getElementById("display")
		const card = document.createElement("div");
		card.setAttribute("class", "card");
		const table = document.createElement("table");
		
		for (const [key, value] of Object.entries(book)) {
			let newRow = document.createElement("tr");
			let header = document.createElement("th");
			header.textContent = `${key}`;
			let data = document.createElement("td");
			data.textContent = `${value}`;

			newRow.appendChild(header);
			newRow.appendChild(data);
			table.appendChild(newRow);
		}
		card.appendChild(table);
		displayArea.appendChild(card);
	})
}

function resetDisplay(arr) {
	const displayArea = document.getElementById("display");
	displayArea.textContent = "";
}

function storeInput(formId) {
	const input = document.getElementById(formId);
	return input.value
}


document.addEventListener("DOMContentLoaded", function() {
	const newButton = document.getElementById("new");
	const bookForm = document.getElementById("book-form");
	const createBook = document.getElementById("add");

	displayBooks(myLibrary);

	newButton.addEventListener("click", () => {
		bookForm.showModal();
	});

	bookForm.addEventListener("submit", () => {

		const newName = storeInput("name");
		const newAuthor = storeInput("author");
		const newLength = storeInput("length");
		const newRead = storeInput("read");

		addBookToLibrary(newName, newAuthor, newLength, newRead);
		resetDisplay(myLibrary)
		displayBooks(myLibrary);
		return false;
	})

});



