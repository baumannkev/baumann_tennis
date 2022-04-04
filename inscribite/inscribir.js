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
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "9AM a 10AM",
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "12PM a 1PM",
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            }, {
                "scheduledTime": "1PM a 2PM",
                "level": "Alquiler",
                "currentPlayers": 0,
                "maxPlayers": 1,
                "availability": "Disponible",
            },
        ],
        "monday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Amarillo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Verde 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Naranja 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Verde 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
        "tuesday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Verde 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
        "wednesday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Verde 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
        "thursday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Verde 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Verde 2",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
        "friday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Verde 2",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
        "saturday": [{
                "scheduledTime": "7AM a 8AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "8AM a 9AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "9AM a 10AM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            }, {
                "scheduledTime": "10AM a 11AM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "11AM a 12PM",
                "level": "Rojo 1",
                "currentPlayers": 4,
                "maxPlayers": 4,
                "availability": "Lleno",
            }, {
                "scheduledTime": "12PM a 1PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
            {
                "scheduledTime": "1PM a 2PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "2PM a 3PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "3PM a 4PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "4PM a 5PM",
                "level": "Azul 1",
                "currentPlayers": 3,
                "maxPlayers": 6,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "5PM a 6PM",
                "level": "Verde 2",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },

            {
                "scheduledTime": "6PM a 7PM",
                "level": "Rojo 1",
                "currentPlayers": 3,
                "maxPlayers": 4,
                "availability": "Disponible",
            },
        ],
    }]
}];

function get_json_data(daySelected) {
    const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let day = weekday[daySelected.getDay()];
    var dateSelected = dateExamples[0].week[0][day]
    append_json_data(dateSelected)

}

function append_json_data(data) {
    var tableDiv = document.getElementById('dateBooking');
    tableDiv.innerHTML = ""
    for (var i = 0; i < data.length; i++) {
        var availabilityColor = ""
        var disabledSelect = ""
        var backgroundSkillColor = ""
        skillColor = ""

        var fullClass = "Por favor, haga una selección diferente"

        if (data[i].availability == 'Lleno') {
            availabilityColor = "#E24D4D"
            disabledSelect = "disabled"
            data[i].level = fullClass
            skillColor = availabilityColor
        } else {
            availabilityColor = "#2185D0"
        }

        if (data[i].level == 'Azul 1' || data[i].level == 'Azul 2') {
            backgroundSkillColor = '#DDF4FF'
            skillColor = '#2185D0'
        }
        if (data[i].level == 'Rojo 1' || data[i].level == 'Rojo 2') {
            backgroundSkillColor = '#FFE1DF'
            skillColor = '#E24D4D'
        }
        if (data[i].level == 'Verde 1' || data[i].level == 'Verde 2') {
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

        tableDiv.innerHTML += '<tr class="bookTable">' +
            '<td><span class="day2"></span>,</br>' + data[i].scheduledTime + '</td>' +
            '<td><span style="color: ' + availabilityColor + ' ">' + data[i].availability + '</td>' +
            '<td><span style="color:  ' + skillColor + '; background-color: ' + backgroundSkillColor + ' ">' + data[i].level + '</td>' +
            '<td><a class = "availability scrollto" href="#cardMemberID"><button class="ui primary button ' + disabledSelect + '" onclick="showMember()">Seleccionar</button></a></td>' +
            '</tr>';
    }
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