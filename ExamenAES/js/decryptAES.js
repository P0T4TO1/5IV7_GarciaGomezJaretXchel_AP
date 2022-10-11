
const dencryptAES = () => {
    let key = document.getElementById("key").value;
    let aesType = parseInt($('input[name="customRadio"]:checked').val());
    let file = document.getElementById("txtFile").files[0];
    if(key){

        if(file.type === "text/plain"){
            if (aesType === 128){
                if(key.length <= 16){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsText(file)
                }else{
                    key128Error();
                }
            }else if( aesType === 192){
                if(key.length <= 24){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsText(file)
                }else{
                    key192Error();
                }
            }else{
                if(key.length <= 32){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsText(file)
                }else{
                    key256Error();
                }
            }


        }else if(file.type === "application/pdf"){
            if (aesType === 128){
                if(key.length <= 16){
                    let doc = new jsPDF (file.name);
                    let content = doc.output ();
                    console.log(content)
                }else{
                    key128Error();
                }
            }else if( aesType === 192){
                if(key.length <= 24){
                    let doc = new jsPDF (file.name);
                    let content = doc.output ();
                    console.log(content)
                }else{
                    key192Error();
                }
            }else{
                if(key.length <= 32){
                    let doc = new jsPDF (file.name);
                    let content = doc.output ();
                    console.log(content)
                }else{
                    key256Error();
                }
            }


        }else {
            if (aesType === 128){
                if(key.length <= 16){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsBinaryString(file)
                }else{
                    key128Error();
                }
            }else if( aesType === 192){
                if(key.length <= 24){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsBinaryString(file)
                }else{
                    key192Error();
                }
            }else{
                if(key.length <= 32){
                    const reader = new FileReader();
                    reader.onload =  (e) => {
                        const contenido = e.target.result;
                        const dec = CryptoJS.AES.decrypt(contenido, key).toString(CryptoJS.enc.Utf8)
                        mostrarContenido(dec)
                    }
                    reader.readAsBinaryString(file)
                }else{
                    key256Error();
                }
            }
        }
    }else {
        noKeyError()
    }
}


function mostrarContenido(contenido) {
    const elemento = document.getElementById('txtDescifrado');
    elemento.innerHTML = contenido;
}