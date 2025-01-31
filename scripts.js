const myLibrary = [];

addBookToLibrary("Batman", "Bob Kane", "27 pages", "No");
addBookToLibrary("Slaughterhouse-Five", "Kurt Vonnegut Jr.", "275 pages", "Yes");
addBookToLibrary("Will You Please Be Quiet, Please?", "Raymond Carver", "181 pages", "No");
addBookToLibrary("The Nix", "Nathan Hill", "625 pages", "Yes");

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
		const arrayPosition = arr.indexOf(book);
		
		const displayArea = document.getElementById("display");
		const card = document.createElement("div");
		card.setAttribute("class", "card");
		card.setAttribute("id", arrayPosition)
		const table = document.createElement("table");
		
		for (const [key, value] of Object.entries(book)) {
			let newRow = document.createElement("tr");
			newRow.setAttribute("class", `${key}`);
			let header = document.createElement("th");
			let data = document.createElement("td");
			header.textContent = `${key}`;

			if (key === "read") {
				const readForm = document.createElement("form");
				const fieldSet = document.createElement("fieldset");
				const yes = document.createElement("div");
				const no = document.createElement("div");

				const yesLabel = document.createElement("label");
				yesLabel.setAttribute("for", "yesRead");
				yesLabel.textContent = "Yes";
				const yesInput = document.createElement("input");
				yesInput.setAttribute("id", "yesRead");
				yesInput.setAttribute("name", "read");
				yesInput.setAttribute("type", "radio");
				yesInput.setAttribute("value", "Yes");

				const noLabel = document.createElement("label");
				noLabel.setAttribute("for", "noRead");
				noLabel.textContent = "No";
				const noInput = document.createElement("input");
				noInput.setAttribute("id", "noRead");
				noInput.setAttribute("name", "read");
				noInput.setAttribute("type", "radio");
				noInput.setAttribute("value", "No");

				
				if (`${value}` === "Yes") {
					yesInput.checked = true;
				}
				else if (`${value}` === "No") {
					noInput.checked = true;
				};
				
				yes.appendChild(yesInput);
				yes.appendChild(yesLabel);
				no.appendChild(noInput);
				no.appendChild(noLabel);
				fieldSet.appendChild(yes);
				fieldSet.appendChild(no);
				readForm.appendChild(fieldSet);
				data.appendChild(readForm);
			}
			else {
				data.textContent = `${value}`;
				console.log("Booty")
			}
			newRow.appendChild(header);
			newRow.appendChild(data);
			table.appendChild(newRow);
		}
		card.appendChild(table);

		const btn = document.createElement("button");
		btn.setAttribute("class", "delete");
		btn.textContent = "X"
		btn.addEventListener("click", () => {
			deleteBook(myLibrary, arrayPosition);
			resetDisplay();
			displayBooks(myLibrary);
	})
		card.appendChild(btn);
		
		displayArea.appendChild(card);
	}
)}

function resetDisplay() {
	const displayArea = document.getElementById("display");
	displayArea.textContent = "";
}

function storeInput(formId) {
	const input = document.getElementById(formId);
	return input.value
}

function deleteBook(arr, index) {
	arr.splice(Number(index), 1);
	console.log(arr)
}

document.addEventListener("DOMContentLoaded", function() {
	const newButton = document.getElementById("new");
	const bookForm = document.getElementById("book-form");

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
		resetDisplay()
		displayBooks(myLibrary);

		return false;
	});

	bookForm.addEventListener("reset", () => {
		bookForm.close()
	});

});