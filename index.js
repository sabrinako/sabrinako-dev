function toggleMenu() {
	var burger = document.getElementById("menu-burger");
	var box = document.getElementById("burger-box");
	var dropdown = document.getElementById("surround-menu");
	if (burger.classList.contains("is-active")) {
		burger.classList.remove("is-active")
		dropdown.style.display = "none"
	} else {
		burger.classList.add("is-active")
		dropdown.style.display = "flex"
		box.style.justifyContent = "flex-end"
	}
}