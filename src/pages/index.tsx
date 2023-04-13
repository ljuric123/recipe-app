import style from '@/styles/Home.module.css'
import RandomRecipe from '@/components/home-components/RandomRecipe'
import { GetData, Recipes } from "types"



export default function Home({data}: {data: GetData}) {

  return (
    <>
      <div className={style["top-left-container"]}>
        <RandomRecipe data = {data} ></RandomRecipe>
      </div>
      <main className={style.main}>
      </main>
    </>
  )
}




export async function getServerSideProps(){

  const response = await fetch( "https://api.spoonacular.com/recipes/random?number=2",
  {
      method: 'GET',
      headers: {
          'x-api-key': '5d7ad697048f4018bc90cfb0439e362d',
      }
  });
  const data: GetData = await response.json();
  return{ props: { data } }
}
