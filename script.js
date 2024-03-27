//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  function loadPreferences() {
    const fontSize = localStorage.getItem("fontSize");
    const fontColor = localStorage.getItem("fontColor");
    if (fontSize) {
      document.body.style.fontSize = fontSize + "px";
      fontSizeInput.value = fontSize;
    }
    if (fontColor) {
      document.body.style.color = fontColor;
      fontColorInput.value = fontColor;
    }
  }

  loadPreferences();

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontColor", fontColor);
    
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });
});
document.addEventListener("DOMContentLoaded", function () {
 
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  function loadPreferences() {
    const fontSize = localStorage.getItem("fontSize");
    const fontColor = localStorage.getItem("fontColor");
    if (fontSize) {
      document.body.style.fontSize = fontSize + "px";
      fontSizeInput.value = fontSize;
    }
    if (fontColor) {
      document.body.style.color = fontColor;
      fontColorInput.value = fontColor;
    }
  }

  loadPreferences();

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontColor", fontColor);

    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });
});