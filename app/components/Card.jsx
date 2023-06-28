/* eslint-disable @next/next/no-img-element */
import "./Card.css"
import Link from "next/link";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function PokeCard({ url }) {
  const pokeData = await getData(url)
 /*  console.log(pokeData); */
  const pokeImage = pokeData.sprites.front_default; 
  

  return (
    <Link href={`/info/${pokeData.id}`}> 
      <section className="cardPokemon">
        <div className="img"><img src={pokeImage} alt="image"/></div>
        <h1>Name: {pokeData.name}</h1>
        <p>Type: {pokeData.types[0].type.name}</p>
        <p>Id: {pokeData.id}</p>
    </section>        
    </Link>
    
  )
}

export default PokeCard