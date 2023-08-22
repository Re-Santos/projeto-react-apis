import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const usePokemonDetails = (url) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
          try {
            const response = await axios.get(url);
            setPokemonData(response.data);
          } catch (error) {
            console.error("Error fetching Pokemon Data:", error);
          }
        };
    
        fetchPokemonDetails();
      }, [url]);
    
      return pokemonData;
    };


export default usePokemonDetails
