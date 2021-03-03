
var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        pbudget = document.getElementById("pbudget").value;

    if(pbudget === ""){
        alert("Fields Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// display selected row data into input text
function selectedRowToInput()
{
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        document.getElementById("pbudget").value = this.cells[4].innerHTML;
        }
    }
}

selectedRowToInput();

function editHtmlTbleSelectedRowFinance()
{
    var pbudget = document.getElementById("pbudget").value;
    if(!checkEmptyInput()){
        table.rows[rIndex].cells[4].innerHTML = pbudget;
  }
}
