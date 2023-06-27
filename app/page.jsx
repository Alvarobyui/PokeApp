/* "use client" */
import Card from "./components/Card"

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data;
}


export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=5");
  const directData = data.results;
  console.log(directData);
  
  return (
    <>
    { 
      directData.map(el => (
        // eslint-disable-next-line react/jsx-key
        <Card url = {el.url}/>
      ))
    }
    </>
  );
}
