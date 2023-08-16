async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const result = await response.json();
    console.log('Users:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getFavoritePokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const result = await response.json();
    console.log('Favorite Pokemon:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUsers();
getFavoritePokemon();
