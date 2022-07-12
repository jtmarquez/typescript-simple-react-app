import React from "react";
import { singleJoke } from "../interfaces/interfaces";

export default function SearchedJokes({
    handleJokeLookup,
    setSearchValue,
    searchValue,
    searchedJokes,
}: {
    handleJokeLookup: () => void,
    setSearchValue: (arg0: string) => void,
    searchValue: string | null,
    searchedJokes: singleJoke[] | null,
}){
    return (
        <div className='box my-5'>
                <div className='my-2'>
                    <p className='title is-5 has-text-black'>Buscar por texto:</p>
                    <div className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
                        <input className="input" type="text" placeholder="Text input" onChange={(event) => setSearchValue(event.target.value)} value={searchValue ? searchValue : undefined}/>
                        <div className='button' onClick={handleJokeLookup}>
                            <p>Buscar</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        {searchedJokes?.map((joke) => {
                            return (
                                <div className='mt-5'>
                                    <p>{joke.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    );
}