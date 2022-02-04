

const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const senha2Value = senha2.value.trim();

    if(usuarioValue === '') {
		setErrorFor(usuario, 'Username cannot be blank');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(senhaValue === '') {
		setErrorFor(senha, 'Password cannot be blank');
	} else {
		setSuccessFor(senha);
	}
	
	if(senha2Value === '') {
		setErrorFor(senha2, 'Password2 cannot be blank');
	} else if(senhaValue !== senha2Value) {
		setErrorFor(senha2, 'Passwords does not match');
	} else{
		setSuccessFor(senha2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control successo';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});