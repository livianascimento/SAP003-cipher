const encodeMsg = document.getElementById("btn_encode");
const decodeMsg = document.getElementById("btn_decode");

encodeMsg.addEventListener("click", () => {
    const msg = document.getElementById("str").value.toUpperCase();
    const offset = parseInt(document.getElementById("offset").value);
    const encodedMsg = window.cipher.encode(offset, msg);

    document.getElementById("data_output").innerHTML = `<p>Mensagem Codificada</p><p>${encodedMsg}</p>`;    
});

decodeMsg.addEventListener("click", () => {
    const msg = document.getElementById("str").value.toUpperCase();
    const offset = parseInt(document.getElementById("offset").value);
    const decodedMsg = window.cipher.decode(offset, msg);

    document.getElementById("data_output").innerHTML = `<p>Mensagem Decodificada</p><p>${decodedMsg}</p>`;
});


/*const getDataInput = () => {
    const arr = [];
    arr[0] = parseInt(document.getElementById("offset").value);
    arr[1] = document.getElementById("str").value.toUpperCase();
    
    return arr;    
};*/