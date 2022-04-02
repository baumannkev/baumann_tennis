var today = new Date();

var optionSelected = 'book';
var bookSelectedText = 'Bienvenido! Elegi la hora disponible para alquilar la cancha';
$('#welcome').text(bookSelectedText)
    // $('.full').disable();
var arr = [0, 1, 2, 3, 4, 5];
$(".cardDateBook2").hide();
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
        // {
        //     date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
        //     message: 'Disponible',
        //     class: 'green'
        // },

    ]
    //first add an event listener for page load
    // document.addEventListener("DOMContentLoaded", get_json_data, false);

var test = [
    { "COUNTRY": "UK", "LoC": "London", "BALANCE": "78,573", "DATE": "1/06/2018" },
    { "COUNTRY": "US", "LoC": "New York", "BALANCE": "43,568", "DATE": "18/05/2018" },
    { "COUNTRY": "PL", "LoC": "Kraków", "BALANCE": "12,362", "DATE": "22/06/2018" },
    { "COUNTRY": "AU", "LoC": "Townsville", "BALANCE": "7,569", "DATE": "1/07/2018" },
    { "COUNTRY": " ", "LoC": "BALANCE:", "BALANCE": "142,072", "DATE": " " }
]
var dateExamples = [{
    "week": [{
        "sunday": [{
            "scheduledTime": "7AM a 8AM",
            "level": "Verde 1",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "8AM a 9AM",
            "level": "Rojo 1",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, ],
        "monday": [{
            "scheduledTime": "7AM a 8AM",
            "level": "Amarillo 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "8AM a 9AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "9AM a 10AM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, {
            "scheduledTime": "10AM a 11AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "11AM a 12PM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "12PM a 1PM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, ],
        "tuesday": [{
            "scheduledTime": "7AM a 8AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "8AM a 9AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "9AM a 10AM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, {
            "scheduledTime": "10AM a 11AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "11AM a 12PM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "12PM a 1PM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, ],
        "wednesday": [{
            "scheduledTime": "7AM a 8AM",
            "level": "Naranja 2",
            "currentPlayers": 4,
            "maxPlayers": 4,
            "availability": "Lleno",
        }, {
            "scheduledTime": "9AM a 10AM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, ],
        "thursday": [{
            "scheduledTime": "8AM a 9AM",
            "level": "Naranja 2",
            "currentPlayers": 2,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, {
            "scheduledTime": "9AM a 10AM",
            "level": "Naranja 2",
            "currentPlayers": 3,
            "maxPlayers": 4,
            "availability": "Disponible",
        }, ],
    }]
}];

function get_json_data(daySelected) {
    const weekday = ["sunday", "monday", "tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[daySelected.getDay()];
    // var data = $.getJSON('data.json')
    var dateSelected = dateExamples[0].week[0][day]
        // console.log("Date Selected: ", dateSelected)
    var test = dateExamples[0].week[0][day][0]
        // append_json_data(test)
    append_json_data(dateSelected)

}

function append_json_data(data) {
    var tableDiv = document.getElementById('dateBooking');
    console.log(data[0])
    console.log(data[1])
    console.log(data.length)
    tableDiv.innerHTML = ""
        // var dataObject = JSON.parse(data)
    for (var i = 0; i < data.length; i++) {
        // console.log(i + " : " + data[i])
        var availabilityColor = ""
        if (data[i].availability == 'Lleno') {
            availabilityColor = "red"
        } else {
            availabilityColor = "blue"
        }


        // var table = document.createElement("table");
        // table.classList.add("ui", "very", "compact", "table", "tableSelect");
        // dataObject.forEach(function(object) {
        // var tr = document.createElement('tr');
        tableDiv.innerHTML += '<tr class="bookTable">' +
            '<td><span class="day2"></span>,</br>' + data[i].scheduledTime + '</td>' +
            '<td><span style="color: ' + availabilityColor + ' ">' + data[i].availability + '</td>' +
            '<td>' + data[i].level + '</td>' +
            '<td><a class = "availability scrollto" href="#cardMemberID"><button class="ui primary button" onclick="showMember()">Select</button></a></td>' +
            '</tr>';
        // tableDiv.appendChild(table);
    }
    // });
}
$('.ui.dropdown.booking')
    .dropdown({
        values: dropValues,
        onChange: function(value, text, $selectedItem) {
            $(".cardDateBook").hide();
            $(".cardDateRegister").hide();
            console.log(value);
            optionSelected = value;
            $('#welcome').text(optionSelected)
            $(".cardMember").hide();
        },
    }, );

$(".cardDateBook").hide();
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
            console.log("Your data is: " + $.trim(tableData[0]) + " , " + $.trim(tableData[2]));
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
    $("#loginFormModal").hide();
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
$('#spanish_calendar')
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
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return month + '/' + day + '/' + year;
            }
        },
        onChange: function changeDateSelected() {
            if (optionSelected === 'book') {
                $(".cardDateBook").show();
                $(".cardDateRegister").hide();
            } else {
                $(".cardDateRegister").show();
                $(".cardDateBook").hide();
            }

            let inputVal = document.getElementById("inputID").value;
            let newDate = new Date(inputVal);

            // console.log("Date: ", newDate);
            // console.log("Day of week ", newDate.getDay())
            get_json_data(newDate)
            $('#dateSelectedBooking').text(inputVal);
            $('#dateSelectedRegister').text(inputVal);
            $('.day2').text(inputVal);
        },
        type: 'date',
        on: "hover",
        // disableMinute: "true",
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30),
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
                    prompt: 'Please select a gender'
                }]
            },
            username: {
                identifier: 'email',
                rules: [{
                    type: 'email',
                    prompt: 'Por favor introduzca una dirección de correo electrónico válida'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Por favor ingrese una contraseña'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'Su contraseña debe tener al menos {ruleValue} caracteres'
                    }
                ]
            },
        }
    });