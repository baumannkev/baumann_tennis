var today = new Date();
var optionSelected = 'book';
var bookSelectedText = 'Bienvenido! Elegi la hora disponible para alquilar la cancha';
$('#welcome').text(bookSelectedText)
$('#confirmBookDiv').hide();
$('.ui.players')
    .dropdown();
$('.ui.selection')
    .dropdown();

let reservationIDGlobal = "";
let tokenGlobal = ""
let playerIDGlobal = ""

var arr = [0, 1, 2, 3, 4, 5];
// $(".cardDateBook2").hide();
let dropValues = [{
        name: 'Alquila la cancha',
        value: 'book',
        selected: true,
        description: "Horas disponibles para alquilar"
    },
    {
        name: 'Inscribite a clases',
        value: 'register',
        description: 'Horas disponibles para clases'

    }
];

var databaseDates = [{
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 0),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
            message: 'Disponible',
            class: 'green'
        },
        {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
            message: 'Disponible',
            class: 'green'
        },

    ]
    //first add an event listener for page load
    // document.addEventListener("DOMContentLoaded", get_json_data, false);

const endPointRoot = "http://127.0.0.1:30005";
// const endPointRoot = "https://API.baumanntennis.com";

const GET = "GET";
const POST = "POST";

document.querySelector("#loginForm").addEventListener('submit', (e) => {
    e.preventDefault();
    login();
});

document.querySelector("#signUpForm").addEventListener('submit', (e) => {
    e.preventDefault();
    signUp();
});
document.querySelector("#bookingConfirm").addEventListener('submit', (e) => {
    e.preventDefault();
    register();
});
const register = () => {
    const xhttp = new XMLHttpRequest();
    let resource = "/register";
    const url = endPointRoot + resource;


    let registerInfo = {
        token: tokenGlobal,
        reservationID: reservationIDGlobal,
        playerID: playerIDGlobal
    }

    registerInfo = JSON.stringify(registerInfo)

    console.log("Register ", registerInfo)

    xhttp.open(POST, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(registerInfo);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("successBooking").innerHTML = 'Gracias por registrar!'
        };
    };
}

function httpGetPlayerLogin(tokenValue) {
    const xhttp = new XMLHttpRequest();
    let resource = "/getPlayers";
    const url2 = endPointRoot + resource;
    let tokenInfo = {
        token: tokenValue
    }

    tokenInfo = JSON.stringify(tokenInfo)

    xhttp.open(POST, url2, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(tokenInfo);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            var players = JSON.parse(this.response);
            fullName = JSON.parse(this.response)[0].FullName;
            console.log("Players ", players)

            let selectPlayer = document.getElementById('playerMenu');
            selectPlayer.innerHTML = ""

            for (var i = 0; i < players.length; i++) {
                playerIDGlobal = players[i].PlayerID
                selectPlayer.innerHTML += '<div class="item" id = "' + players[i].PlayerID + '" data-value=' + players[i].FullName + '> ' + players[i].FullName + ' </div>'
            }

        };
    };
}
const login = () => {
    const xhttp = new XMLHttpRequest();
    let resource = "/login";
    const url = endPointRoot + resource;

    let LoginInfo = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    }

    LoginInfo = JSON.stringify(LoginInfo)

    console.log("Info ", LoginInfo)

    xhttp.open(POST, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(LoginInfo);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (JSON.parse(this.response).success) {
                $("#loginForm").hide();
                $('#confirmBookDiv').show();
                tokenGlobal = JSON.parse(this.response).token
                httpGetPlayerLogin(JSON.parse(this.response).token)

            } else {
                alert("Login unsuccessful, please try again");
            }
        };
    };
}

function httpGetPlayerSignUp(tokenValue) {
    const xhttp = new XMLHttpRequest();
    let resource = "/getPlayers";
    const url2 = endPointRoot + resource;
    let tokenInfo = {
        // token: JSON.parse(this.response).token
        token: tokenValue
    }

    tokenInfo = JSON.stringify(tokenInfo)

    xhttp.open(POST, url2, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(tokenInfo);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            var players = JSON.parse(this.response);
            let fullName = "";
            fullName = JSON.parse(this.response)[0].FullName;
            console.log("Players ", players)

            let selectPlayer = document.getElementById('playerMenu');
            selectPlayer.innerHTML = ""

            for (var i = 0; i < players.length; i++) {
                playerIDGlobal = players[i].PlayerID
                selectPlayer.innerHTML += '<div class="item" id = " ' + players[i].PlayerID + '" data-value=' + players[i].FullName + '> ' + players[i].FullName + ' </div>'
            }

        };
    };
}
const signUp = () => {
    const xhttp = new XMLHttpRequest();
    let resource = "/signUp";
    const url = endPointRoot + resource;

    let SignUpInfo = {
        email: document.getElementById("signUpEmail").value,
        phoneNumber: document.getElementById("signUpPhone").value,
        name: document.getElementById("signUpName").value,
        address: document.getElementById("signUpAddress").value,
        dob: document.getElementById("signUpDOB").value,
        sex: document.getElementById("signUpGender").value,
        skill: document.getElementById("signUpSkill").value,
        emergency: document.getElementById("signUpECN").value,
        relationship: document.getElementById("signUpRelationship").value,
        // insurance: document.getElementById("signUpInsurance").value,
        password: document.getElementById("signUpPassword").value,
    }

    console.log("Info ", SignUpInfo)
    SignUpInfo = JSON.stringify(SignUpInfo)

    xhttp.open(POST, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(SignUpInfo);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Test ", JSON.parse(this.response))
            $("#signUpForm").hide();
            $('#confirmBookDiv').show();
            document.getElementById("signUpTest").innerHTML = 'You are in'
            console.log("here")

            tokenGlobal = JSON.parse(this.response).token
            httpGetPlayerSignUp(JSON.parse(this.response).token)

        };
    };
}

function get_json_data(daySelected) {
    console.log("day selected ", daySelected)
    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let day = weekday[daySelected.getDay()];

    function httpGet(theUrl) {
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, false);
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
    }
    let resource = "/getCalendar";
    const url = endPointRoot + resource;
    var dbData = httpGet(url);
    const jsonData = JSON.parse(dbData)

    var dateSelected = jsonData[day];
    append_json_data(dateSelected)

}

function append_json_data(data) {
    var tableDiv = document.getElementById('dateBooking');
    tableDiv.innerHTML = ""
    for (var i = 0; i < data.length; i++) {
        var availabilityColor = ""
        var disabledSelect = ""
        var backgroundSkillColor = ""
        var skillColor = ""
        var full = "Disponible"

        var fullClass = "Por favor, haga una selección diferente"

        if (data[i].availability == 'Unavailable') {
            availabilityColor = "#E24D4D"
            disabledSelect = "disabled"
            data[i].level = fullClass
            skillColor = availabilityColor
            full = "Lleno"
                // data[i].availability = 'No disponible'
        } else {
            availabilityColor = "#2185D0"
        }

        if (data[i].level == 'Azul 1' || data[i].level == 'Azul 2') {
            backgroundSkillColor = '#DDF4FF'
            skillColor = '#2185D0'
        }
        if (data[i].level == 'Red1' || data[i].level == 'Red2') {
            backgroundSkillColor = '#FFE1DF'
            skillColor = '#E24D4D'
        }
        if (data[i].level == 'Green1' || data[i].level == 'Green2') {
            backgroundSkillColor = '#D5F5D9'
            skillColor = '#41C750'
        }
        if (data[i].level == 'Naranja 1' || data[i].level == 'Naranja 2') {
            backgroundSkillColor = '#FFE7D1'
            skillColor = '#F2711C'
        }
        if (data[i].level == 'Amarillo 1' || data[i].level == 'Amarillo 2') {
            backgroundSkillColor = '#FFF9D2'
            skillColor = '#BF9122'
        }
        console.log("Reservation ID ", data[i].reservationID)
        reservationIDGlobal = data[i].reservationID
        tableDiv.innerHTML += '<tr class="bookTable" id = "' + data[i].reservationID + '">' +
            '<td><span class="day2"></span>,</br>' + data[i].scheduledTime + '</td>' +
            '<td><span style="color: ' + availabilityColor + ' ">' + full + '</td>' +
            '<td><span style="color:  ' + skillColor + '; background-color: ' + backgroundSkillColor + ' ">' + data[i].level + '</td>' +
            '<td><a class = "availability scrollto" href="#cardMemberID"><button class="ui primary button ' + disabledSelect + '" onclick="showMember()">Seleccionar</button></a></td>' +
            '</tr>';
    }
}

$(".cardDateRegister").hide();
$(".cardMember").hide();
$(".successMessage").hide();

function showMember() {
    $(".cardMember").show();
    $("tr.bookTable").click(function() {
        var tableData = $(this).children("td").map(function() {
            return $(this).text();
        }).get();
        if ($.trim(tableData[1]) !== 'Lleno') {
            $(".details").text($.trim(tableData[0]) + " , " + $.trim(tableData[2]));
            // console.log("Your data is: " + $.trim(tableData[0]) + " , " + $.trim(tableData[2]));
        }
    });
}
$('.test.modal')
    .modal('attach events', '.test.button', 'show');
$("#signUpTarget").click(function() {
    $("#loginForm").hide();
    $("#signUpForm").show();
});

$("#loginTarget").click(function() {
    $("#loginForm").show();
    $("#signUpForm").hide();
});
$("#signUpTargetModal").click(function() {
    $("#loginFormModal").hide()
    $("#signUpFormModal").show();
});

$("#loginTargetModal").click(function() {
    $("#loginFormModal").show();
    $("#signUpFormModal").hide();
});

function showSuccess() {
    $(".successMessage").show();
}
$('.birthdate').calendar({
    type: 'date',
    text: {
        eventClass: 'inverted green',
        days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Avr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Hoy',
        now: 'Ahora',
        am: 'AM',
        pm: 'PM',
    },
})
$(".signup").hide()
var dates = ""

$('.calendar')
    .calendar({
        today: "true",
        touchReadonly: "false",
        formatInput: "false",
        disableYear: "true",
        disableMonth: "true",
        inline: "true",
        closable: "false",
        formatter: {
            date: function(date, settings) {
                if (!date) return '';
                dates = date;
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return month + '/' + day + '/' + year;
            }
        },
        onChange: function changeDateSelected() {

            $(".cardDateRegister").show();
            let inputVal = document.getElementById("inputID").value;
            let newDate = new Date(inputVal);

            get_json_data(newDate)
            let now = new Date();
            inputVal.toString()

            $('#dateSelectedRegister').text(inputVal);
            $('.day2').text(inputVal);
        },
        type: 'date',
        on: "hover",
        // disableMinute: "true",
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
        text: {
            eventClass: 'inverted red',
            days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthsShort: ['Ene', 'Feb', 'Mar', 'Avr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Hoy',
            now: 'Ahora',
            am: 'AM',
            pm: 'PM',
        },
        // disabledDates: [{
        //     date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
        //     message: 'Llena',
        //     inverted: true,
        // }, ],
        eventDates: databaseDates,
    });

$('#year_first_calendar')
    .calendar({
        startMode: 'year',
        type: 'date'
    });

$('.ui.form')
    .form({
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor, escriba su nombre'
                }]
            },
            gender: {
                identifier: 'gender',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor, seleciona tu sexo'
                }]
            },
            username: {
                identifier: 'email',
                rules: [{
                    type: 'email',
                    prompt: 'Por favor, introduzca una dirección de correo electrónico válida'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Por favor, ingrese una contraseña'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'Su contraseña debe tener al menos {ruleValue} caracteres'
                    }
                ]
            },
        }
    });