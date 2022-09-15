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
    };

    const buttons = {
        all: Array.from(document.getElementsByClassName("btn")),
        search: document.getElementById("btnSearch"),
    };

    const championInput = document.getElementById("championName");

    const processChampionTag = (championData) => {
        let championTag = "";

        const firstClass = championData.tags[0];
        const secondClass = championData.lore;

        championData.tags.forEach((champTagData) => {
            championTag += `<span class="champion-type ${champTagData}"> ${champTagData}</span>`;
        });

        if (currentClassType) {
            containers.championAbilitiesElement.classList.remove(
                currentClassType
            );
        }

        containers.championAbilitiesElement.classList.add(firstClass);
        currentClassType = firstClass;
        containers.championTypesContainer.innerHTML = championTag;
    };

    const processChampionStats = (championData) => {
        championStatsElements.hp.innerHTML = championData.stats.hp;
        championStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.hp}%, rgba(255,255,255, 0.9) ${championData.stats.hp}%); `;

        championStatsElements.mp.innerHTML = championData.stats.mp;
        championStatsElements.mp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.mp}%, rgba(255,255,255, 0.9) ${championData.stats.mp}%); `;

        championStatsElements.movespeed.innerHTML =
            championData.stats.movespeed;
        championStatsElements.movespeed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.movespeed}%, rgba(255,255,255, 0.9) ${championData.stats.movespeed}%); `;

        championStatsElements.armor.innerHTML = championData.stats.armor;
        championStatsElements.armor.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.armor}%, rgba(255,255,255, 0.9) ${championData.stats.armor}%); `;

        championStatsElements.damage.innerHTML =
            championData.stats.attackdamage;
        championStatsElements.damage.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.attackdamage}%, rgba(255,255,255, 0.9) ${championData.stats.attackdamage}%); `;

        championStatsElements.attackspeed.innerHTML =
            championData.stats.attackspeed;
        championStatsElements.attackspeed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${championData.stats.attackspeed}%, rgba(255,255,255, 0.9) ${championData.stats.attackspeed}%); `;
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
