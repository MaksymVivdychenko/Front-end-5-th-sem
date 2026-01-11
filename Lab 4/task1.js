let is_firstElChanged = false;
let is_secondElChanged = false;

const firstEl = document.getElementById("1");
const secondEl = document.querySelector("p");

firstEl.addEventListener('click', (e) => 
{
    if(is_firstElChanged == false)
    {
        e.currentTarget.style.backgroundColor = 'red';
        e.currentTarget.style.color = 'white';
        is_firstElChanged = true;
    }
    else
    {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.color = 'black';
        is_firstElChanged = false;
    }
});

secondEl.addEventListener('click', (e) => 
{
    if(is_secondElChanged == false)
    {
        e.currentTarget.style.backgroundColor = 'green';
        e.currentTarget.style.color = 'purple';
        is_secondElChanged = true;
    }
    else
    {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.color = 'black';
        is_secondElChanged = false;
    }
});