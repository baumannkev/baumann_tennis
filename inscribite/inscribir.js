var today = new Date();


// $('#spanish_calendar').calendar('disableMinute', ('true'))
$('#spanish_calendar')
    .calendar({
        // today: "true",
        inline: "true",
        closable: "false",
        onChange: function changeDateSelected() {
            let inputVal = document.getElementById("inputID").value;
            console.log(inputVal)
            $('#dateSelected').text(inputVal);
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
        eventDates: [{
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
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
            {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
                message: 'Full',
                class: 'red'
            }
        ]
    });