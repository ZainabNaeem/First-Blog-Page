const detailEle = document.querySelector(".blogDetails");
const url = "http://localhost:3000/Blogs/"
async function getData () {
  
  const lists = new URLSearchParams(window.location.search);
  const parameter = Object.fromEntries(lists.entries());
    console.log(parameter.id);
    
 

var data = await fetch(url+parameter.id);
var resData = await data.json();
console.log(resData);
detailEle.innerHTML = `<h2>${resData.title}</h2> <p>${resData.content}</p>`;
  }
getData();

