function hideShowToggle(icon, items) {
  icon = document.getElementById(icon);
  items = document.getElementById(items);
  //hide condition
  if (items.style.display !== "none") {
    items.style.display = "none";
    icon.classList.remove("fi-bs-angle-up");
    icon.classList.add("fi-bs-angle-down");
  } else {
    items.style.display = "block";
    icon.classList.add("fi-bs-angle-up");
    icon.classList.remove("fi-bs-angle-down");
  }
}
