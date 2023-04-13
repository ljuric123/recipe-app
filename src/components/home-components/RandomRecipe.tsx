import Head from 'next/head'
import style from '@/styles/RandomRecipe.module.css'
import Image from "next/image"
import Link from 'next/link';
import { GetData, Recipes } from "types"

export default function RandomRecipe({data}: {data: GetData}) {

    return (
    <>
        <div className={style["top-flex-container"]}>
            {data.recipes.map((recipe: Recipes) => { 

                    return (
                    <div className={style["bottom-flex-container"]} key = {recipe.id} >
                        <Image 
                            src={recipe.image}
                            alt={recipe.title}
                            width={200}
                            height={133}
                        />
                        <div className={style["flex-item-text"]}>
                            <h3 className={style["recipe-title"]}>{recipe.title}</h3>
                            {/* <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>  */}
                            <p>Ready in: {recipe.readyInMinutes} min</p>
                            <p>Number of servings: {recipe.servings}</p>
                        </div>
                    </div>)
                   })}
            <div>
             {/*<div ></div>*/}
            </div>
        </div>
    </>
    );
}

  
