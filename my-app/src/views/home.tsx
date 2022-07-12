import React, {useEffect, useState} from 'react';
import {
    Joke,
    SearchedJokes,
    CategoriesSelection,
} from '../components/init';
import { get_random_joke, get_jokes_categories, search_jokes_by_joke } from '../actions/requests';
import { singleJoke, jokeCategories } from '../interfaces/interfaces';

export default function Home() : JSX.Element{
    const [joke, setJoke] = useState<singleJoke | null>(null);
    const [categories, setCategories] = useState<jokeCategories | null>(null);
    const [currentSearchCategorie, setCurrentSearchCategorie] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [searchedJokes, setSearchedJokes] = useState<Array<singleJoke> | null>(null);
    useEffect(() => {
        get_random_joke( currentSearchCategorie ? currentSearchCategorie : undefined)
            .then((response) => {
                setJoke(response);
            }).catch((error) => {
                console.log(error);
            });
        get_jokes_categories()
            .then((response) => {
                setCategories(response);
            }).catch((error) => {
                console.log(error);
            });
    }, [currentSearchCategorie]);
    const handleJokeLookup = () => {
        console.log(searchValue);
        if (searchValue){
            search_jokes_by_joke(searchValue)
            .then((response) => {
                console.log(response);
                setSearchedJokes(Object.values(response.result));
            }).catch((error) => {
                console.log(error);
            })
        }
        setSearchValue(null);
    };
    return (
        <div className='container'>
            <Joke joke={joke} />
            <CategoriesSelection
                setCurrentSearchCategorie={setCurrentSearchCategorie}
                currentSearchCategorie={currentSearchCategorie}
                categories={categories}
            />
            <SearchedJokes
                handleJokeLookup={handleJokeLookup}
                setSearchValue={setSearchValue}
                searchedJokes={searchedJokes}
                searchValue={searchValue}
            />            
        </div>
    )
}