export const goToPokemonsListPage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToDetailsPage = (navigate, pokemonName) => {
    navigate(`goToPokemonDetailPage/${pokemonName}`);
  };

  