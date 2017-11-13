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
	$('tr, td').remove();
	makeGrid();
	paintOnGrid();
	return false;
});

$(function() {
    $('.tools').draggable();
});

// Change color to white for eraser button
$('#eraser').click(function() {
	color = ('rgba(255, 255, 255, 0.4)');
});

// Reset grid to white for reset button
$('#reset').click(function() {
	$('td').css({'background-color': 'white'});
});

// Create a grid based on grid height and width
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

// Enable painting on the grid
function paintOnGrid() {
	let painting = false;

	$('td').mousedown(function() {
		painting = true;
		$(this).css({'background-color': color});
	});

	$('body').mouseup(function() {
		painting = false;
	});

	$('#pixel_canvas').mouseleave(function() {
		painting = false;
	});

	$('td').hover(function() {
		if (painting == true) {
			$(this).css({'background-color': color});
		}
	});
}