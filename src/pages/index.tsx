import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from "next/image"
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { GetData, Recipes } from "../../types"




export default function Home({data}: {data:GetData}) {

  return (
    <>
     { /*
      <main className={styles.main}>
       <div>
        <h3>Recipe No.1</h3>
        <h2>{nameOne}</h2>
        <Image 
          src={imageOne}
          alt=""
          width={200}
          height={133}
          />
        <div dangerouslySetInnerHTML={{ __html: dietsOne }}></div>
       </div>
  </main>*/}
  {data.recipes.map((recipe: Recipes) => {
    return <div key = {recipe.id}>{recipe.title}
    <Image 
          src={recipe.image}
          alt={recipe.title}
          width={200}
          height={133}
          />
    </div>
  })}
    </>
  )
}

export async function getServerSideProps(){


  const response = await fetch( "https://api.spoonacular.com/recipes/random?number=3",
  {
      method: 'GET',
      headers: {
          'x-api-key': '5d7ad697048f4018bc90cfb0439e362d',
      }
  });
  const data: GetData = await response.json();
  return{ props: { data } }
}

