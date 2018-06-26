// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Selecting the submit button, colorPicker and grid block
let submitButton = $('#submit');
const colorPicker = $('#colorPicker');
const table = $('#pixelCanvas');

//Listen for button clicks when the user clicks and submit the size input,call makeGrid()
submitButton.click(function(e) {
//Setting the default background-color 
    colorPicker.val('#000000');
    e.preventDefault();
    makeGrid();
});

//Building the table
 function makeGrid() {
 // Selecting the grid block and size input
	const table = $('#pixelCanvas');
	let rows = $('#inputHeight').val();
	let columns = $('#inputWeight').val();
	//Clear grid when submit button is clicked again
	table.children().remove();
	//Create rows and cells 
	for(let i = 0; i < rows; i++) {
	  table.append('<tr></tr>');
	  for(let j = 0; j < columns; j++) {
	    table.children().last().append('<td></td>');
	}
}
//Listen for cell clicks and sets background-color
  $('td').click(function() {
	$(this).css('background-color', colorPicker.val());
});
  //Double-click to reset color to default white
  table.on('dblclick', 'td', function () {
	$(this).css('background-color', '#ffffff');
});
	 		
}

	  
		 
	

  



 



 
