import React from 'react'
import sprites from '../assets/sprites.png'
import './styles/PokeCell.css'

const PokeCell = ({pokeClass, handleOnClick}) => {
  const {id, backgroundPosition} = pokeClass
  const style = {backgroundImage: `url(${sprites})`, backgroundPosition}

  return <button style={style}
                 className="poke-cell"
                 onClick={
                   () => handleOnClick(id)}></button>
}

export default PokeCell