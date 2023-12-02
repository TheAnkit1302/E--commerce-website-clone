document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@admin.com" && password === "123456") {
      alert("Login successful");
    } else {
      alert("Incorrect email or password");
    }
  });
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

     alert("Message sent Succesfully");

     document.getElementById("contact-form").reset();
  });

  