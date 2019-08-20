// criar as funções do html

function encodeMsg() {
    let msg = document.getElementById("str").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    let encodedMsg = window.cipher.encode(offset, msg);

    document.getElementById("encodedMsg").innerHTML = `Mensagem codificada: ${encodedMsg}`;
    document.getElementById("decodedMsg").innerHTML = "";
}

function decodeMsg() {
    let msg = document.getElementById("str").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    let decodedMsg = window.cipher.decode(offset, msg);

    document.getElementById("decodedMsg").innerHTML = `Mensagem decodificada: ${decodedMsg}`;
    document.getElementById("encodedMsg").innerHTML = "";
}