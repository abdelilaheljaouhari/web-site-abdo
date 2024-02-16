let isScientific = false;

function appendToResult(value) {
  document.getElementById('result').innerText += value;
}

function clearResult() {
  document.getElementById('result').innerText = '';
}

function backspace() {
  const currentResult = document.getElementById('result').innerText;
  document.getElementById('result').innerText = currentResult.slice(0, -1);
}

function calculateResult() {
  try {
    const expression = document.getElementById('result').innerText;
    const result = eval(expression.replace('%', '/100'));
    document.getElementById('result').innerText = result;
  } catch (error) {
    document.getElementById('result').innerText = 'Error';
  }
}
