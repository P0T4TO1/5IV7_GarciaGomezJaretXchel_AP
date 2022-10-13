const key128Error = () => {
    Swal.fire({
        title: "Error",
        text: "La clave debe tener 16 caracteres o menos",
        icon: "error",
    });
};

const key192Error = () => {
    Swal.fire({
        title: "Error",
        text: "La clave debe tener 24 caracteres o menos",
        icon: "error",
    });
};

const key256Error = () => {
    Swal.fire({
        title: "Error",
        text: "La clave debe tener 32 caracteres o menos",
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