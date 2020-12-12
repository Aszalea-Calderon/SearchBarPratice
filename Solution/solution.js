//Select Dom
const searchInput = document.querySelector(".search-input");

//Add Event Listener
searchInput.addEventListener("input", passString);

//Event Handler
function passingString(e) {
  const input = e.target.value;

  if (input.length > 0) {
    searchData(input).then((data) => generateListItems(data));
  } else {
    generateListItems([]);
  }
}

function generateListItems(data) {
  const ul = document.querySelector(".results");

  //clear here if its needed

  data.map((elm) => {
    const li = document.createElement("li");
    li.innerHTML = elm.title;
    ul.appendChild(li);
  });
}
