// function login() {
//   var button = document.getElementById("login-button");
//   button.value = "Logging in...";
// }

const authorization = () => {
    event.preventDefault();
    let name = document.getElementById("Name").value;
    let Email = document.getElementById("Mail").value;
    let password = document.getElementById("Password").value;
  
    if (password == 123456 && Email == "admin@user") {
      Toastify({ text: "User Login successfully",
      backgroundColor: "green"}).showToast();
      window.location.href = "home.html";
  
    } else {
      Toastify({text :"Please Enter correct information"}).showToast();
    }
  };
  