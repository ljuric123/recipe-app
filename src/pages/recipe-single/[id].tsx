import Image from "next/image"
import styles from '@/styles/Home.module.css'




export default function Page() {

return (
      <>
      <header>
        <nav>
        <Image 
          src="/spoon_logo.jpg"
          alt=""
          width={59}
          height={53}
          />
          <a href ="/"> Home </a>
        </nav>
      </header>

      <main className={styles.main}>
        <div>
          <h1>Single Recipe</h1>
          <button >Make Api Call</button>
          <p>{}</p>
        </div>
      </main>
      </>
    )
  }
  