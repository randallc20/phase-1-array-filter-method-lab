// Code your solution here
findMatching = (driverNamesArray, string) => {
    return driverNamesArray.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
    );
}

fuzzyMatch = (driverNamesArray, newString) => {
    return driverNamesArray.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(newString.toLowerCase()) === 0
    );
}
// function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }

function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }