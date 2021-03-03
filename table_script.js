deals = [
    {"deal_id" : 0 , "vendor_name" : "Microsoft", "project_name" : "Apollo Project", "project_cost" : 1000},
    {"deal_id" : 1, "vendor_name" : "Intel", "project_name" : "Hermes Project", "project_cost" : 10000},
    {"deal_id" : 2 , "vendor_name" : "Apple", "project_name" : "Zeus Project", "project_cost" : 100000}
    ]

window.localStorage.setItem('deals', JSON.stringify(deals));

window.localStorage.getItem('deals');

var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        dealId = document.getElementById("dealId").value,
        vname = document.getElementById("vname").value,
        pname = document.getElementById("pname").value;
        pcost = document.getElementById("pcost").value;

    if(dealId === "" || vname === "" || pname === "" || pcost === ""){
        alert("Fields Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            dealId = document.getElementById("dealId").value,
            vname = document.getElementById("vname").value,
            pname = document.getElementById("pname").value,
            pcost = document.getElementById("pcost").value;


        cell1.innerHTML = dealId;
        cell2.innerHTML = vname;
        cell3.innerHTML = pname;
        cell4.innerHTML = pcost;
        cell5.innerHTML = "UnderAssessment";
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput()
{
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          rIndex = this.rowIndex;
          document.getElementById("dealId").value = this.cells[0].innerHTML;
          document.getElementById("vname").value = this.cells[1].innerHTML;
          document.getElementById("pname").value = this.cells[2].innerHTML;
          document.getElementById("pcost").value = this.cells[3].innerHTML;
        };
    }
}

selectedRowToInput();

function editHtmlTbleSelectedRow()
{
    var dealId = document.getElementById("dealId").value,
        vname = document.getElementById("vname").value,
        pname = document.getElementById("pname").value;
        pcost = document.getElementById("pcost").value;
   if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = dealId;
    table.rows[rIndex].cells[1].innerHTML = vname;
    table.rows[rIndex].cells[2].innerHTML = pname;
    table.rows[rIndex].cells[3].innerHTML = pcost;
  }
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("dealId").value = "";
    document.getElementById("vname").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("pcost").value = "";
}