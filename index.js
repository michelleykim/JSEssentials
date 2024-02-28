function addToken(row, col) {
	console.log("row " + row + " col " + col + " cell is clicked!");

	let cell = document.getElementById(row + "-" + col);
	let boatToken = `<img src="assets/boat.svg" alt="ship-token" class="map-icon">`;
	let treasureToken = `<img src="assets/treasure.svg" alt="ship-token" class="map-icon">`;
	let XToken = `<img src="assets/X marks the spot.svg" alt="ship-token" class="map-icon">`;

	if (cell.innerHTML == "&nbsp;") {
		cell.innerHTML = boatToken;
	} else if (cell.innerHTML == boatToken) {
		cell.innerHTML = treasureToken;
	} else if (cell.innerHTML == treasureToken) {
		cell.innerHTML = XToken;
	} else if (cell.innerHTML == XToken) {
		cell.innerHTML = "&nbsp;";
	}
}

function filterType(type) {
	let items = [
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

	if (type != "") {
		items = items.filter((item) => item.Type == type);
	}

	let table = document.getElementById("inventory-table");

	table.innerHTML = `<tr>
  <th scope="col">Image</th>
  <th scope="col">Name</th>
  <th scope="col">Type</th>
  <th scope="col">Quantity</th>
</tr>`;

	for (let item of items) {
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
