const items = [
	{
		Image: "assets/hoodie.svg",
		Name: "Hoodie",
		Type: "Clothing",
		Quantity: 5,
	},
	{
		Image: "assets/med kit.svg",
		Name: "Med kit",
		Type: "First aid",
		Quantity: 2,
	},
	{
		Image: "assets/seashells.svg",
		Name: "Cute seashells",
		Type: "Misc.",
		Quantity: 11,
	},
	{ Image: "assets/cape.svg", Name: "Cape", Type: "Clothing", Quantity: 3 },
];

function addToken(row, col) {
	console.log("row " + row + " col " + col + " cell is clicked!");
}

function filterType(type) {
	// This function is missing something!
	// Find what's missing and make the filter work :))

	console.log("Filtering items: " + type);

	let filteredItems = items;

	if (type != "") {
		filteredItems = items.filter((item) => item.Type == type);
	}

	makeTable(filteredItems);
}

function sortInventory() {
	// This function is missing something!
	// Find what's missing and make the sorting work :))

	console.log("Sorting items by Quantity");

	let sortedItems = items;

	sortedItems.sort((a, b) => a.Quantity - b.Quantity);

	makeTable(sortedItems);
}

function makeTable(array) {
	let table = document.getElementById("inventory-table");

	table.innerHTML = `<tr>
  <th scope="col">Image</th>
  <th scope="col">Name</th>
  <th scope="col">Type</th>
  <th scope="col">Quantity</th>
</tr>`;

	for (let item of array) {
		const newRow = document.createElement("tr");

		const tdImage = document.createElement("td");
		const tdName = document.createElement("td");
		const tdType = document.createElement("td");
		const tdQuantity = document.createElement("td");

		tdImage.innerHTML = `<img src="${item.Image}" alt="hoodie" class="inventory-img" />`;
		tdName.textContent = item.Name;
		tdType.textContent = item.Type;
		tdQuantity.textContent = item.Quantity;

		newRow.appendChild(tdImage);
		newRow.appendChild(tdName);
		newRow.appendChild(tdType);
		newRow.appendChild(tdQuantity);

		table.appendChild(newRow);
	}
}
