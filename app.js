var total = 0,
  index = 2,
  table = document.getElementById("table");

function checkEmptyInput() {
  var isEmpty = false,
    fInput = document.getElementById("fInput").value,
    sInput = document.getElementById("sInput").value,
    tInput = document.getElementById("tInput").value;

  if (fInput === "") {
    alert("ENTER 1st VALUE");
    isEmpty = true;
  } else if (sInput === "") {
    alert("ENTER 2nd VALUE");
    isEmpty = true;
  } else if (tInput === "") {
    alert("ENTER 3rd VALUE");
    isEmpty = true;
  }
  return isEmpty;
}

function addTableRow() {
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      fInput = document.getElementById("fInput").value,
      sInput = document.getElementById("sInput").value,
      tInput = document.getElementById("tInput").value;

    cell1.innerHTML = fInput;
    cell2.innerHTML = sInput;
    cell3.innerHTML = tInput;
    (document.getElementById("fInput").value = ""),
      (document.getElementById("sInput").value = ""),
      (document.getElementById("tInput").value = "");
    index++;
    totalsum();
  }
}

function removeRow() {
  table.deleteRow(index);
  index--;
  totalsum();
}

function totalsum() {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < 3; j++)
      total = total + parseInt(table.rows[i].cells[j].innerHTML);
  }
  document.getElementById("total").innerHTML = "Total = " + total;
  total = 0;
}
totalsum();
