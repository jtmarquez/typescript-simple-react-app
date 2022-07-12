import React from "react";
import { jokeCategories } from "../interfaces/interfaces";

export default function CategoriesSelection({
    setCurrentSearchCategorie,
    currentSearchCategorie,
    categories,
}: {
    setCurrentSearchCategorie: (arg0: string | null) => void,
    currentSearchCategorie: string | null,
    categories: jokeCategories | null,
}){
    return (
        <div className='box my-5'>
            <div className='my-2'>
                <p className='title is-5 has-text-black'>Buscar por categoría:</p>
                <div className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
                    <p className={`button m-2 ${!currentSearchCategorie && "is-danger" }`} onClick={() => setCurrentSearchCategorie(null)}>None</p>
                    {categories?.map((categorie) => <p className={`button m-2 ${categorie === currentSearchCategorie && "is-danger" }`} onClick={() => setCurrentSearchCategorie(categorie)}>{categorie}</p>)}
                </div>
            </div>
        </div>
    );
}