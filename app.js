const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 실수하고 싶지 않은 string일 경우 상수로 표현한다.
// 오타가 났을 경우 자바스크립트가 지적해준다.

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // 1. 기본 동작이 실행되지 않도록 막아준다.
    event.preventDefault();
    // console.log(loginInput.value);
   
    // 2. hidden이라는 class name을 더해줘서 form을 숨긴다.
    loginForm.classList.add(HIDDEN_CLASSNAME); 

    // 3. user의 이름을 변수로 저장해주고, 그 이름은 h1 안에 넣는다.
    const username = loginInput.value;

    // 4. username을 localStorage에 넣기(미니DB)
    localStorage.setItem(USERNAME_KEY, username);
    
    // greeting.innerText = "Hello " + username; // 내가 기존에 쓰던 방법
    // greeting.innerText = `Hello ${username}`;   // 니꼬가 좋아하는 방법
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // =>
    paintGreetings(username);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
    // link.addEventListener("click", handleLinkClick);
    // addEventListener 안에 함수는 () 를 붙이지 않는다.
    // => 브라우저가 실행해줌, event에 대한 정보도 담는다.

} else {
    // show the greetings
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = `Hello ${savedUsername}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // =>
    paintGreetings(savedUsername);
}

