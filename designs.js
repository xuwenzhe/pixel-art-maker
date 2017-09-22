// Select color input
// Select size input

document.getElementById("submit").addEventListener("click",function(evt) {
	
	evt.preventDefault();
	makeGrid();

});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	
	let table = document.getElementById("pixel_canvas");
	// delete all rows in the table
	while (table.rows.length > 0)
		table.deleteRow(0);
	let rowNum = document.getElementById("input_height").value;
	let colNum = document.getElementById("input_width").value;
	for (let i = 0; i < rowNum; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < colNum; j++) {
			let cell = row.insertCell(j);
			cell.addEventListener("click", function(evt) {
				let color = document.getElementById("colorPicker").value;
				evt.target.style.backgroundColor = color;
			});
		}
	}

}
