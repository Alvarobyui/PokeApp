import React from 'react'
import styles from "./Card.module.css"

async function getData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function PokeCard({ url }) {
  const pokeData = await getData(url)
  console.log(pokeData);

  return (
    <section className={styles.container}>
      <div>
        <h1>{pokeData.name}</h1>
        <h2>{pokeData.types[0].type.name}</h2>
      </div>
       
      
    </section>
  )
}

export default PokeCard