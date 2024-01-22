const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.

onLoginSubmit();