import axios, { all } from 'axios';
import { useEffect, useState } from 'react';
import styles from '../features/Design.module.css'
import { LoadingImg } from './LoadingImg';


const getData = async () => {
    try {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    const totalPages = response.data.info.pages;

    const requests = [];
    for (let page = 1; page <= totalPages; page++) {
        const request = axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        requests.push(request);
    }
    
    const responses = await Promise.all(requests);
    const characters = responses.flatMap(response => response.data.results);
    return characters;

    } catch (error) {
      console.error("Error fetching characters:", error);
    }
};


export const RenderInfo = ({selectedValues}) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getData();
            setAllCharacters(characters)
            setLoading(false)
        };

        fetchCharacters();
    }, []);

    const filter = () => {
        let filteredCharactersCopy = [...allCharacters]
       
        if (selectedValues.gender && selectedValues.gender !== "all") {
            filteredCharactersCopy = filteredCharactersCopy.filter(
                (character) => character.gender.toLowerCase() === selectedValues.gender
            );
        }

        if(selectedValues.species && selectedValues.species !== "all"){
            filteredCharactersCopy = filteredCharactersCopy.filter(
                (character) => character.species.toLowerCase() === selectedValues.species
            );
        }

        if(selectedValues.status && selectedValues.status !== "all"){
            filteredCharactersCopy = filteredCharactersCopy.filter(
                (character) => character.status.toLowerCase() === selectedValues.status
            );
        }

        if(selectedValues.name && selectedValues.name !== "all") {
            if (selectedValues.name === "a-z"){
                filteredCharactersCopy.sort((a, b) => a.name.localeCompare(b.name));
            } else if (selectedValues.name === "z-a"){
                filteredCharactersCopy.sort((a, b) => b.name.localeCompare(a.name));
            }
        }       

       setFilteredCharacters(filteredCharactersCopy)

    }

    useEffect(() => {
        filter();
    }, [selectedValues, allCharacters])


    return (
        <div className={styles.charactersWrapper}>
            {loading ? (
                <LoadingImg />
            ) : (
                filteredCharacters.map((character) => {
                    return (
                        <div key={character.id} className={styles.imgAndName} >
                            <img src={character.image} alt={character.name}  className={styles.img} />
                        <p>{character.name}</p>
                    </div>
                    )
                })
            )}
        </div>
    )
}
