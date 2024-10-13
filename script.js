const form = document.getElementById("form");

const validateName = (fullName) => {
  if (fullName.length < 5) return "Name should be at least 5 characters long";
  const regex = /^[A-Z][a-z]+([-'][A-Z][a-z]+)?\s[A-Z][a-z]+([-'][A-Z][a-z]+)?$/;
  if (!regex.test(fullName))
    return "Please enter a valid name consisting of first name and last name";
};

const validateEmail = (email) => {
  const matches = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  // returns array of matches, null if no match
  if (!matches) return "Please enter a valid email";
};

const validatePhoneNumber = (phone) => {
  if (phone === "123456789")
    return "Invalid phone number! Please enter a valid 10-digit phone number";
  else if (phone.length !== 10) return "Phone number must be of 10 digits";
};

const validatePassword = (password, name) => {
  const messages = [];

  // Basic validation:
  if (password.toLowerCase() === "password") messages.push("Password cannot be 'password'");
  if (password === name && name !== "") messages.push("Password cannot be your name");
  if (password.length < 8) messages.push("Password must be at least 8 characters long");

  // Complex validation:
  const digitRegex = /\d+/g;
  const specialCharRegex = /(\$|@|!|#|\*)+/g;
  if (!digitRegex.test(password)) messages.push("Password must have at least one digit");
  if (!specialCharRegex.test(password))
    messages.push("Password must have any special character from '$', '@', '#', '*'");

  if (messages.length !== 0) return messages.join(". ");
};

const validatePasswordConfirm = (password, passwordConfirm) => {
  // Validation against passwordConfirm:
  if (password !== passwordConfirm || passwordConfirm === "")
    return "Password must be equal to password confirm";
};

const inputElements = [...document.getElementsByTagName("input")].filter(
  (el) => el.name !== "submit"
);

console.log(inputElements);
data = {};
const feedbackElements = [...document.getElementsByClassName("invalid-feedback")];
console.log(feedbackElements);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const input of inputElements) {
    data[input.name] = input.value.trim();
  }
  console.log(data);

  //   const formData = new FormData(form);
  //   for (const [name, value] of formData) {
  //     console.log(name, value);
  //   }
  //   const data = Object.fromEntries(formData);
  //   console.log(data);
  errors = {};
  errors.fullName = validateName(data.fullName);
  errors.email = validateEmail(data.email);
  errors.phoneNumber = validatePhoneNumber(data.phoneNumber);
  errors.password = validatePassword(data.password, data.fullName);
  errors.passwordConfirm = validatePasswordConfirm(data.password, data.passwordConfirm);
  console.log("Errors: ", errors);
  // If each of the funtions return undefined, then no errors were found.
  //   if (errors.every((v) => v === undefined)) alert("Validation successful! No Errors!");
  //   else {
  //     alert(errors.filter((v) => v !== undefined).join(".\n"));
  //   }
  for (const element of inputElements) {
    console.log(element);
    console.log(element.name);
    const error = errors[element.name];
    console.log(error);

    if (!error) {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
      alert("Validation Successful");
    } else {
      element.classList.remove("is-valid");
      element.classList.add("is-invalid");
      const feedbackElement = element.nextElementSibling;
      feedbackElement.textContent = error;
      console.log(feedbackElement);
    }
  }
});
