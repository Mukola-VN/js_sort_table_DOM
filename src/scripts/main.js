'use strict';

// write code here

const table = document.querySelector('tbody');
const th = document.querySelectorAll('th');

th.forEach((thItem, thIndex) => {
  thItem.addEventListener('click', () => {
    const rows = Array.from(table.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellAValue = a.cells[thIndex].textContent.trim();
      const cellBValue = b.cells[thIndex].textContent.trim();

      return cellAValue.localeCompare(cellBValue);
    });

    rows.sort((a, b) => {
      const numA = parseFloat(a.cells[thIndex].textContent.trim());
      const numB = parseFloat(b.cells[thIndex].textContent.trim());

      return numA - numB; // від меншого до більшого
    });

    // Очищаємо tbody
    table.innerHTML = '';

    // Додаємо відсортовані рядки
    rows.forEach((row) => {
      table.appendChild(row);
    });
  });
});

