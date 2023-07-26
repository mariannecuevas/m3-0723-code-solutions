function PokemonList({ pokedex }) {
  const listItems = pokedex.map((pokemon) => <li>{pokemon.name}</li>);
  return <ul>{listItems}</ul>;
}

export default PokemonList;
