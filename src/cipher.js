window.cipher = {
  encode: encode,
  decode: decode 
};

function encode(offset, str) {
  let msg = "";

  /*for (let i = 0; i < str.length; i++) {
    msg += String.fromCharCode(((str.charCodeAt(i) - 65) + offset) % 26 + 65);
  }*/
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      msg += String.fromCharCode(((str.charCodeAt(i) - 97) + offset) % 26 + 97);
    }
    else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      msg += String.fromCharCode(((str.charCodeAt(i) - 65) + offset) % 26 + 65);
    }
    else {
      msg += str[i];
    }
  }

  return msg;
}

function decode(offset, str) {
  let msg = "";

  for (let i = 0; i < str.length; i++) {    
    msg += String.fromCharCode(((str.charCodeAt(i) + 65) - offset) % 26 + 65);
  }
  /*for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      msg += String.fromCharCode(((str.charCodeAt(i) + offset) - 65) % 26 + 65);
    }
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      msg += String.fromCharCode(((str.charCodeAt(i) + offset) - 95) % 26 + 95);
    }
    else {
      msg += str[i];
    }
  }*/

  return msg;
}