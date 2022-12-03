function setUpDarkModetoggle () {
  console.log("This was run");
  var isDarkMode = $("html").hasClass("theme-dark");
  var darkModeSwitch = $("#darkmode_toggle");

  darkModeSwitch.attr("checked", isDarkMode);
  darkModeSwitch.change(function () {
    setEThemeStyle(this.checked);
  });
}

function setEThemeStyle (isDarkMode) {
  $("html").toggleClass("theme-dark", isDarkMode);

  var ethemeStyle = isDarkMode ? "dark" : "light";
  var options = {
    method: "POST",
  };
  fetch("/preferences?simple_style=" + ethemeStyle, options).catch(function (
    err
  ) {
    console.log("Error while setting etheme style", err);
  });
}

$(document).ready(function () {
  setUpDarkModetoggle();
});
