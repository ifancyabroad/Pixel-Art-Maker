// Select color input
let color = $('#colorPicker').val();

$('#colorPicker').change(function() {
	color = $('#colorPicker').val();
});
// Select size input
let gridHeight = $('#input_height').val();
let gridWidth = $('#input_width').val();

$('#input_height').change(function() {
	gridHeight = $('#input_height').val();
});

$('#input_width').change(function() {
	gridWidth = $('#input_width').val();
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
	makeGrid();
	return false;
});

function makeGrid() {
	const grid = $('#pixel_canvas');
	const row = $('<tr></tr>');
	const col = $('<td></td>');

	for (let i = 0; i < gridHeight; i++) {
		let currentRow = row.clone();
		grid.append(currentRow);
		for (let j = 0; j < gridWidth; j++) {
			currentRow.append(col.clone());
		}
	}
}
