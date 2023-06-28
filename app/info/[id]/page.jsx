/* eslint-disable @next/next/no-img-element */
import React from 'react'

async function getData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}


export default async function page({params}) {
  const dataId = await getData(params.id);

  return (
    <div>
      <img src={dataId.sprites.front_default} alt="image" />
      <h1>Name: {dataId.name}</h1>
      <p>Experience {dataId.base_experience}</p>
      
    </div>
  )
}
