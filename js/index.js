window.addEventListener('load', start);

let slider = document.querySelector('#totalRange');
let numericValue = document.querySelector('#numeric');
let writtenValue = document.querySelector('#written');

function units(number) {
  switch (number) {
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8':
      return 'eight';
    case '9':
      return 'nine';
    default:
      return 'zero';
  }
}

function tens(tens) {
  switch (tens) {
    case '1':
      return 'ten';
    case '2':
      return 'twenty';
    case '3':
      return 'thirty';
    case '4':
      return 'fourty';
    case '5':
      return 'fifty';
    case '6':
      return 'sixty';
    case '7':
      return 'seventy';
    case '8':
      return 'eighty';
    case '9':
      return 'ninety';
    default:
      return 'zero';
  }
}

function hundreds(hundreds) {
  switch (hundreds) {
    case '1':
      return 'one hundred';
    case '2':
      return 'two hundred';
    case '3':
      return 'three hundred';
    case '4':
      return 'four hundred';
    case '5':
      return 'five hundred';
    case '6':
      return 'six hundred';
    case '7':
      return 'seven hundred';
    case '8':
      return 'eight hundred';
    case '9':
      return 'nine hundred';
    default:
      return 'zero';
  }
}

function exception(numbers) {
  switch (numbers) {
    case '1':
      return 'eleven';
    case '2':
      return 'twelve';
    case '3':
      return 'thirteen';
    case '4':
      return 'fourteen';
    case '5':
      return 'fifteen';
    case '6':
      return 'sixteen';
    case '7':
      return 'seventeen';
    case '8':
      return 'eighteen';
    case '9':
      return 'nineteen';
    default:
      return 'ten';
  }
}

function start() {
  slider.oninput = function () {
    numericValue.value = this.value;
    if (this.value.length === 1) {
      writtenValue.value = units(this.value);
    } else if (this.value.length === 2) {
      let splitNumbers = this.value.split('');
      if (splitNumbers[0] == 1) {
        let exceptionValue = exception(splitNumbers[1]);
        writtenValue.value = `${exceptionValue}`;
      } else if (splitNumbers[1] == 0) {
        let tensValue = tens(splitNumbers[0]);
        writtenValue.value = `${tensValue}`;
      } else {
        let tensValue = tens(splitNumbers[0]);
        let unitValue = units(splitNumbers[1]);

        writtenValue.value = `${tensValue} ${unitValue}`;
      }
    } else {
      let splitNumbers = this.value.split('');
      if (splitNumbers[1] == 0 && splitNumbers[2] == 0) {
        let hundredsValue = hundreds(splitNumbers[0]);
        writtenValue.value = `${hundredsValue}`;
      } else if (splitNumbers[1] == 0) {
        let hundredsValue = hundreds(splitNumbers[0]);
        let unitValue = units(splitNumbers[2]);
        writtenValue.value = `${hundredsValue} and ${unitValue}`;
      } else if (splitNumbers[1] == 1) {
        let hundredsValue = hundreds(splitNumbers[0]);
        let exceptionValue = exception(splitNumbers[2]);
        writtenValue.value = `${hundredsValue} and ${exceptionValue}`;
      } else if (splitNumbers[2] == 0) {
        let hundredsValue = hundreds(splitNumbers[0]);
        let tensValue = tens(splitNumbers[1]);
        writtenValue.value = `${hundredsValue} and ${tensValue}`;
      } else {
        let hundredsValue = hundreds(splitNumbers[0]);
        let tensValue = tens(splitNumbers[1]);
        let unitValue = units(splitNumbers[2]);

        writtenValue.value = `${hundredsValue} and ${tensValue} ${unitValue}`;
      }
    }
  };
}
