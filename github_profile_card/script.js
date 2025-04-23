const form = document.getElementById('github_form');
const user_name_input = document.getElementById('user_name_input');
const name = document.getElementById('user_name');
const followers = document.getElementById('followers');
const profile_picture = document.getElementById('profile_picture');

let copyText;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user_name = user_name_input.value.trim();
    if (!user_name) return;

    const requestUrl = `https://api.github.com/users/${user_name}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            name.innerHTML = data.name || "No Name";
            profile_picture.src = data.avatar_url;
            followers.innerHTML = `followers: ${data.followers}`;

            copyText = function () {
                const text = `{ name : '${data.name}'; avatar_url : '${data.avatar_url}'; followers : ${data.followers}; }`;
                navigator.clipboard.writeText(text)
                    .then(() => alert("Copied!"))
                    .catch(err => console.error("Failed to copy: ", err));
            };
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            name.innerHTML = "User not found";
            profile_picture.src = "profile_image.jpg";
            followers.innerHTML = "";
        }
    };

    xhr.send();
});
