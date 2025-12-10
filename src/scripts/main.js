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
  
     return numA - numB;  // від меншого до більшого
  });
  
    // Очищаємо tbody
    table.innerHTML = '';
    
    // Додаємо відсортовані рядки
    rows.forEach(row => {
      table.appendChild(row);
    });
  });
})









//почитати про sort;!!!!

// table.addEventListener('click', (e) => {
// // тут проходимося по кожному th, 
// // якшо індекс 0,1 даємо data-type = 'string'
// // якщо більше 2 = 'number'

//   th.forEach((th, i) => {
//   if(i < 2) {
//     th.setAttribute('data-type', 'string')
//   } else {
//     th.setAttribute('data-type', 'number')
//   }
// });

// // тут перевіряю чи дані string; 
// // якщо так то сортую їх за алфавітом
// //  отримую ВЕСЬ РЯДОК тексту  в першій клітинці,
// //  а не лише ПЕРШУ БУКВУ!!!

//   if(e.target.dataset.type === 'string') {
//     rows.sort((a, b) => {
//     const textA = a.querySelector('td.cellIndex').textContent;
//     const textB = b.querySelector('td.cellIndex').textContent;
//     return textA.localeCompare(textB);
//   });
  
//    // } else if(e.target.dataset.type === 'number') {
//    //     rows.sort((a, b) => {
//   //       const numA = ;
// //       const numB = ;
// //     });

//   }
// });








