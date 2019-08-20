window.cipher = {
  encode: encode,
  decode: decode 
};

function encode(offset, str) {
  let msg = "";

  for (let i = 0; i < str.length; i++) {
    msg += String.fromCharCode(((str.charCodeAt(i) - 65) + offset) % 26 + 65);
  }

  return msg;
}

function decode(offset, str) {
  let msg = "";

  for (let i = 0; i < str.length; i++) {    
    msg += String.fromCharCode(((str.charCodeAt(i) + 65) - offset) % 26 + 65);
  }

  return msg;
}