let btnGenerator = document.getElementById('btnGenerate');
let outputString = document.getElementById('outputString');
let special = document.getElementById('special');
let string_length = document.getElementById('characters');
let string_length_output = document.getElementById('string_length_output');
// * let show_pw = document.getElementById('showPW');

function make_id(length, special=true) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  if ( special ) {
    var special_characters = '!@#$%^&*()'
    var characters = characters.concat(special_characters)
  }
  console.log(characters)
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function copy_to_clipboard() {
  var copyText = document.getElementById("outputString");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
}

string_length.oninput = function() {
  string_length_output.value = string_length.value;
}

btnGenerator.onclick = function() {
  let string_length_value = string_length.value;
  let special_value = special.checked;

  let new_value = make_id(string_length_value, special_value);
  outputString.value = new_value;
  copy_to_clipboard()
};

/* show_pw.onclick = function() {
  var x = document.getElementById("outputString");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
*/
