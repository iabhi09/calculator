document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const clearButton = document.getElementById('clear');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const equalsButton = document.getElementById('equals');
    const numberButtons = document.querySelectorAll('.number-button');
    const cancelButton = document.getElementById('cancel'); // New Cancel (⌫) button
  
    // Add event listeners for numeric buttons (0-9)
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
        const currentValue = display.value;
  
        if (currentValue === 'Error') {
          display.value = value;
        } else {
          display.value += value;
        }
      });
    });
  
    // Add event listeners for operation buttons (+, -, *, /)
    addButton.addEventListener('click', () => {
      display.value += '+';
    });
  
    subtractButton.addEventListener('click', () => {
      display.value += '-';
    });
  
    multiplyButton.addEventListener('click', () => {
      display.value += '*';
    });
  
    divideButton.addEventListener('click', () => {
      display.value += '/';
    });
  
    // Clear the display
    clearButton.addEventListener('click', () => {
      display.value = '';
    });
  
    // Handle the Cancel (⌫) button
    cancelButton.addEventListener('click', () => {
      const currentValue = display.value;
      if (currentValue !== 'Error') {
        display.value = currentValue.slice(0, -1);
      }
    });
  
    // Evaluate the expression
    equalsButton.addEventListener('click', () => {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    });
  });
  