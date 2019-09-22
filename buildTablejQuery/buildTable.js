let emp=[
  {
    Name:'Tom',
    Age:35,
    City:'Chicago'
  },
  {
    Name:'John',
    Age:30,
    City:'New York'
  },
  {
    Name:'Ronald',
    Age:31,
    City:'Austria'
  },
  {
    Name:'Enice',
    Age:29,
    City:'London'
  },
  {
    Name:'David',
    Age:36,
    City:'Miami'
  }
];  


//jQuery

/*
//first table
var content="<table>";
content+='<thead><tr>';
for(i=0;i<3;i++){
  content+='<th>'+'Item'+'</th>';
}
content+='</tr></thead>';
content+='<tbody><tr>';
for(j=0;j<3;j++){
  content+='<td>'+'result'+'</td>';
}
content+='</tr></tbody></table>';
$('#here_table').append(content);
*/
//second table

$('#here_table').append('<table>');

for(k=0;k<emp.length;k++){
  $('#here_table').append('<tr>'+'Name' +'Age'+'City'+'</tr>');

  for(kk=0;kk<emp.length;kk++){
    $('#here_table').append('<td>'+emp[kk]['Name']+emp[kk]['Age']+emp[kk]['City']+'</td>');
  }
}

$('#here_table').append('</table>');


//test
let printname=Object.keys(emp[0].Name);
//console.log(printname);
var num=emp.length;
//console.log(num);

//third table
/*
$('<table><thead><tr><th>Name</th><th>Age</th><th>City</th></tr></thead><tbody></tbody></table>').insertBefore('script');
var tbody="";
for(var i=0;i<emp.length;i++){
  tbody = tbody + '<tr>'
    + '<td>' + emp[i]['Name'] + '</td>'
    + '<td>' + emp[i]['Age'] + '</td>'
    + '<td>' + emp[i]['City'] + '</td>'
    + '</tr>';
}
$('tbody').wrapInner(tbody);
*/
//print in console
/*
let data = Object.keys(emp[0]);
console.log(data);
let value = Object.values(emp[0]);
console.log(value);
*/

let columNumber=emp.length;
console.log('Colum Number is',columNumber);



function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

/*
//js way
let table = document.querySelector("table");
let data = Object.keys(emp[0]);
generateTableHead(table, data);
generateTable(table, emp);
*/
