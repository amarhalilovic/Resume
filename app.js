//Function for displaying entered formula in calculator
function insertNumber(num) {
    document.form1.textv.value = document.form1.textv.value + num;
}


//Function for getting result in calculator
function eq() {
    var r = document.form1.textv.value;
    if (r) {
        document.form1.textv.value = eval(r);
    }
}


//Function to clean text box in calculator
function clean() {
    document.form1.textv.value = null;
}