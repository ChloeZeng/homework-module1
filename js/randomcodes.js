/* ----- RANDOM CODES ----- */
let currentCode = ''; // store the generated code globally

// Function to generate combination of characters
function generateCode() {
  var code = ''; // initialize empty
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

  // Generate character multiple times using a loop
  for (var i = 0; i < 8; i++) {
    var char = Math.floor(Math.random() * str.length);
    code += str.charAt(char);
  }

  currentCode = code; // store globally
  return code;
}

// Display generated code on page load
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(btnvalue) {
  const btn = document.getElementById("submit");
  btn.disabled = btnvalue;

  if (btnvalue === true) {
    // translucent style
    btn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    btn.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    // active style
    btn.style.backgroundColor = "rgba(73, 119, 209, 1)";
    btn.style.color = "#fff";
  }
}

// Listen to user input in code box
var codebox = document.getElementById("randomcodeInput");
if (codebox) {
  codebox.addEventListener("input", evaluateCode);
}

// Run function if user entered characters
function evaluateCode() {
  var getCode = document.getElementById("randomcodeInput").value.trim();
  var charset1 = getCode;
  var charset2 = currentCode.trim();

  // test if code entered matches the generated one
  if (charset1.length === charset2.length && charset1 === charset2) {
    disableButton(false); // enable button
  } else {
    disableButton(true); // disable if not match
  }
}

// Optional: refresh code function (keep same naming as before)
function refreshCode() {
  document.getElementById("codes").innerHTML = generateCode();
  document.getElementById("randomcodeInput").value = "";
  disableButton(true);
}

// Initialize button state
disableButton(true);
