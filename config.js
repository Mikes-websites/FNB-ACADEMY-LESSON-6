

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = "stampermichael007@gmail.com";

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
