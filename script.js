const blogEle = document.querySelector(".MainDiv");

const loadTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/Blogs");
    blogContent = await res.json();
    renderLists(blogContent);
    console.log(blogContent);
  } catch (err) {
    console.error(err);
  }
};
var renderLists = (lists) => {
  const ItemList = lists
    .map(
      (tasks) =>
        `<div class="col">
        <div class="p-3 border border-black bg-primary-subtle Blog">
            <h2>${tasks.title}</h2>
            <p>
              ${tasks.content}
            </p>
            
            <a href="BlogDetail.html?id=${tasks.id}">Read more</a>
          </div>
          </div>`
    )
    .join("");
  blogEle.innerHTML = ItemList;
};
loadTask();
