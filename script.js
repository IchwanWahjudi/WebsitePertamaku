// Pilih element yg akan di modifikasi
const navbarNav = document.querySelector(".navbar-nav");
// aktivasi selector pada saat "click" #hamburger-menu
document.querySelector("#hamburger-menu").onclick = () => {
	navbarNav.classList.toggle("active");
};
// menghilangkan sidebar tanpa "click" icon #hamburger-menu
const menu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
	if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});
