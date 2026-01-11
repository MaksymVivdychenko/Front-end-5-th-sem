const columns = 6;
const rows = 6;
const table = document.querySelector('table');
const color_picker = document.querySelector('.color-picker');
let cell_number = 1;
let target_cells = [];
for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for(let j = 0; j < columns; j++) {
        const cell = document.createElement('td');
        cell.textContent = cell_number;
        if(cell_number === 10)
        {
            cell.addEventListener("mouseover", () => randomColor(cell));
            cell.addEventListener("click", () => cell.style.backgroundColor = color_picker.value);
            cell.addEventListener("dblclick", () => target_cells.forEach(element => element.style.backgroundColor = color_picker.value));
        }
        if(i === 1 && cell_number >= 10 && cell_number % 2 === 0) //Додавання клітинок на події double click
        {
            target_cells.push(cell);
        }

        cell_number++;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
function randomColor(cell)
{
    cell.style.backgroundColor = `rgb(${Math.floor(Math.random()*360)},
    ${Math.floor(Math.random()*360)},${Math.floor(Math.random()*360)})`;
}
