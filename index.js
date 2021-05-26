  
 function AppViewModel() {
    this.fname = ko.observable("hs"),
    this.lname = ko.observable(),
    this.selectedDate = ko.observable(),
    this.availableDates = ko.observableArray
        ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]),
    this.selectedMonth = ko.observable(),
    this.availableMonths = ko.observableArray
        (["January","February","March","April","May","June","July","August","September","October","November","December"]),
    this.selectedYear = ko.observable(),
    this.availableYears = ko.observableArray
        ([1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]),
    this.email = ko.observable(),
    this.mobile = ko.observable(),
    this.gender = ko.observable("Female"),
    this.address = ko.observable(),
    this.city = ko.observable("Hyd"),
    this.zipCode = ko.observable(),
    this.selectedState = ko.observable(),
    this.availableStates = ko.observableArray(["AP", "Rajasthan", "Tamilnadu", "UP", "Kerla","Gujrat"]),
    this.selectedCountry = ko.observable(),
    this.availableCountries = ko.observableArray(["India", "US", "China", "Japan","Australia"]),
    this.course = ko.observable("BA"),
    this.accept = ko.observable(false)
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zipCode = document.getElementById("zipCode");
const state = document.getElementById("state");
const country = document.getElementById("country");
const course = document.getElementById("course");
const form_data = document.getElementById("save");
const submitButton = document.getElementById("btn1");
const keys = document.getElementById("keys");
const values = document.getElementById("values");
const deleteBtn = document.getElementById("deleteBtn");
const editBtn = document.getElementById("editBtn");
const keyArray = ["fname", "lname", "date", "month", "year", "email", "mobile", "gender", "address", "city", "zipCode","state", "country", "course"];
const valArray = [fName, lName, date, month, year, email, mobile, gender, address, city, zipCode, state, country, course];

btn1.onclick = function () {
    this.currStudent = ko.observable(new AppViewModel());
    var result = ko.validation.group(this.currStudent());
    for (let i = 0; i < keyArray.length; i++) {
        let value = valArray[i].value;
        if (value) {
            localStorage.setItem(keyArray[i], value);
        }
    }
    console.log("print data");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (key == "save") {
            continue;
        }
       keys.innerHTML += `${key} <br/>`;
       values.innerHTML += `${value} <br/>`;
     }}

deleteBtn.onclick = function(){
    localStorage.clear();
    tabletn.innerHTML= `All Data Has Been Deleted From Local Storag`;
}
