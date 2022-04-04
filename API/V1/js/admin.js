$('#LoginForm')
    .form({
        fields: {
            email: {
                identifier: 'Email',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a valid email'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter a password'
                    },
                    {
                        type: 'minLength[4]',
                        prompt: 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },

        }
    });
if ($('.ui.form').form('is valid')) {
    // form is valid (both email and name)

    const endPointRoot = "http://127.0.0.1:30005"; //"https://API.baumanntennis.com";

    const GET = "GET";
    const POST = "POST";

    // document.querySelector("#LoginForm").addEventListener('submit', (e) => {
    document.querySelector("#LoginWidget").addEventListener('submit', (e) => {
        e.preventDefault();
        login();
        refresh();
    });

    const getAll = () => {
        const xhttp = new XMLHttpRequest();
        let resource = "/admin";
        const url = endPointRoot + resource;
        xhttp.open(GET, url, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
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

    const login = () => {
        const xhttp = new XMLHttpRequest();
        let resource = "/login";
        const url = endPointRoot + resource;

        let LoginInfo = {
            email: document.getElementById("Email").value,
            password: document.getElementById("Password").value
        }

        xhttp.open(POST, url, true);
        xhttp.send(LoginInfo);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (JSON.parse(this.response).success) {
                    document.getElementById("LoginWidget").style.display = "none";
                    document.getElementById("AdminPage").style.display = "block";
                } else {
                    alert("Login unsuccessful, please try again");
                }
            };
        };
    }

    const refresh = () => {
        document.getElementById("Stats").innerHTML = "";
        getAll();
    }
}