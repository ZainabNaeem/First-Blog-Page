const detailEle = document.querySelector(".blogDetails");
const url = "http://localhost:3000/Blogs/"
async function getData () {
  
  const lists = new URLSearchParams(window.location.search);
  const parameter = Object.fromEntries(lists.entries());
    console.log(parameter.id);
    
 

var data = await fetch(url+parameter.id);
var resData = await data.json();
console.log(resData);
detailEle.innerHTML = `<h2 class="mt-5 lh-lg">${resData.title}</h2> <p class="lh-lg justify-text-start">${resData.content}</p> `;
  }
getData();
const del = document.querySelector("button")
console.log(del);
 del.addEventListener('click', (event)=>{
  const list = new URLSearchParams(window.location.search);
  const paramete = Object.fromEntries(list.entries());
    console.log(paramete.id);
  
  
 fetch(url + paramete.id, {
  method: "DELETE",
  
  
})  
  .then(response => response.json())
  .then((response) => {
    window.location.href='http://127.0.0.1:3000/index.html'
})

});

