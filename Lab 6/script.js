let fetch_button = document.getElementById("fetch-button");
let user_wrapper = document.querySelector(".users-wrapper");

document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM готовий!');
    const users = await Get_users(5);
    users.forEach(u => {
        Add_user_to_form(u, user_wrapper);
    });
});

fetch_button.addEventListener('click', async () =>
{
    user_wrapper.innerHTML = '';
    const users = await Get_users(5);
    users.forEach(u => {
        Add_user_to_form(u, user_wrapper);
    });
});

function Add_user_to_form(user_data, div_for_user)
{
    div_for_user.innerHTML += `<div class="user">` +
        `<img src="${user_data.picture}" alt="user">\n` +
        `<p>Cell: ${user_data.cell}</p>\n` +
        `<p>City: ${user_data.city}</p>\n` +
         `<p>E-mail: ${user_data.email}</p>\n` +
        `<p>Coordinates: ${user_data.coordinates.latitude}, ${user_data.coordinates.longitude}</p>` +
        `</div>`
}

async function Get_users(count)
{
    user_list = [];

    for (i = 0; i < count; i++)
    {
        let data = await fetch("https://randomuser.me/api")
            .then(request => request.json());
        let useful_data =
            {
                picture : data.results[0].picture.large,
                cell : data.results[0].cell,
                city : data.results[0].location.city,
                email : data.results[0].email,
                coordinates : data.results[0].location.coordinates,
            };
        user_list.push(useful_data);
    }
    return user_list;
}
