function toggleMenu() {
	var burger = document.getElementById("menu-burger");
	var dropdown = document.getElementsByClassName("dropdown");

	burger.classList.toggle("is-active")

	if (dropdown[0].classList.contains("visible")) {
		console.log("HIDE")
		dropdown[0].classList.remove("visible")
	} else {
		dropdown[0].classList.add("visible")
	}
}