var button = document.getElementById("debounce");

var debounce = (func, delay) => {
    let debounceTimer;

    return function() {
        const context = this;
        const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);

    }

}

button.addEventListener("click", debounce(function(){
    alert("Hello\n No matter how many times you " +
            "click the debounce button, I get " + 
                "executed once aftre every 3 seconds!!")
}, 3000)) ;