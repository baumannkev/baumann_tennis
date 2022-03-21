var today = new Date();

var optionSelected = 'book';
var bookSelectedText = 'Welcome! Check to see what times are available to book a court';
$('#welcome').text(bookSelectedText)

var arr = [0, 1, 2, 3, 4, 5];
$('.ui.dropdown.booking')
    .dropdown({
        values: [{
                name: 'Book a court',
                value: 'book',
                selected: true,
                description: "Times available to book a court"
            },
            {
                name: 'Register for classes',
                value: 'register',
                description: 'Times available to register for classes'

            }
        ],
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
}

function showSuccess() {
    $(".successMessage").show();
}
$('#spanish_calendar')
    .calendar({
        today: "true",
        touchReadonly: "true",
        formatInput: "false",
        disableYear: "true",
        disableMonth: "true",
        inline: "true",
        closable: "false",
        onChange: function changeDateSelected() {
            if (optionSelected === 'book') {
                $(".cardDateBook").show();
                $(".cardDateRegister").hide();
            } else {
                $(".cardDateRegister").show();
                $(".cardDateBook").hide();
            }
            let inputVal = document.getElementById("inputID").value;
            console.log(inputVal)
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
            days: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            months: ['Enero', 'Febrero', 'Marzo', 'Avril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthsShort: ['Ene', 'Feb', 'Mar', 'Avr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Hoy',
            now: 'Ahora',
            am: 'AM',
            pm: 'PM',
        },
        disabledDates: [{
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
            message: 'Full',
            // inverted: true,
            class: 'red'
        }, ],
        eventDates: [
            //     arr.forEach(function(item) {
            //         console.log(item);

            //         eventDates += [{

            //             date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + this),
            //             message: 'Available',
            //             class: 'green'
            //         }]
            //     })
            // ]
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 0),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
                message: 'Available',
                class: 'green'
            },
            // {
            //     date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
            //     message: 'Full',
            //     class: 'red',
            //     disable: 'true'
            // },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 9),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 11),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 12),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
                message: 'Available',
                class: 'green'
            },
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15),
                message: 'Available',
                class: 'green'
            }

        ]
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
                    prompt: 'Please enter your name'
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
                    prompt: 'Please enter a valid e-mail'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: 'Please enter a password'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },
            terms: {
                identifier: 'terms',
                rules: [{
                    type: 'checked',
                    prompt: 'You must agree to the terms and conditions'
                }]
            }
        }
    });