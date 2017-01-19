function alertMe() {
    //    var fname = document.getElementById("myForm").elements["firstname"].value;
    //    var lname = document.getElementById("myForm").elements["lastname"].value;
    //    var formAge = document.getElementById("myForm").elements["age"].value;
    //    var gender = document.getElementById("myForm").elements["gender"].value;
    //    var travelTo = document.getElementById("myForm").elements["location"].value;
    //    var dietNo = document.getElementById("myForm").elements["dietRestrict"].value;
    //
    //
    //    function getLosangeles() {
    //        var checkboxval = document.getElementById("myForm").elements["location"].value;
    //        if (checkboxval.checked == true) {
    //            return "Los Angeles";
    //        } else {
    //            return;
    //        }
    //    }
    alert(dietChex());

}

function locChex() {
    var checkedValue = null;
    var inputElements = document.getElementsByClassName("locCheckBox");
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            return checkedValue;
        }
    }
}

function dietChex() {
    var checkedValue = null;
    var inputElements = document.getElementsByClassName("dietNoMas");
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            return checkedValue;
        }
    }
}