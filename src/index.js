const encodeMsg = document.getElementById("btn_encode");
const decodeMsg = document.getElementById("btn_decode");

encodeMsg.addEventListener("click", () => {
  const msg = document.getElementById("str").value;
  const offset = parseInt(document.getElementById("offset").value);
  const encodedMsg = window.cipher.encode(offset, msg);

  document.getElementById("data_output").innerHTML = `<p>Mensagem Codificada</p><p>${encodedMsg}</p>`;    
});

decodeMsg.addEventListener("click", () => {
  const msg = document.getElementById("str").value;
  const offset = parseInt(document.getElementById("offset").value);
  const decodedMsg = window.cipher.decode(offset, msg);

  document.getElementById("data_output").innerHTML = `<p>Mensagem Decodificada</p><p>${decodedMsg}</p>`;
});