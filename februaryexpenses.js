var editbudget = document.getElementById("editbudget");
var numel = 5;
var monthlytotal = document.getElementById("monthlytotal");
var budgetval = document.getElementById("budgetval1");

function changeBudget() {
	var x = budgetval.value;
	budgetval.innerHTML = x;
}
	
function setBudget1() {
	var two = document.getElementById("budgetval2").value;
	document.getElementById("budgetval1").value = two;
	alert("Budget Set!");
}

function setBudget2() {
	var one = document.getElementById("budgetval1").value;
	document.getElementById("budgetval2").value = one;
	alert("Budget Set!");
}

function setTotalSpending() {	
	var sum = 0;
	// iterate through each td based on class and add the values
	$(".money").each(function() {
		var value = $(this).html();
		// add only if the value is number
		//n = 
		if(value.length != 0) {	
			value = value.substring(1,(value.length));				
			sum += parseFloat(value);
		}
	});
		
	var roundedSum = Math.round(sum * 100) / 100;
	$(".monthlytotal").each(function() {
		$(this).html('$' + String(roundedSum));
	});
	//checkBudget(); 
}

function checkBudget() {
	var budget = budgetval.value;
	var unroundedtotal = parseFloat(monthlytotal.innerHTML);
	var total = Math.round(unroundedtotal * 100) / 100;
	//$(".monthlytotal").each(function() {
	//	if (total > budget) {
	//		$(this).css({'color' : 'red'});
	//	}
	//	else {
	//		$(this).css({'color' : 'green'});
	//	}
	//}
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

function getValuesOne2() {
	var date = document.getElementById('datein');
	var olddate = ($("#one.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costin');
	var oldcost = ($("#one.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locin');
	var oldloc = ($("#one.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesTwo2() {
	var date = document.getElementById('datein');
	var olddate = ($("#two.date").html());
	date.value = olddate;	
	var cost = document.getElementById('costin');
	var oldcost = ($("#two.money").html());
	cost.value = oldcost;
	var loc = document.getElementById('locin');
	var oldloc = ($("#two.loc").html());
	loc.value = oldloc;
}
function getValuesThree2() {
	var date = document.getElementById('datein');
	var olddate = ($("#three.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costin');
	var oldcost = ($("#three.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locin');
	var oldloc = ($("#three.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesFour2() {
	var date = document.getElementById('datein');
	var olddate = ($("#four.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costin');
	var oldcost = ($("#four.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locin');
	var oldloc = ($("#four.loc").html()).trim();
	loc.value = oldloc;
}
function getValuesFive2() {
	var date = document.getElementById('datein');
	var olddate = ($("#five.date").html()).trim();
	date.value = olddate;	
	var cost = document.getElementById('costin');
	var oldcost = ($("#five.money").html()).trim();
	cost.value = oldcost;
	var loc = document.getElementById('locin');
	var oldloc = ($("#five.loc").html()).trim();
	loc.value = oldloc;
}

function changeValues() {
	if (globalID == "one") {
		var date = document.getElementById('dateinput');
		var newdate = date.value;
		$("#one.date").html(newdate);
		var cost = document.getElementById('costinput');
		var newcost = '$' + cost.value;
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

function changeValues2() {
	if (globalID == "one") {
		var date = document.getElementById('datein');
		var newdate = date.val();
		$("#one.date").html(newdate);
		var cost = document.getElementById('costin');
		var newcost = cost.value;
		$("#one.money").html(newcost);
		var loc = document.getElementById('locin');
		var newloc = loc.value;
		$("#one.loc").html(newloc);
	}
	else if (globalID == "two") {
		var date = document.getElementById('datein');
		var newdate = date.val();
		$("#two.date").html(newdate);
		var cost = document.getElementById('costin');
		var newcost = cost.value;
		$("#two.money").html(newcost);
		var loc = document.getElementById('locin');
		var newloc = loc.value;
		$("#two.loc").html(newloc);
	}	
	else if (globalID == "three") {
		var date = document.getElementById('datein');
		var newdate = date.value;
		$("#three.date").html(newdate);
		var cost = document.getElementById('costin');
		var newcost = cost.value;
		$("#three.money").html(newcost);
		var loc = document.getElementById('locin');
		var newloc = loc.value;
		$("#three.loc").html(newloc);
	}
	else if (globalID == "four") {
		var date = document.getElementById('datein');
		var newdate = date.value;
		$("#four.date").html(newdate);
		var cost = document.getElementById('costin');
		var newcost = cost.value;
		$("#four.money").html(newcost);
		var loc = document.getElementById('locin');
		var newloc = loc.value;
		$("#four.loc").html(newloc);
	}
	else if (globalID == "five") {
		var date = document.getElementById('datein');
		var newdate = date.value;
		$("#five.date").html(newdate);
		var cost = document.getElementById('costin');
		var newcost = cost.value;
		$("#five.money").html(newcost);
		var loc = document.getElementById('locin');
		var newloc = loc.value;
		$("#five.loc").html(newloc);
	}
}


