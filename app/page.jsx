/* "use client" */
import Link from "next/link";
import Card from "./components/Card"

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
/*   console.log(data);
 */
  return data;
}


export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=100");
  const directData = data.results;
  /* console.log(directData); */
 /*  const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AasKM4DT5EKf0WD6rFnRZjIE2P3tb37HdOKPNAWRqy_LvF4KkohgE7F5ujSJSWxJFCs&usqp=CAU";  */

  return (
    <>
      { 
        directData.map((el, index) => (
          // eslint-disable-next-line react/jsx-key
          <Card url = {el.url}/>
        ))
      }
    </>
  );
}
