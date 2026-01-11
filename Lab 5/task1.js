const formats = {
    "full name" : /^[А-ЯЄІЇҐ'-]{2,} [А-ЯЄІЇҐ]\.[А-ЯЄІЇҐ]\.$/,
    "group": /^[А-ЯЄІЇҐ]{2}-\d{2}$/,
    "phone number": /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    "address": /^м\. ([А-ЯЄІЇҐ'])+( [А-ЯЄІЇҐ']+)*$/,
    "email": /^([a-z_.-])+@([a-z])+\.com$/,
}

let button = document.querySelector("button");
let output_fields = document.querySelector(".output-text");

let full_name = document.querySelector(".full-name");
let group = document.querySelector(".group");
let phone_number = document.querySelector(".phone-number");
let address = document.querySelector(".address");
let mail = document.querySelector(".mail");

button.addEventListener("click", () =>
{
    if(ValidInput(full_name, formats["full name"]) && ValidInput(group, formats["group"])
    && ValidInput(phone_number, formats["phone number"]) && ValidInput(address, formats["address"])
    && ValidInput(mail, formats["email"]))
    {
        output_fields.innerHTML = "";
        // Додаємо дані
        output_fields.innerHTML += "<p>ПІБ: " + full_name.value + "</p>";
        output_fields.innerHTML += "<p>Група: " + group.value + "</p>";
        output_fields.innerHTML += "<p>Телефон: " + phone_number.value + "</p>";
        output_fields.innerHTML += "<p>Адреса: " + address.value + "</p>";
        output_fields.innerHTML += "<p>e-mail: " + mail.value + "</p>";
    }
    else
    {
        output_fields.innerHTML = "Incorrect input!";
    }
})

function ValidInput(object, format)
{
    if(!format.test(object.value))
    {
        object.style.backgroundColor = "rgb(236,139,137)";
        return false;
    }
    else
    {
        object.style.backgroundColor = "rgb(170,241,170)";
        return true;
    }
}

