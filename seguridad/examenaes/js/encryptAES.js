const encryptAESTxt = () => {
    let aesType = parseInt($('input[name="customRadio"]:checked').val());
    let key = document.getElementById("key").value;
    if (key) {
        if (aesType === 128) {
            if (key.length <= 16) {
                dowloadFile(generateFileTxt(
                        CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString()),
                    `TuArchivoCifrado.txt`)
            } else {
                key128Error();
            }
        } else if (aesType === 192) {
            if (key.length <= 24) {
                dowloadFile(generateFileTxt(
                        CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString()),
                    `TuArchivoCifrado.txt`)
            } else {
                key192Error();
            }
        } else {
            if (key.length <= 32) {
                dowloadFile(generateFileTxt(
                        CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString()),
                    `TuArchivoCifrado.txt`)
            } else {
                key256Error();
            }
        }
    } else {
        noKeyError()
    }
}


const encryptAESdocx = () => {
    let aesType = parseInt($('input[name="customRadio"]:checked').val());
    let key = document.getElementById("key").value;
    if (key) {
        if (aesType === 128) {
            if (key.length <= 16) {
                let doc = new jsdocx.Document();
                let p = doc.addParagraph();
                p.addRun().addText(CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString());
                p.addFormat().addHAlignment().setVal('center');
                doc.generate().then((content) => {
                    saveAs(content, 'TuArchivoCifrado.docx');
                })
            } else {
                key128Error();
            }
        } else if (aesType === 192) {
            if (key.length <= 24) {
                let doc = new jsdocx.Document();
                let p = doc.addParagraph();
                p.addRun().addText(CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString());
                p.addFormat().addHAlignment().setVal('center');
                doc.generate().then((content) => {
                    saveAs(content, 'TuArchivoCifrado.docx');
                })
            } else {
                key192Error();
            }
        } else {
            if (key.length <= 32) {
                let doc = new jsdocx.Document();
                let p = doc.addParagraph();
                p.addRun().addText(CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString());
                p.addFormat().addHAlignment().setVal('center');
                doc.generate().then((content) => {
                    saveAs(content, 'TuArchivoCifrado.docx');
                })
            } else {
                key256Error();
            }
        }
    } else {
        noKeyError()
    }
}


const encryptAESpdf = () => {
    let aesType = parseInt($('input[name="customRadio"]:checked').val());
    let key = document.getElementById("key").value;
    const doc = new jsPDF();
    if (key) {
        if (aesType === 128) {
            if (key.length <= 16) {
                doc.setFontSize(14);
                const txtEncrypt = CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString();
                const splitText = doc.splitTextToSize(
                    txtEncrypt,
                    160
                );
                doc.text(splitText, 10, 50)
                doc.save("TuArchivoCifrado.pdf")
            } else {
                key128Error();
            }
        } else if (aesType === 192) {
            if (key.length <= 24) {
                doc.setFontSize(14);
                const txtEncrypt = CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString();
                const splitText = doc.splitTextToSize(
                    txtEncrypt,
                    160
                );
                doc.text(splitText, 10, 50)
                doc.save("TuArchivoCifrado.pdf")
            } else {
                key192Error();
            }
        } else {
            if (key.length <= 32) {
                doc.setFontSize(14);
                const txtEncrypt = CryptoJS.AES.encrypt(document.getElementById("plainTxt").value, key).toString();
                const splitText = doc.splitTextToSize(
                    txtEncrypt,
                    160
                );
                doc.text(splitText, 10, 50)
                doc.save("TuArchivoCifrado.pdf")
            } else {
                key256Error();
            }
        }
    } else {
        noKeyError()
    }
}

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


const generateFileTxt = (data) => {
    let text = [];
    text.push(data);

    return new Blob(text, {type: "text/plain"});
};
