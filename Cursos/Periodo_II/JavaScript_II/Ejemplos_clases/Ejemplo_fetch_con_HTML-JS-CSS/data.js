export async function getCharacter(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();

    // Obtener información del primer episodio
    const firstEpisodeUrl = data.episode[0];
    const episodeResponse = await fetch(firstEpisodeUrl);
    const episodeData = await episodeResponse.json();

    return {
      ...data,
      firstEpisode: {
        id: episodeData.id,
        name: episodeData.name,
        episode: episodeData.episode,
        airDate: episodeData.air_date,
        characters: episodeData.characters.length,
      },
    };
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
}

export async function getEpisode(episodeId) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching episode data:", error);
    throw error;
  }
}
