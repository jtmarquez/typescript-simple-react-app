import React from "react";
import { singleJoke } from "../interfaces/interfaces";

export default function Joke({joke}: { joke: singleJoke | null}){
    return (
        <div className='box my-5'>
            <div className='my-2'>
                <p className='title is-5 has-text-black'>Broma:</p>
                <p>{joke?.value}</p>
            </div>
            <div className='mt-5'>
                <p className='title is-5 has-text-black'>Categorías:</p>
                <p>{joke?.categories.join(', ')}</p>
            </div>
        </div>
    );
}