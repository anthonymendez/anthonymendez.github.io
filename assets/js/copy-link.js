const serverLink = document.getElementById("server-link");
const tooltip = serverLink.querySelector("span");
serverLink.addEventListener("click", function () {
  const textToCopy = "mc.anthonymendez.dev";
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      var origText = tooltip.textContent;
      tooltip.innerHTML = "Copied mc.anthonymendez.dev!";
      setTimeout(() => {
        tooltip.innerHTML = origText;
      }, 2000);
    })
    .catch(function (err) {
      tooltip.innerHTML = "Could not copy text: " + err;
    });
});
