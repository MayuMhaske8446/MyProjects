// Example 1
const output = document.querySelector("#output");

function handleClick(e){
    output.textContent += `You have clicked ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#demo");
const button = document.querySelector("button");

container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
document.body.addEventListener("click", handleClick);

