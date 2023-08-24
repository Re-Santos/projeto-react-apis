import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "../Componentes/Header/Header";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";

export const AppRouter = ({pokedex, addToPokedex, removeFromPokedex,pokemonData, setPokemonData}) => {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<PokemonsListPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    );

};

