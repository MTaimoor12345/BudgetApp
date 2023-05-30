


const totalBudget = document.getElementById("totalAmount");
// console.log(totalBudget.value);
const btn1 = document.getElementById("btn");
const date = document.getElementById("date");
// console.log(date.value)
const exp = document.getElementById("exp");
const expAmt = document.getElementById("expAmt");
const display = document.getElementById("disply");
const inner = document.getElementById("inner");
const tr1 = document.getElementById("tr1");
const tr = document.getElementById("tr");


let test2 = null;

let a = [0];






let objExp = localStorage.getItem("expList");
let b = objExp ? JSON.parse(objExp) : [];

// totalExpAmt();
displayExp();
showSec2();



// function totalExpAmt(){
//   let totalBuget = 0;

//   b.forEach(function (amt) {
//     totalBuget += +amt.amt;
//   });
  
//   // console.log(totalBuget);

//    tr1.innerText = totalBuget;


// }

function restiction(){
if (date.value == "" || exp.value === "" || expAmt.value === "") {
  alert("Enter All Expense Value");
  
} else {
  btn2()
}
 
}
// 



function btn2(){

  let aa = date.value;
  let ab = exp.value;
  let ac = expAmt.value;
if(test2 !== null){

  b.splice(test2 ,1 ,{
    date1 : aa, exp:ab ,amt :ac,
   });
   saveExp(b);
   test2 = null;
}
else{
  b.push({
    date1 : aa, exp:ab ,amt :ac,
   });
   saveExp(b)
}
 
  


}
function saveExp(b){
 let str = JSON.stringify(b);
 localStorage.setItem("expList",str);
 displayExp();

  
}


function displayExp(){
  let totalBuget = 0;
let test = "";
b.forEach(function(val,i) {
  test +=  ` <tr>
    <td>${i+1}</td>
      <td>${val.date1}</td>
      <td>${val.exp}</td>
     <td>${val.amt}</td>
     <td><button class="btn btn-sm col2 bg1" onclick="updateExp(${i})">Update</button></td>
     <td><button class="btn btn-sm col2 bg1" onclick="deletExp(${i})">Delet</button></td>  
  
  
    
   </tr>`;
   totalBuget += +val.amt;

   
});
tr1.innerText = +totalBuget;
  
  display.innerHTML = test;
  


}
function updateExp(id){
// alert(id)
test2 = id;

date.value = b[id].date1;
exp.value = b[id].exp;
expAmt.value = b[id].amt;
inner.innerText = "Save Changes";
  
}
function deletExp(id){
  // totalExpAmt();
// alert(id);
b.splice(id,1);

saveExp(b);
sec3();
// displayExp();


  
}


function sec2(){
  if (totalBudget.value == "") {
    alert("Please Set Budget Amount");
    
  }
  else{
// a.push(totalBudget.value);
a[0]= +totalBudget.value;
//  alert(a);
//  console.log(a);
totalBudget.value = "";
saveSec2(a);
  }
  

}


function saveSec2(a){

  let str =JSON.stringify(a);
  
  localStorage.setItem("totalbuget", str);

  showSec2();

}

function showSec2(){

  let show = localStorage.getItem("totalbuget");
  let c = show ? JSON.parse(show) : [];

  // console.log(c);

tr.innerText = +c;
sec3();


}


function sec3(){
  let a = tr.innerText;

  let b = tr1.innerText;

  // console.log(+a - +b);
  let c = document.getElementById("tr2");

  c.innerText =+a - +b;

}
sec3();


