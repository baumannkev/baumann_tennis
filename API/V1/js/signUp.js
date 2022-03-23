const endPointRoot = "https://API.baumanntennis.com";
const GET = "GET";
const POST = "POST";

let signUpForm = document.querySelector("#signUp");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (signUpForm.passwordEntry.value == signUpForm.confirmPasswordEntry.value) {
        const xhttp = new XMLHttpRequest();
        let resource = "/signUp";
        const url = endPointRoot + resource;
        xhttp.open(GET, url, true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.response);
                let endpoints = JSON.parse(this.response);
                endpoints.forEach(element => {
                    let child = document.createElement("p");
                    child.innerHTML = element.Endpoint + ": " + element.Hits;
                    document.getElementById("Stats").appendChild(child);
                });
            };
        };
    }
})