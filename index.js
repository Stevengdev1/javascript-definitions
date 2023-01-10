//FUNCTIONS
//EXAMPLE: IN AN OFFICE ARRANGED OF SHAPED LIKE A GRID, WE CAN USE A FUNCTION TO CALCULATE THE NUMBER OF MONITORS NEEDED.
function monitorCount(rows, columns)  {
  
  return rows * columns; //The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
}
  const numOfMonitors = monitorCount(5, 4);
 console.log(numOfMonitors)