const data1 = document.querySelector("form");
const url = "http://localhost:3000/Blogs";

data1.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  const mydata = Object.fromEntries( new FormData(event.target));

 fetch(url, {
  method: "POST",
  
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(mydata)
})  
  .then((response) => {
    window.location.href='http://127.0.0.1:3000/index.html'
})
});