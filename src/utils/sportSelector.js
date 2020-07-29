const sportSelector = sport => {
  let sportName;
  switch (sport) {
    case 1:
      sportName = 'Cycling';
      break;
    case 2:
      sportName = 'Jogging';
      break;
    case 3:
      sportName = 'Swimming';
      break;
    case 4:
      sportName = 'Walking';
      break;
    case 5:
      sportName = 'Weight Lifting';
      break;
    case 6:
      sportName = 'Treadmill-workout';
      break;
    default:
      sportName = '';
  }
  return sportName;
};

export default sportSelector;
