let vacationType = "";
let groupSize;
let destination;
let travelSuggestion;
while (
  vacationType.toLowerCase() !== "musical" &&
  vacationType.toLowerCase() !== "tropical" &&
  vacationType.toLowerCase() !== "adventurous"
) {
  vacationType = prompt(
    "What kind of trip would you like to go on? (Musical, tropical, or adventurous)"
  );
}
while (isNaN(parseInt(groupSize))) {
    groupSize = prompt('How many people are you going with?');

}

groupSize = parseInt(groupSize);

switch (vacationType.toLowerCase()) {
    case 'musical':
        destination = 'New Orleans.';
        break;
    
    case 'Tropical':
        destination = 'beach vacation in Mexico.';
        break;
    
    case 'adventurous':
        destination = 'whitewater rafting in the Grand Canyon.'
        break;
}

if (groupSize <= 2) {
    travelSuggestion = 'first class flight';
}

if (groupSize >= 3 && groupSize <= 5) {
    travelSuggestion = 'helicopter'
}

if (groupSize > 5) {
    travelSuggestion = 'charter flight'
}

alert(`Since you are a group of ${groupSize} going on a ${vacationType} vacation, youshould take a ${travelSuggestion} to ${destination} (Also printed to console)`)

console.log(`Since you are a group of ${groupSize} going on a ${vacationType} vacation, yous hould take a ${travelSuggestion} to ${destination}`)