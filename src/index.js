import "./style.css";

const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zip-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function showErrorStatus(invalid, valid) {
	invalid.style.visibility = "visible";
	valid.style.visibility = "hidden";
}

function showValidStatus(invalid, valid) {
	invalid.style.visibility = "hidden";
	valid.style.visibility = "visible";
}

email.addEventListener("input", () => {
	const invalid = document.querySelector("#email-container .status-invalid");
	const valid = document.querySelector("#email-container .status-valid");

	if (email.validity.typeMismatch || email.validity.valueMissing) {
		showErrorStatus(invalid, valid);
		email.setCustomValidity("Please put your email in here.");
	} else {
		showValidStatus(invalid, valid);
		email.setCustomValidity("");
	}
});

country.addEventListener("input", () => {
	const invalid = document.querySelector("#country-container .status-invalid");
	const valid = document.querySelector("#country-container .status-valid");

	if (country.validity.patternMismatch) {
		showErrorStatus(invalid, valid);
		country.setCustomValidity("Please put a valid country in here.");
	} else if (country.validity.valueMissing) {
		showErrorStatus(invalid, valid);
		country.setCustomValidity("Don't leave this empty.");
	} else {
		showValidStatus(invalid, valid);
		country.setCustomValidity("");
	}
});

zipcode.addEventListener("input", () => {
	const invalid = document.querySelector("#zip-code-container .status-invalid");
	const valid = document.querySelector("#zip-code-container .status-valid");

	if (zipcode.validity.patternMismatch) {
		showErrorStatus(invalid, valid);
		zipcode.setCustomValidity(
			"Only letters and numbers is allowed, at least 4 characters long."
		);
	} else if (zipcode.validity.valueMissing) {
		showErrorStatus(invalid, valid);
		zipcode.setCustomValidity("Don't leave this empty.");
	} else {
		showValidStatus(invalid, valid);
		zipcode.setCustomValidity("");
	}
});

password.addEventListener("input", () => {
	const invalid = document.querySelector("#password-container .status-invalid");
	const valid = document.querySelector("#password-container .status-valid");

	if (password.validity.patternMismatch) {
		showErrorStatus(invalid, valid);
		password.setCustomValidity(
			"Password need to be at least 8 characters long."
		);
	} else if (password.validity.valueMissing) {
		showErrorStatus(invalid, valid);
		password.setCustomValidity("You need to create your password.");
	} else {
		showValidStatus(invalid, valid);
		password.setCustomValidity("");
	}
});

confirmPassword.addEventListener("input", () => {
	const invalid = document.querySelector(
		"#confirm-password-container .status-invalid"
	);
	const valid = document.querySelector(
		"#confirm-password-container .status-valid"
	);

	if (confirmPassword.value !== password.value) {
		showErrorStatus(invalid, valid);
		confirmPassword.setCustomValidity(
			"This need to be the same as password above."
		);
	} else {
		showValidStatus(invalid, valid);
		confirmPassword.setCustomValidity("");
	}
});
