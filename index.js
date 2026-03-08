//console.log(`Hello World`);
//window.alert(`This is an aleart box `);

// taking input by user
/*let username;
document.getElementById(`btnid`).onclick = function(){
    username = document.getElementById(`textid`).value;
    console.log(username);
    document.getElementById('h1id').textContent = `Welcome ${username}`;
 
}*/

// type conversion changing data type
//let age=window.prompt(`Enter your age`);
//age = Number(age);
//console.log(age,typeof age);

const countlabel = document.getElementById(`countlabel`);
const increasebtn = document.getElementById(`increasebtn`);
const decreasebtn = document.getElementById(`decreasebtn`);
const resetbtn = document.getElementById(`resetbtn`);
let count = 0;
increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count = 0;
    countlabel.textContent=count;
}
