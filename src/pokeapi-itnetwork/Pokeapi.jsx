import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./Pokemon";
import Card from "./Card";
import "./Pokeapi.css";

const Pokeapi = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
        let response = await getAllPokemon(initialURL);
        setLoading(false);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        console.log(response);
        await loadPokemon(response.results);
    }
    fetchData();
  }, []);

  return (
    <div id="pokeapi">
        {loading ? (
            <h1>Stránka se načítá</h1>
        ) : (
            <div>
                <div className="btn">
                    <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button>
                </div>
                <div className="grid-container">
                    {pokemonData.map((pokemon, i) => {
                        return <Card key={i} pokemon={pokemon} />;
                    })}
                </div>
                <div className="btn">
                    <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
        )}
    </div>
  );
};

export default Pokeapi;

// Class Component verze ----------------------------------

/* import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(
            result(result.data)
          );
        }
      )
  }

  render() {
    const { data } = this.state;
      return (
        <div className="container">
          <ul>
            {data.map((pokemon) => (
              <li> {pokemon.name} </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default App; */