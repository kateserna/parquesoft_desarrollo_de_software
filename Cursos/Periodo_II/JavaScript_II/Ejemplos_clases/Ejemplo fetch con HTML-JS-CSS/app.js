import { getCharacter, getEpisode } from "./data.js";

const characterCardContainer = document.getElementById(
  "character-card-container"
);
const characterInput = document.getElementById("character-input");

characterInput.addEventListener("change", async () => {
  const characterId = characterInput.value.trim();

  // Validar si el valor ingresado es un número válido
  if (isNaN(characterId) || characterId === "") {
    renderCharacterCard(null); // No mostrar tarjeta
    hideEpisodeCard(); // Ocultar la tarjeta del episodio
    alert("Ingresa un id válido");
    characterInput.value = "";
    return; //finaliza la función
  }

  try {
    const characterData = await getCharacter(characterId);
    renderCharacterCard(characterData);
  } catch (error) {
    console.error("Error al pedir los datos:", error);
    renderCharacterCard(null); // No mostrar tarjeta
    hideEpisodeCard(); // Ocultar la tarjeta del episodio
  }
});

function renderCharacterCard(characterData) {
  if (!characterData) {
    characterCardContainer.innerHTML = "";
    return;
  }
  const { name, image, species, gender, status, location, firstEpisode } =
    characterData;

  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const characterImage = document.createElement("img");
  characterImage.src = image;
  characterImage.alt = name;

  const characterName = document.createElement("h2");
  characterName.textContent = name;

  const characterSpecies = document.createElement("p");
  characterSpecies.textContent = `Especie: ${species}`;

  const characterGender = document.createElement("p");
  characterGender.textContent = `Género: ${gender}`;

  const characterStatus = document.createElement("p");
  characterStatus.textContent = `Estado: ${status}`;

  const characterLocation = document.createElement("p");
  characterLocation.textContent = `Ubicación: ${location.name}`;

  characterCard.appendChild(characterImage);
  characterCard.appendChild(characterName);
  characterCard.appendChild(characterSpecies);
  characterCard.appendChild(characterGender);
  characterCard.appendChild(characterStatus);
  characterCard.appendChild(characterLocation);

  characterCardContainer.appendChild(characterCard);

  const firstEpisodeLink = document.createElement("a");
  firstEpisodeLink.href = "#";
  firstEpisodeLink.textContent = `${firstEpisode.name} (${firstEpisode.episode})`;
  firstEpisodeLink.addEventListener("click", async (e) => {
    e.preventDefault(); // Evitar que el enlace se desplace

    const episodeData = await getEpisode(firstEpisode.id);

    if (episodeCardContainer.style.display === "none") {
      renderEpisodeCard(episodeData);
    } else {
      hideEpisodeCard();
    }
  });

  const firstEpisodeContainer = document.createElement("div");
  firstEpisodeContainer.classList.add("episode-details");
  const firstEpisodeTitle = document.createElement("h3");
  firstEpisodeTitle.textContent = "Primer Episodio";
  firstEpisodeContainer.appendChild(firstEpisodeTitle);
  firstEpisodeContainer.appendChild(firstEpisodeLink);

  characterCard.appendChild(firstEpisodeContainer);

  characterCardContainer.appendChild(characterCard);
}

const episodeCardContainer = document.getElementById("episode-card-container");

function renderEpisodeCard(episodeData) {
  const { name, episode, air_date, characters } = episodeData;

  const episodeCard = document.createElement("div");
  episodeCard.classList.add("episode-card");

  const episodeName = document.createElement("h3");
  episodeName.textContent = name;

  const episodeNumber = document.createElement("p");
  episodeNumber.textContent = `Episode: ${episode}`;

  const episodeAirDate = document.createElement("p");
  episodeAirDate.textContent = `Air Date: ${air_date}`;

  const episodeCharacters = document.createElement("p");
  episodeCharacters.textContent = `Number of Characters: ${characters.length}`;

  episodeCard.appendChild(episodeName);
  episodeCard.appendChild(episodeNumber);
  episodeCard.appendChild(episodeAirDate);
  episodeCard.appendChild(episodeCharacters);

  episodeCardContainer.innerHTML = ""; // Limpiar el contenido anterior
  episodeCardContainer.appendChild(episodeCard);
  episodeCardContainer.style.display = "block"; // Mostrar la tarjeta del episodio
}

function hideEpisodeCard() {
  episodeCardContainer.innerHTML = ""; // Limpiar el contenido
  episodeCardContainer.style.display = "none"; // Ocultar la tarjeta del episodio
}

characterInput.addEventListener("input", () => {
  renderCharacterCard(null); // No mostrar tarjeta
  hideEpisodeCard(); // Ocultar la tarjeta del episodio
});
