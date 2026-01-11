let image = document.querySelector(".ChangeableImg");
let inputBox = document.querySelector(".imageSrcInput");

const increaseButton = document.querySelector(".IncreaseButton");
const decreaseButton = document.querySelector(".DecreaseButton");
const removeButton = document.querySelector(".RemoveButton");
const addButton = document.querySelector(".AddButton");

addButton.addEventListener('click',(e) =>
{
    image.src = inputBox.value;
});

decreaseButton.addEventListener('click',(e) =>
{
    if(image.clientWidth > 100)
    {
    image.style.width = parseInt(image.clientWidth) - 50 + "px";
    }
    else{
        alert("мінімальний розмір картинки")
    }
});

increaseButton.addEventListener('click',(e) =>
{
    image.style.width = parseInt(image.clientWidth) + 50 + "px";
});

removeButton.addEventListener('click',(e) =>
{
    image.src = "";
    inputBox.value = "";
});
