import "./style.css";

const form = document.querySelector("form");
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

email.addEventListener("blur", () => {
	const invalid = document.querySelector("#email-container .status-invalid");
	const valid = document.querySelector("#email-container .status-valid");

	if (email.validity.typeMismatch || email.validity.valueMissing) {
		showErrorStatus(invalid, valid);
	} else {
		showValidStatus(invalid, valid);
	}
});

country.addEventListener("blur", () => {
	const invalid = document.querySelector("#country-container .status-invalid");
	const valid = document.querySelector("#country-container .status-valid");

	if (country.validity.tooLong || country.validity.valueMissing) {
		showErrorStatus(invalid, valid);
	} else {
		showValidStatus(invalid, valid);
	}
});

// Check minlength
zipcode.addEventListener("blur", () => {
	const invalid = document.querySelector("#zip-code-container .status-invalid");
	const valid = document.querySelector("#zip-code-container .status-valid");

	if (zipcode.validity.tooLong || zipcode.validity.valueMissing) {
		showErrorStatus(invalid, valid);
	} else {
		showValidStatus(invalid, valid);
	}
});

// Check minlength
password.addEventListener("blur", () => {
	const invalid = document.querySelector("#password-container .status-invalid");
	const valid = document.querySelector("#password-container .status-valid");

	if (password.validity.valueMissing) {
		showErrorStatus(invalid, valid);
	} else {
		showValidStatus(invalid, valid);
	}
});

// Check to the same value as password
confirmPassword.addEventListener("blur", () => {
	const invalid = document.querySelector(
		"#confirm-password-container .status-invalid"
	);
	const valid = document.querySelector(
		"#confirm-password-container .status-valid"
	);
});
