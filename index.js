// code your solution here
// superbowlWin = (record) => {
//     const result = record.find(record => record.result === "W");
//     return !!result ? result.year : undefined;
// }


//different way
function superbowlWin(teamYears) { 
    console.log(teamYears)
    const winningRecord = teamYears.find(yearDate => yearDate.result === "W")
    return winningRecord ? winningRecord.year : undefined;
    
}
console.log(winningRecord)
//    

//example - array.find(inside paranthesis includes the whole element) - for this example all the records
//? is a ternary operator - expression to see if a result is true or false
//since result is true it returned true if it was false it would return undefined
//what comes before the arrow is a parameter