const Storage = () => {
    class StorageTodoAppHelper {
        constructor(storageName, initialValue) {
            let currentStorage = localStorage.getItem(storageName);
            if (!currentStorage) {
                localStorage.setItem(storageName, JSON.stringify(initialValue));
                currentStorage = initialValue;
            } else {
                currentStorage = JSON.parse(currentStorage);
            }
            this._storageName = storageName;
            this._currentValues = currentStorage;
        }

        addItem(newItem) {
            //cuando se agreaga un valor lo cargamos haciendo un resapldo en el storage
            this._currentValues.push(newItem);
            localStorage.setItem(
                this._storageName,
                JSON.stringify(this._currentValues)
            );
        }

        getItem(findFunction) {
            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem) {
            //cuando se actulizaun valor loo actulizamos a los valores ya cargados haciendo un storage
            const itemIndex = this._currentValues.findIndex(findFunction);
            this._currentValues[itemIndex] = {
                ...this._currentValues[itemIndex],
                ...newItem,
            };
            localStorage.setItem(
                this._storageName,
                JSON.stringify(this._currentValues)
            );
        }

        getItem() {
            return this._currentValues;
        }

        deleteItem(findFunction) {
            this._currentValues.splice(
                this._currentValues.findIndex(findFunction),
                1
            );
            localStorage.setItem(
                this._storageName,
                JSON.stringify(this._currentValues)
            );
        }
    }

    const loadListItemTemplate = () => {
        const templateDomItem = document.getElementById("listItemTemplate");
        const template = templateDomItem.innerHTML.trim();

        templateDomItem.remove();
        return template;
    };

    //cargamos los elementos del dom
    const DOMElemets = {
        taskName: document.getElementById("txtTaskName"),
        addButton: document.getElementById("btnAddTask"),
        taskList: document.getElementById("btnAddTask"),
        changeWallpaperButton: document.getElementById("btnChangeWallpaper"),
        editUser: document.getElementById("editUser"),
    };

    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("Storage", []);

    const toogleTask = (domItem) => {
        if (domItem) {
            storage.updateItem((item) => item.id === +domItem.id, {
                completed: !domItem.classList.contains("completed"),
            });
        }
        if (!domItem.classList.contains("completed")) {
            domItem.classList.add("completed");
        } else {
            domItem.classList.remove("completed");
        }
    };

    const deleteTask = (domItem) => {
        if (domItem) {
            storage.deleteItem((item) => item.id === +domItem.id);
        }
        domItem.parentElement.remove();
    };

    const createDOMTaskElement = (task) => {
        const template = document.getElementById("li");
        template.innerHTML = listItemTemplate
            .replace("{id}", task.id)
            .replace("{template}", taks.value)
            .replace("{completed}", task.completed ? "completed" : "");

        const ourContent = template.firstChild;
        ourContent = childNotes.forEach((child) => {
            if (child.classList.contains("completed")) {
                child.onclick = () => toogleTask(ourContent);
            }
            if (child.classList.contains("delete")) {
                child.onclick = () => deleteTask(ourContent);
            }
        });

        DOMElemets.taskList.append(template);
    };

    const renderTask = () => {
        DOMElemets.taskList.innerHTML = storage.getItem()
            ? ""
            : "<li>No hay tareas aun</li>";

        storage.getItem().forEach((task) => createDOMTaskElement(task));

        storage.getItem().forEach((task) => createDOMTaskElement(task));
    };

    const addTask = () => {
        if (DOMElemets.taskName.value) {
            const newTask = {
                id: Date.now,
                value: DOMElemets.taskName.value,
                completed: false,
            };
            storage.addItem(newTask);
            DOMElemets.taskName.value = "";
            createDOMTaskElement(newTask);
        }
    };

    const requestUser = async () => {
        const { value: userName } = await Swal.fire({
            input: "text",
            inputLabel: "Introduce tu nombre",
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputValidator: (value) => {
                if (!value.trim()) {
                    return "Introduce tu nombre!";
                }
            },
            inputPlaceholder: "Introduce tu nombre",
        });
        if (userName) {
            localStorage.setItem("userName", userName);
            document.getElementById(
                "title"
            ).innerHTML = `Bienvenido ${userName}!`;
        }
    };
};
