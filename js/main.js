const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select Tab Items
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");
  //Grab Contents Item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add Show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
