// criar as funções do html

//document.getElementById("btn_encode").addEventListener("click", encodeMsg);
const encodeMsg = document.getElementById("btn_encode");

encodeMsg.addEventListener("click", () => {
    let msg = document.getElementById("str").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    let encodedMsg = window.cipher.encode(offset, msg);

    document.getElementById("encodedMsg").innerHTML = `Mensagem codificada: ${encodedMsg}`;
    document.getElementById("decodedMsg").innerHTML = "";

});

// function encodeMsg() {
//     let msg = document.getElementById("str").value.toUpperCase();
//     let offset = parseInt(document.getElementById("offset").value);
//     let encodedMsg = window.cipher.encode(offset, msg);

//     document.getElementById("encodedMsg").innerHTML = `Mensagem codificada: ${encodedMsg}`;
//     document.getElementById("decodedMsg").innerHTML = "";
// }

function decodeMsg() {
    let msg = document.getElementById("str").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    let decodedMsg = window.cipher.decode(offset, msg);

    document.getElementById("decodedMsg").innerHTML = `Mensagem decodificada: ${decodedMsg}`;
    document.getElementById("encodedMsg").innerHTML = "";
}