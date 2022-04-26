var emailField1 = document.getElementById("email1");
var emailField2 = document.getElementById("email2");

emailField1.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    SubForm1();
  }
});
emailField2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    SubForm2();
  }
});
function SubForm1() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/QM07OY5HcwYyCLdR/",
    type: "post",
    data: $("#betaForm1").serializeArray(),
    success: function () {
      alert("Data recorded :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
  emailField1.value = "";
  return false;
}
function SubForm2() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/QM07OY5HcwYyCLdR/",
    type: "post",
    data: $("#betaForm2").serializeArray(),
    success: function () {
      alert("Data recorded :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
  emailField2.value = "";
  return false;
}
