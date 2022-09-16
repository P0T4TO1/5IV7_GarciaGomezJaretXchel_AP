const lolApiUrl = "./js/champion/";

const champsAPI = () => {
    const championStatsElements = {
        hp: document.getElementById("championStatHp"),
        mp: document.getElementById("championStatMana"),
        movespeed: document.getElementById("championStatMovementSpeed"),
        armor: document.getElementById("championStatArmor"),
        damage: document.getElementById("championStatDamage"),
        attackspeed: document.getElementById("championStatAttackSpeed"),
    };

    let currentClassType = null;

    const imageTemplate =
        "<img src='{imgSrc}' alt='Champdisplay' style='height: 100%; object-fit: contain;' class='card-img-top w-100 d-block fit-cover'>";

    const images = {
        imgChampionNotFound: "./imgs/pingMissing.gif",
        imgLoading: "./imgs/loading.gif",
    };

    const containers = {
        imageContainer: document.getElementById("champdisplay-container"),
        championTypesContainer: document.getElementById("championType"),
        championNameElement: document.getElementById("championNameResult"),
        championIdElement: document.getElementById("championId"),
        championTitleElement : document.getElementById("championNickname"),
        championLoreElement : document.getElementById("championLore"),
        championAbilitiesElement: document.getElementById("championAbilities"),
        cahmpionNicknameElement : document.getElementById("championNickname"),
        tagImageElement : document.getElementById("typeImgContainer"),
    };

    const buttons = {
        all: Array.from(document.getElementsByClassName("btn")),
        search: document.getElementById("btnSearch"),
    };

    const championInput = document.getElementById("championName");

    const processChampionTag = (championData) => {
        let championTag = "";
        let tagImage = "";

        const firstClass = championData.tags[0];

            //championTag += `<span class="champion-type ${champTagData}"> ${champTagData}</span>`;
            if(championData.tags[0] == "Fighter"){
                tagImage += `<img class="tag-img" src="./imgs/fighter.png">`
                championTag += `<span class="champion-type "> Peleador </span>`;
            }if(championData.tags[0] == "Support"){
                tagImage += `<img class="tag-img" src="./imgs/support.png">`
                championTag += `<span class="champion-type "> Soporte </span>`;
            }if(championData.tags[0] == "Mage"){
                tagImage += `<img class="tag-img" src="./imgs/mage.png">`
                championTag += `<span class="champion-type "> Mago </span>`;
            }if(championData.tags[0] == "Marksman"){
                tagImage += `<img class="tag-img" src="./imgs/tirador.png">`
                championTag += `<span class="champion-type "> Tirador </span>`;
            }if(championData.tags[0] == "Assassin"){
                tagImage += `<img class="tag-img" src="./imgs/assasin.png">`
                championTag += `<span class="champion-type "> Asesino </span>`;
            }if(championData.tags[0] == "Tank"){
                tagImage += `<img class="tag-img" src="./imgs/tank.png">`
                championTag += `<span class="champion-type "> Tanque </span>`;
            };

        if (currentClassType) {
            containers.championAbilitiesElement.classList.remove(
                currentClassType
            );
        }

        containers.championAbilitiesElement.classList.add(firstClass);
        currentClassType = firstClass;
        containers.championTypesContainer.innerHTML = championTag;
        containers.tagImageElement.innerHTML = tagImage;
        
    };

    const processChampionStats = (championData) => {
        championStatsElements.hp.innerHTML = championData.stats.hp;
        championStatsElements.hp.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.hp}%, rgba(0,0,0,1) ${championData.stats.hp}%); `;

        championStatsElements.mp.innerHTML = championData.stats.mp;
        championStatsElements.mp.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.mp}%, rgba(0,0,0,1) ${championData.stats.mp}%); `;

        championStatsElements.movespeed.innerHTML =
            championData.stats.movespeed;
        championStatsElements.movespeed.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.movespeed}%, rgba(0,0,0,1) ${championData.stats.movespeed}%); `;

        championStatsElements.armor.innerHTML = championData.stats.armor;
        championStatsElements.armor.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.armor}%, rgba(0,0,0,1) ${championData.stats.armor}%); `;

        championStatsElements.damage.innerHTML =
            championData.stats.attackdamage;
        championStatsElements.damage.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.attackdamage}%, rgba(0,0,0,1) ${championData.stats.attackdamage}%); `;

        championStatsElements.attackspeed.innerHTML =
            championData.stats.attackspeed;
        championStatsElements.attackspeed.style = `background: linear-gradient(0deg, #2196f3 ${championData.stats.attackspeed}%, rgba(0,0,0,1) ${championData.stats.attackspeed}%); `;
    };

    const processChampionAbilities = (championData) => {
        let championAbilitiesContent = "";
        championData.spells?.forEach((championAbility) => {
            championAbilitiesContent += `<li>${championAbility.id}: ${championAbility.name}</li>`;
        });
        containers.championAbilitiesElement.innerHTML = championAbilitiesContent;
    };

    const setLoading = () => {
        containers.imageContainer.innerHTML = imageTemplate.replace(
            "{imgSrc}",
            images.imgLoading
        );
        buttons.all.forEach((button) => (button.disabled = true));
    };

    const setLoadingComplete = () => {
        buttons.all.forEach((button) => checkDisabled(button));
    };

    const getChampionData = async (championName) =>
        fetch(`${lolApiUrl}${championName}.json`)
            .then((res) => res.json())
            .catch((error) => ({ requestFailed: true }));

    const checkDisabled = (button) => {
        button.disabled =
            button.id === "btnDown" && containers.championIdElement.value <= 1;
    };

    const setChampionData = async (championName) => {
        if (championName) {
            setLoading();

            const championData = await getChampionData(
                typeof championName === typeof "" ? championName : championName
            );
            if (championData.requestFailed) {
                containers.imageContainer.innerHTML = imageTemplate.replace(
                    "{imgSrc}",
                    images.imgChampionNotFound
                );
            } else {
                containers.imageContainer.innerHTML = `
                ${imageTemplate.replace("{imgSrc}", championData.image.full)}
                `;
                containers.championNameElement.innerHTML = championData.name.toUpperCase();
                containers.championIdElement.value = championData.id;
                containers.championLoreElement.innerHTML = championData.lore;
                containers.cahmpionNicknameElement.innerHTML = championData.title.toUpperCase();

                processChampionTag(championData);
                processChampionStats(championData);
                processChampionAbilities(championData);
            }

            setLoadingComplete();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Ingresa el nombre de un campeón primero",
                icon: "error",
                confirmButtonText: "Aceptar.",
            });
        }
    };

    const triggers = () => {
        buttons.search.onclick = () => setChampionData(championInput.value);

        championInput.onkeyup = (event) => {
            event.preventDefault();
            if (event.key === "Enter") {
                setChampionData(championInput.value);
            }
        };

    };
    setLoadingComplete();
    triggers();
};

window.onload = champsAPI;
