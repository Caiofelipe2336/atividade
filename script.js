function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

function combinacao(n, k) {
    return fatorial(n) / (fatorial(n - k) * fatorial(k));
}

function rollMessage() {
    if (rolling) {
        message = message.substr(1) + message[0];
        document.getElementById("message-input").value = message;
        timer = setTimeout(rollMessage, 100);
    }
}

let message = "Hello, World!";
let rolling = false;
let timer;

document.getElementById("start-button").addEventListener("click", () => {
    if (!rolling) {
        rolling = true;
        rollMessage();
    }
});

document.getElementById("stop-button").addEventListener("click", () => {
    clearTimeout(timer);
    rolling = false;
});