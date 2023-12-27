const form = document.querySelector(".login-form");
const email = document.querySelector('input[name ="email"]');
const password = document.querySelector('input[name ="password"]');

const submitHandler = (e) => {
  e.preventDefault();
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please enter a valid email and password");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
};
form.addEventListener("submit", submitHandler);
