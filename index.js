function toggleMenu() {
	var burger = document.getElementById("menu-burger");
	var dropdown = document.getElementById("surround-menu");

	burger.classList.toggle("is-active")

	if (dropdown.classList.contains("hide")) {
		console.log("HIDE")
		dropdown.classList.remove("hide")
	} else {
		dropdown.classList.add("hide")
	}
}