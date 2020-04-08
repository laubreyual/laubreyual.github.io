$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

function changeIcon() {
	var navButton = document.getElementsByClassName('navbar-toggler')[0];
	var navTrigger = document.getElementById('trigger');
	if(navButton.classList.contains('collapsed')){
		navTrigger.classList.remove('fa-bars');
		navTrigger.classList.add('fa-times');
	}else {
		navTrigger.classList.remove('fa-times');
		navTrigger.classList.add('fa-bars');
	}
}