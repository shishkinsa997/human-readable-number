module.exports = function toReadable(number) {
  const unitsMap = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teensMap = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensMap = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let res = '';

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;

  if (hundreds > 0) {
    res += `${unitsMap[hundreds]} hundred`;
  }

  if (tens === 1) {
    // teen numbers
    res += res ? ` ${teensMap[units]}` : teensMap[units];
  } else {
    if (tens > 1) {
      res += res ? ` ${tensMap[tens]}` : tensMap[tens];
    }
    if (units > 0) {
      res += res ? ` ${unitsMap[units]}` : unitsMap[units];
    }
  }

  return res;
  // let res = '';
  // let strHundreds = '';
  // let strTens = '';
  // let strUnits = '';
  // const hundreds = Math.floor(number / 100) % 10;
  // const tens = Math.floor(number / 10) % 10;
  // const units = number % 10;

  // switch (hundreds) {
  //   case 1:
  //     strHundreds += 'one hundred';
  //     break;
  //   case 2:
  //     strHundreds += 'two hundred';
  //     break;
  //   case 3:
  //     strHundreds += 'three hundred';
  //     break;
  //   case 4:
  //     strHundreds += 'four hundred';
  //     break;
  //   case 5:
  //     strHundreds += 'five hundred';
  //     break;
  //   case 6:
  //     strHundreds += 'six hundred';
  //     break;
  //   case 7:
  //     strHundreds += 'seven hundred';
  //     break;
  //   case 8:
  //     strHundreds += 'eight hundred';
  //     break;
  //   case 9:
  //     strHundreds += 'nine hundred';
  //     break;
  //   default:
  //     strHundreds += '';
  // }

  // switch (tens) {
  //   case 2:
  //     strTens += 'twenty';
  //     break;
  //   case 3:
  //     strTens += 'thirty';
  //     break;
  //   case 4:
  //     strTens += 'forty';
  //     break;
  //   case 5:
  //     strTens += 'fifty';
  //     break;
  //   case 6:
  //     strTens += 'sixty';
  //     break;
  //   case 7:
  //     strTens += 'seventy';
  //     break;
  //   case 8:
  //     strTens += 'eighty';
  //     break;
  //   case 9:
  //     strTens += 'ninety';
  //     break;
  //   default:
  //     strTens += '';
  // }

  // if (tens !== 1) {
  //   switch (units) {
  //     case 1:
  //       strUnits += 'one';
  //       break;
  //     case 2:
  //       strUnits += 'two';
  //       break;
  //     case 3:
  //       strUnits += 'three';
  //       break;
  //     case 4:
  //       strUnits += 'four';
  //       break;
  //     case 5:
  //       strUnits += 'five';
  //       break;
  //     case 6:
  //       strUnits += 'six';
  //       break;
  //     case 7:
  //       strUnits += 'seven';
  //       break;
  //     case 8:
  //       strUnits += 'eight';
  //       break;
  //     case 9:
  //       strUnits += 'nine';
  //       break;
  //     default:
  //       strUnits += '';
  //   }
  // } else {
  //   switch (units) {
  //     case 0:
  //       strTens += 'ten';
  //       break;
  //     case 1:
  //       strTens += 'eleven';
  //       break;
  //     case 2:
  //       strTens += 'twelve';
  //       break;
  //     case 3:
  //       strTens += 'thirteen';
  //       break;
  //     case 4:
  //       strTens += 'fourteen';
  //       break;
  //     case 5:
  //       strTens += 'fifteen';
  //       break;
  //     case 6:
  //       strTens += 'sixteen';
  //       break;
  //     case 7:
  //       strTens += 'seventeen';
  //       break;
  //     case 8:
  //       strTens += 'eighteen';
  //       break;
  //     case 9:
  //       strTens += 'nineteen';
  //       break;
  //     default:
  //       strTens += '';
  //   }
  // }
  // if (hundreds && tens && units && tens !== 1) {
  //   res += `${strHundreds} ${strTens} ${strUnits}`;
  // } else if (
  //   (hundreds && tens === 1 && units) ||
  //   (hundreds && tens && units === 0)
  // ) {
  //   res += `${strHundreds} ${strTens}`;
  // } else if (hundreds && tens === 0 && units) {
  //   res += `${strHundreds} ${strUnits}`;
  // } else if (
  //   (hundreds === 0 && tens && units === 0) ||
  //   (hundreds === 0 && tens === 1 && units)
  // ) {
  //   res += `${strTens}`;
  // } else if (hundreds === 0 && tens > 1 && units) {
  //   res += `${strTens} ${strUnits}`;
  // } else if (hundreds && tens === 0 && units === 0) {
  //   res += `${strHundreds}`;
  // } else if (number === 0) {
  //   res += 'zero';
  // } else {
  //   res += `${strUnits}`;
  // }
  // return res;
};
