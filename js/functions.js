/* $(document).on('pagebeforeshow', '#expform', function(){       
    $(document).on('click', '#test-btn', function(){       
        var tb = $('#tbProp');
		var date = $("#date").val();
		var spent = $("#spent").val();
		var loc = $("#loc").val();
		var markup = "<tr><td>" + date + "</td><td>" + spent " </td><td>" + loc + "</td><td><button class="edit">Remove</button></td></tr>";
        newRow = markup;
		newBody = "";
		newBody += newRow;
		tb.empty().append("<td><input type='text' name='date' value='1' /></td>");
		$("#myTable").trigger('create')
	})
});
	 */	
$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#test-btn', function(){       
        var tb = $('#tbProp');
        newRow = '<tr><td style="text-align: center;vertical-align:middle">' + 'Test11' + '</td> <td style="text-align: center;vertical-align:middle">' + '23.3'+ '</td><td style="text-align: center;vertical-align:middle"><a href="#" data-role="button" data-mini="true">Test22</a></td><td style="text-align: center;vertical-align:middle"><a href="#popupLogin" data-rel="popup" data-position-to="window" data-role="button" data-mini="true">Test33</a></td></tr>',
        newBody = "";
        for (var i = 0,
             l = 2; i < l; i += 1) {
            newBody += newRow;
        }
        tb.empty().append(newBody);
        
        $("#tableProp").trigger('create')
    });    
});







/* $(document).ready(function(){
        $(".newrow").click(function(){
			var date = $("#date").val();
			var spent = $("#spent").val();
			var loc = $("#loc").val();
			var markup = "<tr><td>" + 1 + "</td><td>" + 2 " </td><td>" + 3 + "</td><td><button class="edit">Remove</button></td></tr>";
			
			$("#myTable tbody").append(markup);
			var tableRef = document.getElementById('myTable');
			tableRef.table();
		});
});


var tableRef = document.getElementById('myTable');

function Add(){
	var master = document.getElementById('myTable');
	var expform = document.getElementById("expform");
	var date = expform.elements[0].value;
	var loc = expform.elements[1].value;
	var spent = expform.elements[2].value;
	
	// Get a new row based on the prototype row
	var prot = master.find(".prototype").clone();
	prot.find(".date").attr("value", date);
	prot.find(".loc").attr("value", loc);
	prot.find(".spent").attr("value", spent);
	
	
	master.find("tbody").append(prot);
}

funtion newrow(){
	var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
	cell3.innerHTML = "NEW CELL3";
	cell4.innerHTML = "NEW CELL2";
} */

/* function Add(){
	var expform = document.getElementById("expform");
    var date = expform.elements[0].value;
	var loc = expform.elements[1].value;
	var spent = expform.elements[2].value;
	
	var row = tableRef.insertRow(0);
	var cellDate = row.insertCell(0);
	var cellSpent = row.insertCell(1);
	var cellLoc = row.insertCell(2);
	var cellButtons = row.insertCell(3);
	
	cellDate.innerHTML = date;
	cellSpent.innerHTML = spent;
	cellLoc.innerHTML = loc;
	cellButtons.innerHTML = "<a href='#' class='btnEdit ui-btn ui-corner-all ui-btn-inline ui-icon-edit ui-btn-icon-notext'></a><a href='#' class='btnDelete ui-btn ui-corner-all ui-btn-inline ui-icon-delete ui-btn-icon-notext'/></a>";
	
cellDate.innerHTML = "<?php isset($_POST['date']) ? $_POST['date'] : '' ?>";
	cellSpent.innerHTML ="<?php isset($_POST['spent']) ? $_POST['spent'] : '' ?>";
	cellLoc.innerHTML = "<?php isset($_POST['loc']) ? $_POST['loc'] : '' ?>";
	cellButtons.innerHTML = "<a href='#' class='btnEdit ui-btn ui-corner-all ui-btn-inline ui-icon-edit ui-btn-icon-notext'></a><a href='#' class='btnDelete ui-btn ui-corner-all ui-btn-inline ui-icon-delete ui-btn-icon-notext'/></a>";
		
	$(".btnSave").bind("click", Save);	
	$(".btnDelete").bind("click", Delete); 
}; 

 */

 