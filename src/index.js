module.exports = function toReadable(number) {
  const map = {
    unitsMap: [
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
    ],
    teensMap: [
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
    ],
    tensMap: [
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
    ],
  };

  if (number === 0) return 'zero';

  let res = '';

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;

  if (hundreds > 0) {
    res += `${map.unitsMap[hundreds]} hundred`;
  }

  if (tens === 1) {
    res += res ? ` ${map.teensMap[units]}` : map.teensMap[units];
  } else {
    if (tens > 1) {
      res += res ? ` ${map.tensMap[tens]}` : map.tensMap[tens];
    }
    if (units > 0) {
      res += res ? ` ${map.unitsMap[units]}` : map.unitsMap[units];
    }
  }

  return res;
};
