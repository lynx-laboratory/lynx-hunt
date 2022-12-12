function setUpDarkModetoggle () {
  console.log("This was run");
  var isDarkMode = $("html").hasClass("theme-dark");
  var darkModeSwitch = $("#darkmode_toggle");

  darkModeSwitch.attr("checked", isDarkMode);
  darkModeSwitch.change(function () {
    setTheme(this.checked);
  });
}

function setTheme (isDarkMode) {
  $("html").toggleClass("theme-dark", isDarkMode);

  var style = isDarkMode ? "dark" : "light";
  var options = {
    method: "PATCH",
  };
  fetch("/preferences/style/" + style, options).catch(function (
    err
  ) {
    console.log("Error while setting theme style", err);
  });
}

$(document).ready(function () {
  setUpDarkModetoggle();
});
