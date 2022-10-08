const encryptDES = () => {
    let key = document.getElementById("clave").value
  if(key){
    if (key.length === 8) {
      document.getElementById("txtFinal").innerHTML =
          CryptoJS.DES.encrypt(document.getElementById("mensaje").value, key).toString();
    }else{
      keyError()
    }
  }else{
    noKeyError()
  }
}


const decryptDES = () => {
  let msg = document.getElementById("mensaje").value;
  let key = document.getElementById("clave").value;
  let descifrado = "";
  if(key){
    if (key.length === 8) {
      descifrado = CryptoJS.DES.decrypt(msg, key).toString(CryptoJS.enc.Utf8);
    }else{
      keyError()
    }
  }else{
    noKeyError()
  }
  return document.getElementById("txtFinal").innerHTML = descifrado;
};


const dowloadFile = (blobContent, fileName) => {
  let reader = new FileReader();

  reader.onload = (event) => {
    let save = document.createElement("a");
    save.href = event.target.result;
    save.target = "_blank";

    save.download = fileName || "CifradoDes.txt";
    let clicEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    save.dispatchEvent(clicEvent);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  };
  reader.readAsDataURL(blobContent);
};

const generateFiles = (data) => {
  let text = [];
  text.push(data);

  return new Blob(text, { type: "text/plain" });
};


const encryptDESinFile = () => {
  let key = document.getElementById("keyFile").value
  let file = document.getElementById("textInFile").files[0];
  if(key.length === 8){
    const reader = new FileReader();
    reader.onload =  (e) => {
      const contenido = e.target.result;
      dowloadFile(generateFiles(
              CryptoJS.DES.encrypt(
                  contenido,
                  key).toString()),
          `TuArchivoCifrado.txt`)
      }
      reader.readAsText(file)
  }else{
    keyError()
  }
}

const decryptDESinFile = () => {
  let key = document.getElementById("keyFile").value;
  let file = document.getElementById("textInFile").files[0];
  if(key.length === 8){
    const reader = new FileReader();
    reader.onload =  (e) => {
      const contenido = e.target.result;
      dowloadFile(generateFiles(
              CryptoJS.DES.decrypt(
                  contenido,
                  key).toString(CryptoJS.enc.Utf8)),
          `TuArchivoDecifrado.txt`)
    }
    reader.readAsText(file)
  }else{
    keyError()
  }
}


const keyError = () => {
  Swal.fire({
    title: "Error",
    text: "La clave debe tener 8 caracteres",
    icon: "error",
  });
};


const noKeyError = () => {
  Swal.fire({
    title: "Error",
    text: "Debes de ingresar una clave",
    icon: "error"
  })
}


const fileError = () => {
  Swal.fire({
    title: "Error",
    text: "No has seleccionado ningún archivo",
    icon: "error",
  });
};
