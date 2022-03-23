const endPointRoot = "http://127.0.0.1:30005";//"https://API.baumanntennis.com";
const GET = "GET";
const POST = "POST";

document.querySelector("#LoginForm").addEventListener('submit', (e) => {
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

const login = () => {
  const xhttp = new XMLHttpRequest();
  let resource = "/adminlogin";
  const url = endPointRoot + resource;

  let LoginInfo = {
    username: document.getElementById("Username").value,
    password: document.getElementById("Password").value
  }

  xhttp.open(POST, url, true);
  xhttp.send(LoginInfo);
  xhttp.onreadystatechange = function () {
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
