import React, { useEffect, useState } from 'react';


function CharacterList() {
 const [characters, setCharacters] = useState([]);


 useEffect(() => {
   const fetchCharacters = async () => {
     try {
       const response = await fetch('https://rickandmortyapi.com/api/character');
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const data = await response.json();
       setCharacters(data.results); // Assuming `results` contains an array of characters
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };


   fetchCharacters();
 }, []); // Empty dependency array means this effect runs once after the first render


 return (
   <div >
     <h2>Rick and Morty Characters</h2>
     <ul className='grilla'>
       {characters.map(character => (
         <li key={character.id}>{character.name} 
         <img src={character.image} /></li>
       ))}
     </ul>
   </div>
 );
}


export default CharacterList;
