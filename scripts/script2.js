const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");

const prevBtnAlqSec = document.querySelector(".prev-alq-1");
const nextBtnAlqSec = document.querySelector(".next-alq-1");
const prevBtnAlqThird = document.querySelector(".prev-alq-2");
const nextBtnAlqThird = document.querySelector(".next-alq-2");

const prevBtnAdultSec = document.querySelector(".prev-adult-1");
const nextBtnAdultSec = document.querySelector(".next-adult-1");
const prevBtnAdultThird = document.querySelector(".prev-adult-2");
const nextBtnAdultThird = document.querySelector(".next-adult-2");
const prevBtnAdultFourth = document.querySelector(".prev-adult-3");
const nextBtnAdultFourth = document.querySelector(".next-adult-3");
const prevBtnAdultFifth = document.querySelector(".prev-adult-4");
const nextBtnAdultFifth = document.querySelector(".next-adult-4");
const prevBtnAdultSixth = document.querySelector(".prev-adult-5");
const nextBtnAdultSixth = document.querySelector(".next-adult-5");

const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
let current = 1;

let classCounter = 0;

let kids = false;
let classRegistered;
let datesRegister = [];
let firstNameReg;
let lastNameReg;
let phoneNumReg;
let emailReg;
let totalFinalAmount;
let totalFinalMonths;
let priceNum = 0;

// Adults
let levelOfTennis;
let groupNumber;
let datesRegisterAdult = [];

nextBtnFirst.addEventListener("click", function (event) {

    event.preventDefault();

    slidePage.style.marginLeft = "-25%";

    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("adultDisplay2").style.display = "none";
    document.getElementById("alquilerDisplay2").style.display = "none";
    slidePage.style.marginLeft = "-50%";
    console.log(datesRegister);

    current += 1;
});

nextBtnAlqSec.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("alquilerDisplay2").style.display = "block";
    document.getElementById("adultDisplay2").style.display = "none";
    document.getElementById("display2").style.display = "none";

    slidePage.style.marginLeft = "-50%";

    current += 1;
});

nextBtnAdultThird.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("adultDisplay3").style.display = "block";
    document.getElementById("display3").style.display = "none";
    document.getElementById("alquilerDisplay3").style.display = "none";

    slidePage.style.marginLeft = "-75%";

    current += 1;
});

nextBtnAdultSec.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("adultDisplay2").style.display = "block";
    document.getElementById("display2").style.display = "none";
    document.getElementById("alquilerDisplay2").style.display = "none";

    slidePage.style.marginLeft = "-50%";

    current += 1;
});
// nextBtnAdultThird.addEventListener("click", function (event) {
//     event.preventDefault();

//     document.getElementById("alquilerDisplay3").style.display = "none";
//     document.getElementById("adultDisplay3").style.display = "none";
//     document.getElementById("display3").style.display = "none";

//     slidePage.style.marginLeft = "-75%";
//     console.log(datesRegister);

//     current += 1;
// });
nextBtnAdultFourth.addEventListener("click", function (event) {
    event.preventDefault();

    // document.getElementById("alquilerDisplay3").style.display = "none";
    // document.getElementById("adultDisplay3").style.display = "block";
    document.getElementById("display3").style.display = "block";

    slidePage.style.marginLeft = "-100%";
    console.log(datesRegister);

    current += 1;
});
nextBtnAdultFifth.addEventListener("click", function (event) {
    event.preventDefault();

    // document.getElementById("alquilerDisplay3").style.display = "none";
    // document.getElementById("adultDisplay3").style.display = "block";
    document.getElementById("adultDisplay5").style.display = "block";

    slidePage.style.marginLeft = "-125%";
    console.log(datesRegister);

    current += 1;
});

nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";

    current += 1;
});
nextBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-100%";

    current += 1;
});
nextBtnFifth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-125%";

    current += 1;
});
// submitBtn.addEventListener("click", function () {
//     // bullet[current - 1].classList.add("active");
//     // progressCheck[current - 1].classList.add("active");
//     // progressText[current - 1].classList.add("active");
//     current += 1;
//     setTimeout(function () {
//         alert("Your Form Successfully Signed up");
//         location.reload();
//     }, 800);
// });

prevBtnSec.addEventListener("click", function (event) {
    var baby = document.getElementById("baby");
    var rojo = document.getElementById("rojo");
    var amarillo = document.getElementById("amarillo");
    var naranja = document.getElementById("naranja");
    var verde = document.getElementById("verde");
    var adultos = document.getElementById("adultos");

    baby.checked = false;
    rojo.checked = false;
    amarillo.checked = false;
    naranja.checked = false
    verde.checked = false;
    adultos.checked = false;
    event.preventDefault();
    slidePage.style.marginLeft = "0%";

    current -= 1;
});
prevBtnAlqSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";

    current -= 1;
});
prevBtnAlqThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";

    var checkSunAlquiler1 = document.getElementById("checkSunAlquiler1");
    var checkSunAlquiler2 = document.getElementById("checkSunAlquiler2");
    var checkSunAlquiler3 = document.getElementById("checkSunAlquiler3");
    var checkSunAlquiler4 = document.getElementById("checkSunAlquiler4");
    var checkSunAlquiler5 = document.getElementById("checkSunAlquiler5");
    var checkSunAlquiler6 = document.getElementById("checkSunAlquiler6");
    var checkSunAlquiler7 = document.getElementById("checkSunAlquiler7");
    var checkSunAlquiler8 = document.getElementById("checkSunAlquiler8");
    var checkSunAlquiler9 = document.getElementById("checkSunAlquiler9");
    var checkSunAlquiler10 = document.getElementById("checkSunAlquiler10");
    var checkSunAlquiler11 = document.getElementById("checkSunAlquiler11");
    var checkSunAlquiler12 = document.getElementById("checkSunAlquiler12");

    checkSunAlquiler1.checked = false;
    checkSunAlquiler2.checked = false;
    checkSunAlquiler3.checked = false;
    checkSunAlquiler4.checked = false;
    checkSunAlquiler5.checked = false;
    checkSunAlquiler6.checked = false;
    checkSunAlquiler7.checked = false;
    checkSunAlquiler8.checked = false;
    checkSunAlquiler9.checked = false;
    checkSunAlquiler10.checked = false;
    checkSunAlquiler11.checked = false;
    checkSunAlquiler12.checked = false;
    classCounter = 0;
    datesRegister = []

    var timePickerAlquiler = document.getElementById("timePickerAlquiler");

    timePickerAlquiler.innerHTML = ``;

    current -= 1;
});
prevBtnAdultSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";

    current -= 1;
});
prevBtnAdultThird.addEventListener("click", function (event) {
    event.preventDefault();
    var mon1 = document.getElementById("checkMonAdult1");
    var tues1 = document.getElementById("checkTuesAdult1");
    var wed1 = document.getElementById("checkWedAdult1");
    var thurs1 = document.getElementById("checkThursAdult1");
    var fri1 = document.getElementById("checkFriAdult1");
    var sat1 = document.getElementById("checkSatAdult1");
    var sun1 = document.getElementById("checkSunAdult1");
    mon1.checked = false;
    tues1.checked = false;
    wed1.checked = false;
    thurs1.checked = false;
    fri1.checked = false;
    sat1.checked = false;

    var mon2 = document.getElementById("checkMonAdult2");
    var tues2 = document.getElementById("checkTuesAdult2");
    var wed2 = document.getElementById("checkWedAdult2");
    var thurs2 = document.getElementById("checkThursAdult2");
    var fri2 = document.getElementById("checkFriAdult2");
    var sat2 = document.getElementById("checkSatAdult2");
    var sun2 = document.getElementById("checkSunAdult2");
    mon2.checked = false;
    tues2.checked = false;
    wed2.checked = false;
    thurs2.checked = false;
    fri2.checked = false;
    sat2.checked = false;

    var mon3 = document.getElementById("checkMonAdult3");
    var tues3 = document.getElementById("checkTuesAdult3");
    var wed3 = document.getElementById("checkWedAdult3");
    var thurs3 = document.getElementById("checkThursAdult3");
    var fri3 = document.getElementById("checkFriAdult3");
    var sat3 = document.getElementById("checkSatAdult3");
    var sun3 = document.getElementById("checkSunAdult3");
    mon3.checked = false;
    tues3.checked = false;
    wed3.checked = false;
    thurs3.checked = false;
    fri3.checked = false;
    sat3.checked = false;

    var mon4 = document.getElementById("checkMonAdult4");
    var tues4 = document.getElementById("checkTuesAdult4");
    var wed4 = document.getElementById("checkWedAdult4");
    var thurs4 = document.getElementById("checkThursAdult4");
    var fri4 = document.getElementById("checkFriAdult4");
    var sat4 = document.getElementById("checkSatAdult4");
    var sun4 = document.getElementById("checkSunAdult4");
    mon4.checked = false;
    tues4.checked = false;
    wed4.checked = false;
    thurs4.checked = false;
    fri4.checked = false;
    sat4.checked = false;

    var mon5 = document.getElementById("checkMonAdult5");
    var tues5 = document.getElementById("checkTuesAdult5");
    var wed5 = document.getElementById("checkWedAdult5");
    var thurs5 = document.getElementById("checkThursAdult5");
    var fri5 = document.getElementById("checkFriAdult5");
    var sat5 = document.getElementById("checkSatAdult5");
    var sun5 = document.getElementById("checkSunAdult5");
    mon5.checked = false;
    tues5.checked = false;
    wed5.checked = false;
    thurs5.checked = false;
    fri5.checked = false;
    sat5.checked = false;

    var mon6 = document.getElementById("checkMonAdult6");
    var tues6 = document.getElementById("checkTuesAdult6");
    var wed6 = document.getElementById("checkWedAdult6");
    var thurs6 = document.getElementById("checkThursAdult6");
    var fri6 = document.getElementById("checkFriAdult6");
    var sat6 = document.getElementById("checkSatAdult6");
    var sun6 = document.getElementById("checkSunAdult6");
    mon6.checked = false;
    tues6.checked = false;
    wed6.checked = false;
    thurs6.checked = false;
    fri6.checked = false;
    sat6.checked = false;

    datesRegister = []

    slidePage.style.marginLeft = "-25%";
    current -= 1;
});
prevBtnAdultFourth.addEventListener("click", function (event) {
    event.preventDefault();

    var mon1 = document.getElementById("checkMonAdult1");
    var tues1 = document.getElementById("checkTuesAdult1");
    var wed1 = document.getElementById("checkWedAdult1");
    var thurs1 = document.getElementById("checkThursAdult1");
    var fri1 = document.getElementById("checkFriAdult1");
    var sat1 = document.getElementById("checkSatAdult1");
    var sun1 = document.getElementById("checkSunAdult1");
    mon1.checked = false;
    tues1.checked = false;
    wed1.checked = false;
    thurs1.checked = false;
    fri1.checked = false;
    sat1.checked = false;

    var mon2 = document.getElementById("checkMonAdult2");
    var tues2 = document.getElementById("checkTuesAdult2");
    var wed2 = document.getElementById("checkWedAdult2");
    var thurs2 = document.getElementById("checkThursAdult2");
    var fri2 = document.getElementById("checkFriAdult2");
    var sat2 = document.getElementById("checkSatAdult2");
    var sun2 = document.getElementById("checkSunAdult2");
    mon2.checked = false;
    tues2.checked = false;
    wed2.checked = false;
    thurs2.checked = false;
    fri2.checked = false;
    sat2.checked = false;

    var mon3 = document.getElementById("checkMonAdult3");
    var tues3 = document.getElementById("checkTuesAdult3");
    var wed3 = document.getElementById("checkWedAdult3");
    var thurs3 = document.getElementById("checkThursAdult3");
    var fri3 = document.getElementById("checkFriAdult3");
    var sat3 = document.getElementById("checkSatAdult3");
    var sun3 = document.getElementById("checkSunAdult3");
    mon3.checked = false;
    tues3.checked = false;
    wed3.checked = false;
    thurs3.checked = false;
    fri3.checked = false;
    sat3.checked = false;

    var mon4 = document.getElementById("checkMonAdult4");
    var tues4 = document.getElementById("checkTuesAdult4");
    var wed4 = document.getElementById("checkWedAdult4");
    var thurs4 = document.getElementById("checkThursAdult4");
    var fri4 = document.getElementById("checkFriAdult4");
    var sat4 = document.getElementById("checkSatAdult4");
    var sun4 = document.getElementById("checkSunAdult4");
    mon4.checked = false;
    tues4.checked = false;
    wed4.checked = false;
    thurs4.checked = false;
    fri4.checked = false;
    sat4.checked = false;

    var mon5 = document.getElementById("checkMonAdult5");
    var tues5 = document.getElementById("checkTuesAdult5");
    var wed5 = document.getElementById("checkWedAdult5");
    var thurs5 = document.getElementById("checkThursAdult5");
    var fri5 = document.getElementById("checkFriAdult5");
    var sat5 = document.getElementById("checkSatAdult5");
    var sun5 = document.getElementById("checkSunAdult5");
    mon5.checked = false;
    tues5.checked = false;
    wed5.checked = false;
    thurs5.checked = false;
    fri5.checked = false;
    sat5.checked = false;

    var mon6 = document.getElementById("checkMonAdult6");
    var tues6 = document.getElementById("checkTuesAdult6");
    var wed6 = document.getElementById("checkWedAdult6");
    var thurs6 = document.getElementById("checkThursAdult6");
    var fri6 = document.getElementById("checkFriAdult6");
    var sat6 = document.getElementById("checkSatAdult6");
    var sun6 = document.getElementById("checkSunAdult6");
    mon6.checked = false;
    tues6.checked = false;
    wed6.checked = false;
    thurs6.checked = false;
    fri6.checked = false;
    sat6.checked = false;

    datesRegister = []
    classCounter = 0;

    var timePickerAdult = document.getElementById("timePickerAdult");

    timePickerAdult.innerHTML = ``;

    slidePage.style.marginLeft = "-50%";
    current -= 1;
});
prevBtnAdultFifth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";

    current -= 1;
});
prevBtnAdultSixth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-100%";

    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {

    var mon = document.getElementById("checkMon");
    var tues = document.getElementById("checkTues");
    var wed = document.getElementById("checkWed");
    var thurs = document.getElementById("checkThurs");
    var fri = document.getElementById("checkFri");
    var sat = document.getElementById("checkSat");
    var sun = document.getElementById("checkSun");

    mon.checked = false;
    tues.checked = false;
    wed.checked = false;
    thurs.checked = false;
    fri.checked = false;
    sat.checked = false;

    datesRegister = []
    console.log(datesRegister);

    classCounter = 0;

    event.preventDefault();
    var timePicker = document.getElementById("timePicker");

    timePicker.innerHTML = ``;
    slidePage.style.marginLeft = "-25%";
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    current -= 1;
});

prevBtnFifth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    current -= 1;
});

function myFunction() {
    var baby = document.getElementById("baby");
    var rojo = document.getElementById("rojo");
    var amarillo = document.getElementById("amarillo");
    var naranja = document.getElementById("naranja");
    var verde = document.getElementById("verde");
    var adultos = document.getElementById("adultos");
    var alquiler = document.getElementById("alquiler");

    if (baby.checked == false && rojo.checked == false && amarillo.checked == false && naranja.checked == false && verde.checked == false && adultos.checked == false && alquiler.checked == false) {
        // return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";
        console.log("Please mark at least one checkbox");
        var ageBtn = document.getElementById("ageBtn");
        ageBtn.disabled = true;
    }
    if (baby.checked == true) {
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("display2").style.display = "block";
        document.getElementById("display3").style.display = "block";

        kids = true;
        classRegistered = "baby";
        // ageNextBtn();
        var babyTennis = document.getElementById("baby").value;
        console.log("Value: ", babyTennis);
        document.getElementById("checkMon").disabled = false
        document.getElementById("checkTues").disabled = false
        document.getElementById("checkWed").disabled = false
        document.getElementById("checkThurs").disabled = false
        document.getElementById("checkFri").disabled = false
        document.getElementById("checkSun").disabled = true

        var monInner = document.getElementById("monTime");
        monInner.innerHTML = `Lunes 14:00`

        var tuesInner = document.getElementById("tuesTime");
        tuesInner.innerHTML = `Martes 14:00`

        var wedInner = document.getElementById("wedTime");
        wedInner.innerHTML = `Miercoles 14:00`

        var thursInner = document.getElementById("thursTime");
        thursInner.innerHTML = `Jueves 14:00`

        var friInner = document.getElementById("friTime");
        friInner.innerHTML = `Viernes 14:00`

        var satInner = document.getElementById("satTime");
        satInner.innerHTML = `Sabado 09:00`

        var babyTitle = document.getElementById("classTitle");
        babyTitle.innerHTML = `Baby Tennis 3 - 4 años`

    }
    if (rojo.checked == true) {
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("display2").style.display = "block";
        document.getElementById("display3").style.display = "block";
        classRegistered = "rojo";
        kids = true;
        var rojoTennis = document.getElementById("rojo").value;
        console.log("Value: ", rojoTennis);
        document.getElementById("checkMon").disabled = false
        document.getElementById("checkTues").disabled = false
        document.getElementById("checkWed").disabled = false
        document.getElementById("checkThurs").disabled = false
        document.getElementById("checkFri").disabled = true
        document.getElementById("checkSun").disabled = true

        var monInner = document.getElementById("monTime");
        monInner.innerHTML = `Lunes 16:00`

        var tuesInner = document.getElementById("tuesTime");
        tuesInner.innerHTML = `Martes 15:00`

        var wedInner = document.getElementById("wedTime");
        wedInner.innerHTML = `Miercoles 15:00`

        var thursInner = document.getElementById("thursTime");
        thursInner.innerHTML = `Jueves 16:00`

        var friInner = document.getElementById("friTime");
        friInner.innerHTML = `<p style="color: #CEC5C5">Viernes</p>`

        var satInner = document.getElementById("satTime");
        satInner.innerHTML = `Sabado 10:00`

        var rojoTitle = document.getElementById("classTitle");
        rojoTitle.innerHTML = `Kids Tennis Rojo 5-7 años`
    }
    if (amarillo.checked == true) {
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("display2").style.display = "block";
        document.getElementById("display3").style.display = "block";
        kids = true;
        classRegistered = "amarillo";
        var amarilloTennis = document.getElementById("amarillo").value;
        console.log("Value: ", amarilloTennis);

        document.getElementById("checkMon").disabled = false
        document.getElementById("checkTues").disabled = false
        document.getElementById("checkWed").disabled = false
        document.getElementById("checkThurs").disabled = false
        document.getElementById("checkFri").disabled = true
        document.getElementById("checkSun").disabled = true

        var monInner = document.getElementById("monTime");
        monInner.innerHTML = `Lunes 15:00`

        var tuesInner = document.getElementById("tuesTime");
        tuesInner.innerHTML = `Martes 16:00`

        var wedInner = document.getElementById("wedTime");
        wedInner.innerHTML = `Miercoles 16:00`

        var thursInner = document.getElementById("thursTime");
        thursInner.innerHTML = `Jueves 15:00`

        var friInner = document.getElementById("friTime");
        friInner.innerHTML = `<p style="color: #CEC5C5">Viernes</p>`

        var satInner = document.getElementById("satTime");
        satInner.innerHTML = `Sabado 10:00`

        var AmarilloTitle = document.getElementById("classTitle");
        AmarilloTitle.innerHTML = `Kids Tennis Amarillo 8-10 años`
    }
    if (naranja.checked == true) {
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("display2").style.display = "block";
        document.getElementById("display3").style.display = "block";
        classRegistered = "naranja";
        kids = true;
        var naranjaTennis = document.getElementById("naranja").value;
        console.log("Value: ", naranjaTennis);

        document.getElementById("checkMon").disabled = false
        document.getElementById("checkTues").disabled = false
        document.getElementById("checkThurs").disabled = false

        document.getElementById("checkWed").disabled = true
        document.getElementById("checkFri").disabled = true
        document.getElementById("checkSun").disabled = true

        var monInner = document.getElementById("monTime");
        monInner.innerHTML = `Lunes 17:00`

        var tuesInner = document.getElementById("tuesTime");
        tuesInner.innerHTML = `Martes 16:00`

        var wedInner = document.getElementById("wedTime");
        wedInner.innerHTML = `<p style="color: #CEC5C5">Miercoles</p>`

        var thursInner = document.getElementById("thursTime");
        thursInner.innerHTML = `Jueves 17:00`

        var friInner = document.getElementById("friTime");
        friInner.innerHTML = `<p style="color: #CEC5C5">Viernes</p>`

        var satInner = document.getElementById("satTime");
        satInner.innerHTML = `Sabado 11:00`

        var naranjaTitle = document.getElementById("classTitle");
        naranjaTitle.innerHTML = `Kids Tennis Naranja 11-13 años`
    }
    if (verde.checked == true) {
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("display").style.display = "block";
        document.getElementById("display2").style.display = "block";
        document.getElementById("display3").style.display = "block";
        classRegistered = "verde";
        kids = true;
        var verdeTennis = document.getElementById("verde").value;
        console.log("Value: ", verdeTennis);
        document.getElementById("checkMon").disabled = true
        document.getElementById("checkTues").disabled = true

        document.getElementById("checkThurs").disabled = false
        document.getElementById("checkWed").disabled = false
        document.getElementById("checkFri").disabled = false
        document.getElementById("checkSat").disabled = false

        document.getElementById("checkSun").disabled = true

        var monInner = document.getElementById("monTime");
        monInner.innerHTML = `<p style="color: #CEC5C5">Lunes</p>`

        var tuesInner = document.getElementById("tuesTime");
        tuesInner.innerHTML = `<p style="color: #CEC5C5">Martes</p>`

        var wedInner = document.getElementById("wedTime");
        wedInner.innerHTML = `Miercoles 16:00`

        var thursInner = document.getElementById("thursTime");
        thursInner.innerHTML = `Jueves 17:00`

        var friInner = document.getElementById("friTime");
        friInner.innerHTML = `Viernes 15:00`

        var satInner = document.getElementById("satTime");
        satInner.innerHTML = `Sabado 13:00`

        var verdeTitle = document.getElementById("classTitle");
        verdeTitle.innerHTML = `Kids Tennis Verde 14+ años`
    }
    if (adultos.checked == true) {
        kids = false;
        document.getElementById("alquilerDisplay1").style.display = "none";
        document.getElementById("alquilerDisplay2").style.display = "none";
        document.getElementById("alquilerDisplay3").style.display = "none";
        document.getElementById("display").style.display = "none";
        document.getElementById("display2").style.display = "none";
        document.getElementById("display3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "block";
        document.getElementById("adultDisplay2").style.display = "block";
        document.getElementById("adultDisplay3").style.display = "block";
        document.getElementById("adultDisplay4").style.display = "block";
        document.getElementById("adultDisplay5").style.display = "block";
        var adultosTennis = document.getElementById("adultos").value;
        console.log("Value: ", adultosTennis);

        var adultosTitle = document.getElementById("classTitleAdult");
        adultosTitle.innerHTML = `Adultos Tennis 19+ años`

    } if (alquiler.checked == true) {
        kids = false;
        document.getElementById("display").style.display = "none";
        document.getElementById("display2").style.display = "none";
        document.getElementById("display3").style.display = "none";
        document.getElementById("adultDisplay1").style.display = "none";
        document.getElementById("adultDisplay2").style.display = "none";
        document.getElementById("adultDisplay3").style.display = "none";
        document.getElementById("adultDisplay4").style.display = "none";
        document.getElementById("adultDisplay5").style.display = "none";
        document.getElementById("alquilerDisplay1").style.display = "block";
        document.getElementById("alquilerDisplay2").style.display = "block";
        document.getElementById("alquilerDisplay3").style.display = "block";

        var alquilerTennis = document.getElementById("alquiler").value;
        console.log("Value: ", alquilerTennis);

        var alquilerTitle = document.getElementById("classTitleAlquiler");
        alquilerTitle.innerHTML = `Alquiler`

        var sunInnerAlquiler1 = document.getElementById("sunTimeAlquiler1");
        var sunInnerAlquiler2 = document.getElementById("sunTimeAlquiler2");
        var sunInnerAlquiler3 = document.getElementById("sunTimeAlquiler3");
        var sunInnerAlquiler4 = document.getElementById("sunTimeAlquiler4");
        var sunInnerAlquiler5 = document.getElementById("sunTimeAlquiler5");
        var sunInnerAlquiler6 = document.getElementById("sunTimeAlquiler6");
        var sunInnerAlquiler7 = document.getElementById("sunTimeAlquiler7");
        var sunInnerAlquiler8 = document.getElementById("sunTimeAlquiler8");
        var sunInnerAlquiler9 = document.getElementById("sunTimeAlquiler9");
        var sunInnerAlquiler10 = document.getElementById("sunTimeAlquiler10");
        var sunInnerAlquiler11 = document.getElementById("sunTimeAlquiler11");
        var sunInnerAlquiler12 = document.getElementById("sunTimeAlquiler12");
        sunInnerAlquiler1.innerHTML = `10:00`
        sunInnerAlquiler2.innerHTML = `11:00`
        sunInnerAlquiler3.innerHTML = `12:00`
        sunInnerAlquiler4.innerHTML = `13:00`
        sunInnerAlquiler5.innerHTML = `14:00`
        sunInnerAlquiler6.innerHTML = `15:00`
        sunInnerAlquiler7.innerHTML = `16:00`
        sunInnerAlquiler8.innerHTML = `17:00`
        sunInnerAlquiler9.innerHTML = `18:00`
        sunInnerAlquiler10.innerHTML = `19:00`
        sunInnerAlquiler11.innerHTML = `20:00`
        sunInnerAlquiler12.innerHTML = `21:00`
    }

    var sex = document.querySelector('#selectSex');
    var selectElement =
        sex.options[sex.selectedIndex].value;

    console.log("Genero: ", selectElement)
}

function alquilerFunction1() {
    var checkSunAlquiler1 = document.getElementById("checkSunAlquiler1");
    var checkSunAlquiler2 = document.getElementById("checkSunAlquiler2");
    var checkSunAlquiler3 = document.getElementById("checkSunAlquiler3");
    var checkSunAlquiler4 = document.getElementById("checkSunAlquiler4");
    var checkSunAlquiler5 = document.getElementById("checkSunAlquiler5");
    var checkSunAlquiler6 = document.getElementById("checkSunAlquiler6");
    var checkSunAlquiler7 = document.getElementById("checkSunAlquiler7");
    var checkSunAlquiler8 = document.getElementById("checkSunAlquiler8");
    var checkSunAlquiler9 = document.getElementById("checkSunAlquiler9");
    var checkSunAlquiler10 = document.getElementById("checkSunAlquiler10");
    var checkSunAlquiler11 = document.getElementById("checkSunAlquiler11");
    var checkSunAlquiler12 = document.getElementById("checkSunAlquiler12");

    if (checkSunAlquiler1.checked == true) {
        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler1").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler2.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler2").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler3.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler3").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler4.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler4").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler5.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler5").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler6.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler6").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler7.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler7").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler8.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler8").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler9.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler9").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler10.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler10").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler11.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler11").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    if (checkSunAlquiler12.checked == true) {

        datesRegister.push("sunday")
        var monVal1 = document.getElementById("Domingo").innerHTML;

        var sunTimeAlquiler1 = document.getElementById("sunTimeAlquiler12").innerHTML;

        var sunInnerAlquiler1 = document.getElementById("timePickerAlquiler");

        console.log("Value: ", sunTimeAlquiler1);
        sunInnerAlquiler1.innerHTML += `<li>Domingo ` + sunTimeAlquiler1 + `</li>`;
        classCounter++;
    }
    var classesName;

    if (classCounter == 1) {
        classesName = "clase"
    } else {
        classesName = "clases"
    }

    console.log("classes ", classCounter)
    var numClasses = document.getElementById("numClassesAlquiler")
    numClasses.innerHTML = `<p>Has elejido <span style ="color:green;">` + classCounter + `</span> ` + classesName + `</p>`;

    var price = 75000;

    if (classCounter == 1) {
        price = "G.s 75.000";
    } if (classCounter == 2) {
        price = "G.s 150.000";
    } if (classCounter == 3) {
        price = "G.s 225.000";
    } if (classCounter == 4) {
        price = "G.s 300.000";
    } if (classCounter == 5) {
        price = "G.s 375.000";
    }

    var priceTotal = document.getElementById("priceTotalAlquiler");
    priceTotal.innerHTML = `<p>Precio total = <span style ="color:green;">` + price + `</span> Mensual</p>`;


}

function adultFunction1() {
    var level = document.querySelector('#selectClass');
    var selectElement =
        level.options[level.selectedIndex].value;

    var selectNumbersPrinc = document.querySelector('#selectNumbersPrinc');
    var selectElementGroupPrinc =
        selectNumbersPrinc.options[selectNumbersPrinc.selectedIndex].value;

    var selectNumbersInt = document.querySelector('#selectNumbersInt');
    var selectElementGroupInt =
        selectNumbersInt.options[selectNumbersInt.selectedIndex].value;

    levelOfTennis = selectElement;
    console.log("Level of Tennis: ", selectElement)

    if (selectElement == "Intermedio") {
        console.log("Number of Groups Intermedio: ", selectElementGroupInt)
        if (selectElementGroupInt == "Individual") {
            groupNumber = "Individual"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Intermedio - Individual`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "block";
            monInner1.innerHTML = `22:00`
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "none";
            monInner2.innerHTML = ``
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = true
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "block";
            tuesInner1.innerHTML = `08:00`
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "block";
            tuesInner2.innerHTML = `18:00`
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "none";
            tuesInner3.innerHTML = ``
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "none";
            wedInner1.innerHTML = ``
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "none";
            wedInner2.innerHTML = ``
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "none";
            wedInner3.innerHTML = ``
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "none";
            wedInner4.innerHTML = ``
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "block";
            thursInner1.innerHTML = `18:00`
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "none";
            thursInner2.innerHTML = ``
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "none";
            thursInner3.innerHTML = ``
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "none";
            thursInner4.innerHTML = ``
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "none";
            thursInner5.innerHTML = ``
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "none";
            thursInner6.innerHTML = ``

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "none";
            friInner1.innerHTML = ``
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "none";
            friInner2.innerHTML = ``
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "none";
            friInner3.innerHTML = ``
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "none";
            friInner4.innerHTML = ``
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri").style.display = "none";
            friInner5.innerHTML = ``
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "none";
            satInner1.innerHTML = ``
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "none";
            satInner2.innerHTML = ``
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "none";
            satInner3.innerHTML = ``
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "none";
            satInner4.innerHTML = ``
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "none";
            satInner5.innerHTML = ``
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "none";
            satInner6.innerHTML = ``

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``

        }
        if (selectElementGroupInt == "Grupo de 2") {
            groupNumber = "Grupo de 2"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Intermedio - Grupo de 2`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "none";
            monInner1.innerHTML = ``
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "none";
            monInner2.innerHTML = ``
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = true
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "none";
            tuesInner1.innerHTML = ``
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "none";
            tuesInner2.innerHTML = ``
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "none";
            tuesInner3.innerHTML = ``
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "none";
            wedInner1.innerHTML = ``
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "none";
            wedInner2.innerHTML = ``
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "none";
            wedInner3.innerHTML = ``
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "none";
            wedInner4.innerHTML = ``
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "none";
            thursInner1.innerHTML = ``
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "none";
            thursInner2.innerHTML = ``
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "none";
            thursInner3.innerHTML = ``
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "none";
            thursInner4.innerHTML = ``
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "none";
            thursInner5.innerHTML = ``
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "none";
            thursInner6.innerHTML = ``

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "none";
            friInner1.innerHTML = ``
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "none";
            friInner2.innerHTML = ``
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "none";
            friInner3.innerHTML = ``
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "none";
            friInner4.innerHTML = ``
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri5").style.display = "none";
            friInner5.innerHTML = ``
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "none";
            satInner1.innerHTML = ``
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "none";
            satInner2.innerHTML = ``
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "none";
            satInner3.innerHTML = ``
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "none";
            satInner4.innerHTML = ``
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "none";
            satInner5.innerHTML = ``
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "none";
            satInner6.innerHTML = ``

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``

        }
        if (selectElementGroupInt == "Grupo de 4") {
            groupNumber = "Grupo de 4"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Intermedio - Grupo de 4`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "block";
            monInner1.innerHTML = `06:00`
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "block";
            monInner2.innerHTML = `20:00`
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = true
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "block";
            tuesInner1.innerHTML = `06:00`
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "block";
            tuesInner2.innerHTML = `20:00`
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "none";
            tuesInner3.innerHTML = ``
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "block";
            wedInner1.innerHTML = `06:00`
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "none";
            wedInner2.innerHTML = ``
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "none";
            wedInner3.innerHTML = ``
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "none";
            wedInner4.innerHTML = ``
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "block";
            thursInner1.innerHTML = `06:00`
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "block";
            thursInner2.innerHTML = `20:00`
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "none";
            thursInner3.innerHTML = ``
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "none";
            thursInner4.innerHTML = ``
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "none";
            thursInner5.innerHTML = ``
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "none";
            thursInner6.innerHTML = ``

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "none";
            friInner1.innerHTML = `20:00`
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "none";
            friInner2.innerHTML = ``
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "none";
            friInner3.innerHTML = ``
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "none";
            friInner4.innerHTML = ``
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri5").style.display = "none";
            friInner5.innerHTML = ``
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "none";
            satInner1.innerHTML = ``
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "none";
            satInner2.innerHTML = ``
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "none";
            satInner3.innerHTML = ``
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "none";
            satInner4.innerHTML = ``
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "none";
            satInner5.innerHTML = ``
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "none";
            satInner6.innerHTML = ``

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``

        }
    } else if (selectElement == "Principiante") {
        console.log("Number of Groups Principiante: ", selectElementGroupPrinc)
        if (selectElementGroupPrinc == "Individual") {
            groupNumber = "Individual"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Principiante - Grupo de Individual`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "block";
            monInner1.innerHTML = `07:00`
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "block";
            monInner2.innerHTML = `08:00`
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = true
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "block";
            tuesInner1.innerHTML = `07:00`
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "block";
            tuesInner2.innerHTML = `08:00`
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "none";
            tuesInner3.innerHTML = ``
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "block";
            wedInner1.innerHTML = `07:00`
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "block";
            wedInner2.innerHTML = `08:00`
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "block";
            wedInner3.innerHTML = `12:00`
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "block";
            wedInner4.innerHTML = `22:00`
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "block";
            thursInner1.innerHTML = `07:00`
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "block";
            thursInner2.innerHTML = `08:00`
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "block";
            thursInner3.innerHTML = `10:00`
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "block";
            thursInner4.innerHTML = `11:00`
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "block";
            thursInner5.innerHTML = `13:00`
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "block";
            thursInner6.innerHTML = `22:00`

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "block";
            friInner1.innerHTML = `06:00`
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "block";
            friInner2.innerHTML = `07:00`
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "block";
            friInner3.innerHTML = `12:00`
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "block";
            friInner4.innerHTML = `13:00`
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri5").style.display = "block";
            friInner5.innerHTML = `22:00`
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "block";
            satInner1.innerHTML = `06:00`
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "block";
            satInner2.innerHTML = `07:00`
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "block";
            satInner3.innerHTML = `08:00`
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "block";
            satInner4.innerHTML = `16:00`
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "none";
            satInner5.innerHTML = ``
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "none";
            satInner6.innerHTML = ``

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``
        }
        if (selectElementGroupPrinc == "Grupo de 2") {
            groupNumber = "Grupo de 2"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Principiante - Grupo de 2`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "block";
            monInner1.innerHTML = `21:00`
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "none";
            monInner2.innerHTML = ``
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = false
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "block";
            tuesInner1.innerHTML = `07:00`
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "block";
            tuesInner2.innerHTML = `09:00`
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "block";
            tuesInner3.innerHTML = `21:00`
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "block";
            wedInner1.innerHTML = `13:00`
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "block";
            wedInner2.innerHTML = `21:00`
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "none";
            wedInner3.innerHTML = ``
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "none";
            wedInner4.innerHTML = ``
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "block";
            thursInner1.innerHTML = `09:00`
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "none";
            thursInner2.innerHTML = ``
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "none";
            thursInner3.innerHTML = ``
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "none";
            thursInner4.innerHTML = ``
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "none";
            thursInner5.innerHTML = ``
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "none";
            thursInner6.innerHTML = ``

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "block";
            friInner1.innerHTML = `21:00`
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "none";
            friInner2.innerHTML = ``
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "none";
            friInner3.innerHTML = ``
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "none";
            friInner4.innerHTML = ``
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri5").style.display = "none";
            friInner5.innerHTML = ``
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "block";
            satInner1.innerHTML = `17:00`
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "block";
            satInner2.innerHTML = `18:00`
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "block";
            satInner3.innerHTML = `20:00`
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "none";
            satInner4.innerHTML = ``
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "none";
            satInner5.innerHTML = ``
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "none";
            satInner6.innerHTML = ``

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``

        }
        if (selectElementGroupPrinc == "Grupo de 4") {
            groupNumber = "Grupo de 4"
            var adultosTitle1 = document.getElementById("classTitleAdult2");
            adultosTitle1.innerHTML = `Principiante - Grupo de 4`
            // MONDAY
            document.getElementById("checkMonAdult1").disabled = false
            document.getElementById("checkMonAdult2").disabled = false
            document.getElementById("checkMonAdult3").disabled = true
            document.getElementById("checkMonAdult4").disabled = true
            document.getElementById("checkMonAdult5").disabled = true
            document.getElementById("checkMonAdult6").disabled = true
            var monInner1 = document.getElementById("monTimeAdult1"); document.getElementById("displayMon1").style.display = "block";
            monInner1.innerHTML = `19:00`
            var monInner2 = document.getElementById("monTimeAdult2"); document.getElementById("displayMon2").style.display = "none";
            monInner2.innerHTML = ``
            var monInner3 = document.getElementById("monTimeAdult3"); document.getElementById("displayMon3").style.display = "none";
            monInner3.innerHTML = ``
            var monInner4 = document.getElementById("monTimeAdult4"); document.getElementById("displayMon4").style.display = "none";
            monInner4.innerHTML = ``
            var monInner5 = document.getElementById("monTimeAdult5"); document.getElementById("displayMon5").style.display = "none";
            monInner5.innerHTML = ``
            var monInner6 = document.getElementById("monTimeAdult6"); document.getElementById("displayMon6").style.display = "none";
            monInner6.innerHTML = ``

            // TUESDAY
            document.getElementById("checkTuesAdult1").disabled = false
            document.getElementById("checkTuesAdult2").disabled = false
            document.getElementById("checkTuesAdult3").disabled = true
            document.getElementById("checkTuesAdult4").disabled = true
            document.getElementById("checkTuesAdult5").disabled = true
            document.getElementById("checkTuesAdult6").disabled = true
            var tuesInner1 = document.getElementById("tuesTimeAdult1"); document.getElementById("displayTues1").style.display = "block";
            tuesInner1.innerHTML = `14:00`
            var tuesInner2 = document.getElementById("tuesTimeAdult2"); document.getElementById("displayTues2").style.display = "block";
            tuesInner2.innerHTML = `19:00`
            var tuesInner3 = document.getElementById("tuesTimeAdult3"); document.getElementById("displayTues3").style.display = "none";
            tuesInner3.innerHTML = ``
            var tuesInner4 = document.getElementById("tuesTimeAdult4"); document.getElementById("displayTues4").style.display = "none";
            tuesInner4.innerHTML = ``
            var tuesInner5 = document.getElementById("tuesTimeAdult5"); document.getElementById("displayTues5").style.display = "none";
            tuesInner5.innerHTML = ``
            var tuesInner6 = document.getElementById("tuesTimeAdult6"); document.getElementById("displayTues6").style.display = "none";
            tuesInner6.innerHTML = ``

            // WEDNESDAY
            document.getElementById("checkWedAdult1").disabled = false
            document.getElementById("checkWedAdult2").disabled = false
            document.getElementById("checkWedAdult3").disabled = false
            document.getElementById("checkWedAdult4").disabled = false
            document.getElementById("checkWedAdult5").disabled = true;
            document.getElementById("checkWedAdult6").disabled = true;
            var wedInner1 = document.getElementById("wedTimeAdult1"); document.getElementById("displayWed1").style.display = "block";
            wedInner1.innerHTML = `18:00`
            var wedInner2 = document.getElementById("wedTimeAdult2"); document.getElementById("displayWed2").style.display = "block";
            wedInner2.innerHTML = `19:00`
            var wedInner3 = document.getElementById("wedTimeAdult3"); document.getElementById("displayWed3").style.display = "block";
            wedInner3.innerHTML = `20:00`
            var wedInner4 = document.getElementById("wedTimeAdult4"); document.getElementById("displayWed4").style.display = "none";
            wedInner4.innerHTML = ``
            var wedInner5 = document.getElementById("wedTimeAdult5"); document.getElementById("displayWed5").style.display = "none";
            wedInner5.innerHTML = ``
            var wedInner6 = document.getElementById("wedTimeAdult6"); document.getElementById("displayWed6").style.display = "none";
            wedInner6.innerHTML = ``

            // THURSDAY
            document.getElementById("checkThursAdult1").disabled = false
            document.getElementById("checkThursAdult2").disabled = false
            document.getElementById("checkThursAdult3").disabled = false
            document.getElementById("checkThursAdult4").disabled = false
            document.getElementById("checkThursAdult5").disabled = false;
            document.getElementById("checkThursAdult6").disabled = false;
            var thursInner1 = document.getElementById("thursTimeAdult1"); document.getElementById("displayThurs1").style.display = "block";
            thursInner1.innerHTML = `12:00`
            var thursInner2 = document.getElementById("thursTimeAdult2"); document.getElementById("displayThurs2").style.display = "block";
            thursInner2.innerHTML = `14:00`
            var thursInner3 = document.getElementById("thursTimeAdult3"); document.getElementById("displayThurs3").style.display = "block";
            thursInner3.innerHTML = `17:00`
            var thursInner4 = document.getElementById("thursTimeAdult4"); document.getElementById("displayThurs4").style.display = "block";
            thursInner4.innerHTML = `19:00`
            var thursInner5 = document.getElementById("thursTimeAdult5"); document.getElementById("displayThurs5").style.display = "block";
            thursInner5.innerHTML = `21:00`
            var thursInner6 = document.getElementById("thursTimeAdult6"); document.getElementById("displayThurs6").style.display = "none";
            thursInner6.innerHTML = ``

            // FRIDAY
            document.getElementById("checkFriAdult1").disabled = false
            document.getElementById("checkFriAdult2").disabled = false
            document.getElementById("checkFriAdult3").disabled = false
            document.getElementById("checkFriAdult4").disabled = false
            document.getElementById("checkFriAdult5").disabled = false;
            document.getElementById("checkFriAdult6").disabled = false;
            var friInner1 = document.getElementById("friTimeAdult1"); document.getElementById("displayFri1").style.display = "block";
            friInner1.innerHTML = `18:00`
            var friInner2 = document.getElementById("friTimeAdult2"); document.getElementById("displayFri2").style.display = "block";
            friInner2.innerHTML = `19:00`
            var friInner3 = document.getElementById("friTimeAdult3"); document.getElementById("displayFri3").style.display = "none";
            friInner3.innerHTML = ``
            var friInner4 = document.getElementById("friTimeAdult4"); document.getElementById("displayFri4").style.display = "none";
            friInner4.innerHTML = ``
            var friInner5 = document.getElementById("friTimeAdult5"); document.getElementById("displayFri5").style.display = "none";
            friInner5.innerHTML = ``
            var friInner6 = document.getElementById("friTimeAdult6"); document.getElementById("displayFri6").style.display = "none";
            friInner6.innerHTML = ``

            // SATURDAY
            document.getElementById("checkSatAdult1").disabled = false
            document.getElementById("checkSatAdult2").disabled = false
            document.getElementById("checkSatAdult3").disabled = false
            document.getElementById("checkSatAdult4").disabled = false
            document.getElementById("checkSatAdult5").disabled = false;
            document.getElementById("checkSatAdult6").disabled = false;
            var satInner1 = document.getElementById("satTimeAdult1"); document.getElementById("displaySat1").style.display = "block";
            satInner1.innerHTML = `12:00`
            var satInner2 = document.getElementById("satTimeAdult2"); document.getElementById("displaySat2").style.display = "block";
            satInner2.innerHTML = `14:00`
            var satInner3 = document.getElementById("satTimeAdult3"); document.getElementById("displaySat3").style.display = "block";
            satInner3.innerHTML = `15:00`
            var satInner4 = document.getElementById("satTimeAdult4"); document.getElementById("displaySat4").style.display = "block";
            satInner4.innerHTML = `19:00`
            var satInner5 = document.getElementById("satTimeAdult5"); document.getElementById("displaySat5").style.display = "block";
            satInner5.innerHTML = `21:00`
            var satInner6 = document.getElementById("satTimeAdult6"); document.getElementById("displaySat6").style.display = "block";
            satInner6.innerHTML = `22:00`

            // SUNDAY
            document.getElementById("checkSunAdult1").disabled = false
            var sunInner1 = document.getElementById("sunTimeAdult1"); document.getElementById("displaySun1").style.display = "none";
            sunInner1.innerHTML = ``


        }
    }
}

function adultFunction2() {
    // MONDAY

    var monAdult1 = document.getElementById("checkMonAdult1");
    var monAdult2 = document.getElementById("checkMonAdult2");
    var monAdult3 = document.getElementById("checkMonAdult3");
    var monAdult4 = document.getElementById("checkMonAdult4");
    var monAdult5 = document.getElementById("checkMonAdult5");
    var monAdult6 = document.getElementById("checkMonAdult6");

    if (monAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal1 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult1 = document.getElementById("monTimeAdult1").innerHTML;

        var monInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult1);
        monInnerAdult1.innerHTML += `<li>Lunes ` + monTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (monAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal2 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult2 = document.getElementById("monTimeAdult2").innerHTML;

        var monInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult2);
        monInnerAdult2.innerHTML += `<li>Lunes ` + monTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (monAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal3 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult3 = document.getElementById("monTimeAdult3").innerHTML;

        var monInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult3);
        monInnerAdult3.innerHTML += `<li>Lunes ` + monTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (monAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal4 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult4 = document.getElementById("monTimeAdult4").innerHTML;

        var monInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult4);
        monInnerAdult4.innerHTML += `<li>Lunes ` + monTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (monAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal5 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult5 = document.getElementById("monTimeAdult5").innerHTML;

        var monInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult5);
        monInnerAdult5.innerHTML += `<li>Lunes ` + monTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (monAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("monday")
        var monVal6 = document.getElementById("Lunes").innerHTML;

        var monTimeAdult6 = document.getElementById("monTimeAdult6").innerHTML;

        var monInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", monTimeAdult6);
        monInnerAdult6.innerHTML += `<li>Lunes ` + monTimeAdult6 + `</li>`;
        classCounter++;
    }

    // TUESDAY
    var tuesAdult1 = document.getElementById("checkTuesAdult1");
    var tuesAdult2 = document.getElementById("checkTuesAdult2");
    var tuesAdult3 = document.getElementById("checkTuesAdult3");
    var tuesAdult4 = document.getElementById("checkTuesAdult4");
    var tuesAdult5 = document.getElementById("checkTuesAdult5");
    var tuesAdult6 = document.getElementById("checkTuesAdult6");

    if (tuesAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal1 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult1 = document.getElementById("tuesTimeAdult1").innerHTML;

        var tuesInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult1);
        tuesInnerAdult1.innerHTML += `<li>Martes ` + tuesTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (tuesAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal2 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult2 = document.getElementById("tuesTimeAdult2").innerHTML;

        var tuesInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult2);
        tuesInnerAdult2.innerHTML += `<li>Martes ` + tuesTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (tuesAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal3 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult3 = document.getElementById("tuesTimeAdult3").innerHTML;

        var tuesInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult3);
        tuesInnerAdult3.innerHTML += `<li>Martes ` + tuesTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (tuesAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal4 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult4 = document.getElementById("tuesTimeAdult4").innerHTML;

        var tuesInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult4);
        tuesInnerAdult4.innerHTML += `<li>Martes ` + tuesTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (tuesAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal5 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult5 = document.getElementById("tuesTimeAdult5").innerHTML;

        var tuesInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult5);
        tuesInnerAdult5.innerHTML += `<li>Martes ` + tuesTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (tuesAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("tuesday")
        var tuesVal6 = document.getElementById("Martes").innerHTML;

        var tuesTimeAdult6 = document.getElementById("tuesTimeAdult6").innerHTML;

        var tuesInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", tuesTimeAdult6);
        tuesInnerAdult6.innerHTML += `<li>Martes ` + tuesTimeAdult6 + `</li>`;
        classCounter++;
    }

    // WEDNESDAY
    var wedAdult1 = document.getElementById("checkWedAdult1");
    var wedAdult2 = document.getElementById("checkWedAdult2");
    var wedAdult3 = document.getElementById("checkWedAdult3");
    var wedAdult4 = document.getElementById("checkWedAdult4");
    var wedAdult5 = document.getElementById("checkWedAdult5");
    var wedAdult6 = document.getElementById("checkWedAdult6");

    if (wedAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal1 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult1 = document.getElementById("wedTimeAdult1").innerHTML;

        var wedInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult1);
        wedInnerAdult1.innerHTML += `<li>Miercoles ` + wedTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (wedAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal2 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult2 = document.getElementById("wedTimeAdult2").innerHTML;

        var wedInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult2);
        wedInnerAdult2.innerHTML += `<li>Miercoles ` + wedTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (wedAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal3 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult3 = document.getElementById("wedTimeAdult3").innerHTML;

        var wedInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult3);
        wedInnerAdult3.innerHTML += `<li>Miercoles ` + wedTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (wedAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal4 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult4 = document.getElementById("wedTimeAdult4").innerHTML;

        var wedInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult4);
        wedInnerAdult4.innerHTML += `<li>Miercoles ` + wedTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (wedAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal5 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult5 = document.getElementById("wedTimeAdult5").innerHTML;

        var wedInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult5);
        wedInnerAdult5.innerHTML += `<li>Miercoles ` + wedTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (wedAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("wednesday")
        var wedVal6 = document.getElementById("Miercoles").innerHTML;

        var wedTimeAdult6 = document.getElementById("wedTimeAdult6").innerHTML;

        var wedInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", wedTimeAdult6);
        wedInnerAdult6.innerHTML += `<li>Miercoles ` + wedTimeAdult6 + `</li>`;
        classCounter++;
    }

    // THURSDAY
    var thursAdult1 = document.getElementById("checkThursAdult1");
    var thursAdult2 = document.getElementById("checkThursAdult2");
    var thursAdult3 = document.getElementById("checkThursAdult3");
    var thursAdult4 = document.getElementById("checkThursAdult4");
    var thursAdult5 = document.getElementById("checkThursAdult5");
    var thursAdult6 = document.getElementById("checkThursAdult6");

    if (thursAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal1 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult1 = document.getElementById("thursTimeAdult1").innerHTML;

        var thursInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult1);
        thursInnerAdult1.innerHTML += `<li>Jueves ` + thursTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (thursAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal2 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult2 = document.getElementById("thursTimeAdult2").innerHTML;

        var thursInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult2);
        thursInnerAdult2.innerHTML += `<li>Jueves ` + thursTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (thursAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal3 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult3 = document.getElementById("thursTimeAdult3").innerHTML;

        var thursInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult3);
        thursInnerAdult3.innerHTML += `<li>Jueves ` + thursTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (thursAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal4 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult4 = document.getElementById("thursTimeAdult4").innerHTML;

        var thursInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult4);
        thursInnerAdult4.innerHTML += `<li>Jueves ` + thursTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (thursAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal5 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult5 = document.getElementById("thursTimeAdult5").innerHTML;

        var thursInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult5);
        thursInnerAdult5.innerHTML += `<li>Jueves ` + thursTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (thursAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Thursday")
        var thursVal6 = document.getElementById("Jueves").innerHTML;

        var thursTimeAdult6 = document.getElementById("thursTimeAdult6").innerHTML;

        var thursInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", thursTimeAdult6);
        thursInnerAdult6.innerHTML += `<li>Jueves ` + thursTimeAdult6 + `</li>`;
        classCounter++;
    }

    // FRIDAY
    var friAdult1 = document.getElementById("checkFriAdult1");
    var friAdult2 = document.getElementById("checkFriAdult2");
    var friAdult3 = document.getElementById("checkFriAdult3");
    var friAdult4 = document.getElementById("checkFriAdult4");
    var friAdult5 = document.getElementById("checkFriAdult5");
    var friAdult6 = document.getElementById("checkFriAdult6");

    if (friAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal1 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult1 = document.getElementById("friTimeAdult1").innerHTML;

        var friInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult1);
        friInnerAdult1.innerHTML += `<li>Viernes ` + friTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (friAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal2 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult2 = document.getElementById("friTimeAdult2").innerHTML;

        var friInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult2);
        friInnerAdult2.innerHTML += `<li>Viernes ` + friTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (friAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal3 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult3 = document.getElementById("friTimeAdult3").innerHTML;

        var friInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult3);
        friInnerAdult3.innerHTML += `<li>Viernes ` + friTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (friAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal4 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult4 = document.getElementById("friTimeAdult4").innerHTML;

        var friInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult4);
        friInnerAdult4.innerHTML += `<li>Viernes ` + friTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (friAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal5 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult5 = document.getElementById("friTimeAdult5").innerHTML;

        var friInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult5);
        friInnerAdult5.innerHTML += `<li>Viernes ` + friTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (friAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Friday")
        var friVal6 = document.getElementById("Viernes").innerHTML;

        var friTimeAdult6 = document.getElementById("friTimeAdult6").innerHTML;

        var friInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", friTimeAdult6);
        friInnerAdult6.innerHTML += `<li>Viernes ` + friTimeAdult6 + `</li>`;
        classCounter++;
    }

    // SATURDAY
    var satAdult1 = document.getElementById("checkSatAdult1");
    var satAdult2 = document.getElementById("checkSatAdult2");
    var satAdult3 = document.getElementById("checkSatAdult3");
    var satAdult4 = document.getElementById("checkSatAdult4");
    var satAdult5 = document.getElementById("checkSatAdult5");
    var satAdult6 = document.getElementById("checkSatAdult6");

    if (satAdult1.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal1 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult1 = document.getElementById("satTimeAdult1").innerHTML;

        var satInnerAdult1 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult1);
        satInnerAdult1.innerHTML += `<li>Sabado ` + satTimeAdult1 + `</li>`;
        classCounter++;
    }
    if (satAdult2.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal2 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult2 = document.getElementById("satTimeAdult2").innerHTML;

        var satInnerAdult2 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult2);
        satInnerAdult2.innerHTML += `<li>Sabado ` + satTimeAdult2 + `</li>`;
        classCounter++;
    }
    if (satAdult3.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal3 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult3 = document.getElementById("satTimeAdult3").innerHTML;

        var satInnerAdult3 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult3);
        satInnerAdult3.innerHTML += `<li>Sabado ` + satTimeAdult3 + `</li>`;
        classCounter++;
    }
    if (satAdult4.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal4 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult4 = document.getElementById("satTimeAdult4").innerHTML;

        var satInnerAdult4 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult4);
        satInnerAdult4.innerHTML += `<li>Sabado ` + satTimeAdult4 + `</li>`;
        classCounter++;
    }
    if (satAdult5.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal5 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult5 = document.getElementById("satTimeAdult5").innerHTML;

        var satInnerAdult5 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult5);
        satInnerAdult5.innerHTML += `<li>Sabado ` + satTimeAdult5 + `</li>`;
        classCounter++;
    }
    if (satAdult6.checked == true) {
        var titleAdult = document.getElementById("classTitleAdult2").innerHTML;

        var confirmTitleAdult = document.getElementById("confirmAdult");

        confirmTitleAdult.innerHTML = titleAdult

        datesRegister.push("Saturday")
        var satVal6 = document.getElementById("Sabado").innerHTML;

        var satTimeAdult6 = document.getElementById("satTimeAdult6").innerHTML;

        var satInnerAdult6 = document.getElementById("timePickerAdult");

        console.log("Value: ", satTimeAdult6);
        satInnerAdult6.innerHTML += `<li>Sabado ` + satTimeAdult6 + `</li>`;
        classCounter++;
    }

    var classesName;

    if (classCounter == 1) {
        classesName = "clase"
    } else {
        classesName = "clases"
    }

    console.log("classes ", classCounter)
    var numClasses = document.getElementById("numClassesAdult")
    numClasses.innerHTML = `<p>Has elejido <span style ="color:green;">` + classCounter + `</span> ` + classesName + `</p>`;

    var price;

    if (kids == false) {
        if (groupNumber == "Individual") {
            if (classCounter == 1) {
                price = "G.s 365.000"
                priceNum = 365000
            }
            if (classCounter == 2) {
                price = "G.s 730.000"
                priceNum = 730000
            }
            if (classCounter == 3) {
                price = "G.s 1.095.000"
                priceNum = 1095000
            }
        }
        if (groupNumber == "Grupo de 2") {
            if (classCounter == 1) {
                price = "G.s 235.000"
                priceNum = 235000
            }
            if (classCounter == 2) {
                price = "G.s 470.000"
                priceNum = 470000
            }
            if (classCounter == 3) {
                price = "G.s 705.000"
                priceNum = 705000
            }
        }
        if (groupNumber == "Grupo de 4") {
            if (classCounter == 1) {
                price = "G.s 180.000"
                priceNum = 180000
            }
            if (classCounter == 2) {
                price = "G.s 360.000"
                priceNum = 360000
            }
            if (classCounter == 3) {
                price = "G.s 540.000"
                priceNum = 540000
            }
        }
    }

    var priceTotal = document.getElementById("priceTotalAdult");
    priceTotal.innerHTML = `<p>Precio total = <span style ="color:green;">` + price + `</span> Mensual</p>`;

}

function adultFunction3() {
    const formatter = new Intl.NumberFormat('es', {
        style: 'currency',
        currency: 'PYG',
        minimumFractionDigits: 2
    })
    var totalMonths = document.getElementById("totalMonths").value;

    console.log("Total months: ", totalMonths);

    var totalMonthsPrice = totalMonths * priceNum;

    var totalFinalPrice = document.getElementById("totalFinalPriceAdult");

    console.log(new Intl.NumberFormat('de-DE').format(totalMonthsPrice));

    var priceFormatted = new Intl.NumberFormat('de-DE').format(totalMonthsPrice);

    totalFinalAmount = priceFormatted;

    var mesesFormat;

    totalFinalMonths = totalMonths;

    if (totalMonths == "1") {
        mesesFormat = "mes"
    } else {
        mesesFormat = "meses"
    }

    totalFinalPrice.innerHTML = `<p>G.s <span style ="color:green;">` + priceFormatted + `</span> para <span style ="color:green;">` + totalMonths + `</span> ` + mesesFormat + ` de tenis!</p>`;

}


function adultFunctionShowPrinc() {
    document.getElementById("princShow").style.display = "block";
    document.getElementById("intShow").style.display = "none";
}

function adultFunctionShowInt() {
    document.getElementById("intShow").style.display = "block";
    document.getElementById("princShow").style.display = "none";
}

function myFunction2() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    firstNameReg = firstName;
    lastNameReg = lastName;
    phoneNumReg = phone;
    emailReg = email;

    console.log("First Name: ", firstName)
    console.log("Last Name: ", lastName)
    console.log("Email: ", email)
    console.log("Phone: ", phone)
}

function myFunction3() {
    var title = document.getElementById("classTitle").innerHTML;

    var confirmTitle = document.getElementById("confirm")

    confirmTitle.innerHTML = title

    var mon = document.getElementById("checkMon");
    var tues = document.getElementById("checkTues");
    var wed = document.getElementById("checkWed");
    var thurs = document.getElementById("checkThurs");
    var fri = document.getElementById("checkFri");
    var sat = document.getElementById("checkSat");
    var sun = document.getElementById("checkSun");
    if (mon.checked == false && tues.checked == false && wed.checked == false && thurs.checked == false && fri.checked == false && sat.checked == false && sun.checked == false) {
        // return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";
        console.log("Please mark at least one checkbox")
    }
    // else if (mon.checked == true) {
    //     var y = document.getElementById("checkMon").value;
    //     // return document.getElementById("result").innerHTML = y;
    //     console.log("Value: ", y);
    // }
    // else if (tues.checked == true) {
    //     var n = document.getElementById("checkTues").value;
    //     // return document.getElementById("result").innerHTML = n;
    //     console.log("Value: ", n);
    // }
    if (mon.checked == true) {
        datesRegister.push("monday")
        var monVal = document.getElementById("checkMon").value;

        var monTime = document.getElementById("monTime").innerHTML;

        var monInner = document.getElementById("timePicker");

        console.log("Value: ", monTime);
        monInner.innerHTML += `<li>` + monTime + `</li>`;
        classCounter++;
    }
    if (tues.checked == true) {
        datesRegister.push("tuesday")
        var monTues = document.getElementById("checkTues").value;

        var tuesTime = document.getElementById("tuesTime").innerHTML;

        var tuesInner = document.getElementById("timePicker");

        console.log("Value: ", tuesTime);
        tuesInner.innerHTML += `<li>` + tuesTime + `</li>`;
        classCounter++;
    }
    if (wed.checked == true) {
        datesRegister.push("wednesday")
        var monWed = document.getElementById("checkWed").value;

        var wedTime = document.getElementById("wedTime").innerHTML;

        var wedInner = document.getElementById("timePicker");

        console.log("Value: ", wedTime);
        wedInner.innerHTML += `<li>` + wedTime + `</li>`;
        classCounter++;
    }
    if (thurs.checked == true) {
        datesRegister.push("thursday")
        var monThurs = document.getElementById("checkThurs").value;

        var thursTime = document.getElementById("thursTime").innerHTML;

        var thursInner = document.getElementById("timePicker");

        console.log("Value: ", thursTime);
        thursInner.innerHTML += `<li>` + thursTime + `</li>`;
        classCounter++;
    }
    if (fri.checked == true) {
        datesRegister.push("friday")
        var monFri = document.getElementById("checkFri").value;

        var friTime = document.getElementById("friTime").innerHTML;

        var friInner = document.getElementById("timePicker");

        console.log("Value: ", friTime);
        friInner.innerHTML += `<li>` + friTime + `</li>`;
        classCounter++;
    }
    if (sat.checked == true) {
        datesRegister.push("saturday")
        var monSat = document.getElementById("checkSat").value;

        var satTime = document.getElementById("satTime").innerHTML;

        var satInner = document.getElementById("timePicker");

        console.log("Value: ", satTime);
        satInner.innerHTML += `<li>` + satTime + `</li>`;
        classCounter++;
    }
    if (sun.checked == true) {
        datesRegister.push("sunday")
        var monSun = document.getElementById("checkSun").value;
        console.log("Value: ", monSun);
    }
    // else {
    //     var monVal = document.getElementById("checkMon").value;
    //     console.log("Value: ", monVal);

    //     var monTues = document.getElementById("checkTues").value;
    //     console.log("Value: ", monTues);

    //     var monWed = document.getElementById("checkWed").value;
    //     console.log("Value: ", monWed);

    //     var monThurs = document.getElementById("checkThurs").value;
    //     console.log("Value: ", monThurs);

    //     var monFri = document.getElementById("checkFri").value;
    //     console.log("Value: ", monFri);

    //     var monSat = document.getElementById("checkSat").value;
    //     console.log("Value: ", monSat);

    //     var monSun = document.getElementById("checkSun").value;
    //     console.log("Value: ", monSun);
    //     // return document.getElementById("error").innerHTML = "*Please mark any of checkbox";
    //     // console.log("Please mark any of checkbox")
    // }


    var classesName;

    if (classCounter == 1) {
        classesName = "clase"
    } else {
        classesName = "clases"
    }

    console.log("classes ", classCounter)
    var numClasses = document.getElementById("numClasses")
    numClasses.innerHTML = `<p>Has elejido <span style ="color:green;">` + classCounter + `</span> ` + classesName + `</p>`;

    var price;

    if (kids == true) {
        if (classCounter == 1) {
            price = "G.s 140.000"
            priceNum = 140000
        }
        if (classCounter == 2) {
            price = "G.s 280.000"
            priceNum = 280000
        }
        if (classCounter == 3) {
            price = "G.s 420.000"
            priceNum = 420000
        }
        if (classCounter == 4) {
            price = "G.s 560.000"
            priceNum = 560000
        }
        if (classCounter == 5) {
            price = "G.s 700.000"
            priceNum = 700000
        }
    }

    var priceTotal = document.getElementById("priceTotal");
    priceTotal.innerHTML = `<p>Precio total = <span style ="color:green;">` + price + `</span> Mensual</p>`;

}

function myFunction4() {
    const formatter = new Intl.NumberFormat('es', {
        style: 'currency',
        currency: 'PYG',
        minimumFractionDigits: 2
    })
    var totalMonths = document.getElementById("totalMonths").value;

    console.log("Total months: ", totalMonths);

    var totalMonthsPrice = totalMonths * priceNum;

    var totalFinalPrice = document.getElementById("totalFinalPrice");

    console.log(new Intl.NumberFormat('de-DE').format(totalMonthsPrice));

    var priceFormatted = new Intl.NumberFormat('de-DE').format(totalMonthsPrice);

    totalFinalAmount = priceFormatted;

    var mesesFormat;

    totalFinalMonths = totalMonths;

    if (totalMonths == "1") {
        mesesFormat = "mes"
    } else {
        mesesFormat = "meses"
    }

    totalFinalPrice.innerHTML = `<p>G.s <span style ="color:green;">` + priceFormatted + `</span> para <span style ="color:green;">` + totalMonths + `</span> ` + mesesFormat + ` de tenis!</p>`;
}

function registerFunction() {

    // console.log(datesRegister);
    console.log('Registered Successfully')

    var kidsOrAdult;

    if (kids == true) {
        kidsOrAdult = "kids"

    }

    for (var i = 0; i < datesRegister.length; i++) {
        var database = firebase.database().ref('database/classes/' + kidsOrAdult + '/' + classRegistered + '/' + datesRegister[i] + '/inscribidos');
        var newUserRegisterRef = database.push();
        newUserRegisterRef.set({
            // timeRegistered: time,
            nombre: firstNameReg,
            apellido: lastNameReg,
            email: emailReg,
            cel: phoneNumReg,
            // from: fromDate,
            // to: toDate,
            meses: totalFinalMonths,
            precio: totalFinalAmount,
        });
    }
}

// mobiscroll.datepicker('#picker', {
//     controls: ['time'],
//     select: 'range',
//     display: 'inline',
//     touchUi: true
// });


// mobiscroll.setOptions({
//     locale: mobiscroll.localeEn,  // Specify language like: locale: mobiscroll.localePl or omit setting to use default
//     theme: 'ios',                 // Specify theme like: theme: 'ios' or omit setting to use default
//     themeVariant: 'light'         // More info about themeVariant: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-themeVariant
// });

var now = new Date(),
    week = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);

// mobiscroll.datepicker('#demo-mobile-picker-input', {
//     controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-controls
//     select: 'range',              // More info about select: https://docs.mobiscroll.com/5-9-0/javascript/range#methods-select
//     showRangeLabels: true
// });

// var instance = mobiscroll.datepicker('#demo-mobile-picker-button', {
//     controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-controls
//     select: 'range',              // More info about select: https://docs.mobiscroll.com/5-9-0/javascript/range#methods-select
//     showRangeLabels: true,
//     showOnClick: false,           // More info about showOnClick: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-showOnClick
//     showOnFocus: false,           // More info about showOnFocus: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-showOnFocus
// });

// instance.setVal([now, week]);

// mobiscroll.datepicker('#demo-mobile-picker-mobiscroll', {
//     controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-controls
//     select: 'range',              // More info about select: https://docs.mobiscroll.com/5-9-0/javascript/range#methods-select
//     showRangeLabels: true
// });

// var inlineInst = mobiscroll.datepicker('#demo-mobile-picker-inline', {
//     controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-9-0/javascript/range#opt-controls
//     select: 'range',              // More info about select: https://docs.mobiscroll.com/5-9-0/javascript/range#methods-select
//     showRangeLabels: true,
//     display: 'inline',            // Specify display mode like: display: 'bottom' or omit setting to use default
// });

// inlineInst.setVal([now, week]);

// document
//     .getElementById('show-mobile-date-picker')
//     .addEventListener('click', function () {
//         instance.open();
//         return false;
//     });