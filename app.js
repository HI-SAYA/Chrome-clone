const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // 1. 기본 동작이 실행되지 않도록 막아준다.
    event.preventDefault();
    // console.log(loginInput.value);
   
    // 2. hidden이라는 class name을 더해줘서 form을 숨긴다.
    loginForm.classList.add(HIDDEN_CLASSNAME); 

    // 3. user의 이름을 변수로 저장해주고, 그 이름은 h1 안에 넣는다.
    const username = loginInput.value;
    
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

loginForm.addEventListener("submit", onLoginSubmit);
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
// link.addEventListener("click", handleLinkClick);
// addEventListener 안에 함수는 () 를 붙이지 않는다.
// => 브라우저가 실행해줌, event에 대한 정보도 담는다.