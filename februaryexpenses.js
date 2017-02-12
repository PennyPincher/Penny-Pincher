var editbudget = document.getElementById("editbudget");
var numel = 5;
var monthlytotal = document.getElementById("monthlytotal");
var budgetval = document.getElementById("budgetval");

function changeBudget() {
	var x = budgetval.value;
	budgetval.innerHTML = x;
}

function setTotalSpending() {	

	var sum = 0;
	// iterate through each td based on class and add the values
	$(".money").each(function() {
		var value = $(this).text();
		// add only if the value is number
		if(!isNaN(value) && value.length != 0) {
			sum += parseFloat(value);
		}
	});
		
	var roundedSum = Math.round(sum * 100) / 100;
	monthlytotal.innerHTML = String(roundedSum);
	checkBudget(); 
}

function checkBudget() {
	var budget = budgetval.value;
	var unroundedtotal = parseFloat(monthlytotal.innerHTML);
	var total = Math.round(unroundedtotal * 100) / 100;
	if (total > budget) {
		monthlytotal.style.color = 'red';
	}
	else {
		monthlytotal.style.color = 'green';
	}
}


// MODAL FUNCTIONS
var modal = document.getElementById('myModal');

//var date;
var globalID = 'zero';
function setID(num) {
	globalID = num;
}

function getValuesOne() {
	var date = document.getElementById('dateinput');
	var olddate = ($("#one.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costinput');
	var oldcost = ($("#one.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locinput');
	var oldloc = ($("#one.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesTwo() {
	var date = document.getElementById('dateinput');
	var olddate = ($("#two.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costinput');
	var oldcost = ($("#two.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locinput');
	var oldloc = ($("#two.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesThree() {
	var date = document.getElementById('dateinput');
	var olddate = ($("#three.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costinput');
	var oldcost = ($("#three.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locinput');
	var oldloc = ($("#three.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesFour() {
	var date = document.getElementById('dateinput');
	var olddate = ($("#one.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costinput');
	var oldcost = ($("#one.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locinput');
	var oldloc = ($("#one.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesFive() {
	var date = document.getElementById('dateinput');
	var olddate = ($("#one.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costinput');
	var oldcost = ($("#one.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locinput');
	var oldloc = ($("#one.loc").html()).trim();
	loc.value = oldloc;
}


function changeValues() {
	if (globalID == "one") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#one.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = cost.value;
		$("#one.money").html(newcost);
		var loc = document.getElementById('locinput');
		var newloc = loc.value;
		$("#one.loc").html(newloc);
	}
	else if (globalID == "two") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#two.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = cost.value;
		$("#two.money").html(newcost);
		var loc = document.getElementById('locinput');
		var newloc = loc.value;
		$("#two.loc").html(newloc);
	}	
	else if (globalID == "three") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#three.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = cost.value;
		$("#three.money").html(newcost);
		var loc = document.getElementById('locinput');
		var newloc = loc.value;
		$("#three.loc").html(newloc);
	}
	else if (globalID == "four") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#four.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = cost.value;
		$("#four.money").html(newcost);
		var loc = document.getElementById('locinput');
		var newloc = loc.value;
		$("#four.loc").html(newloc);
	}
	else if (globalID == "five") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#five.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = cost.value;
		$("#five.money").html(newcost);
		var loc = document.getElementById('locinput');
		var newloc = loc.value;
		$("#five.loc").html(newloc);
	}
}


