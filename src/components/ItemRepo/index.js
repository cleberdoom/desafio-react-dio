import React from 'react'
import { ItemContainer } from './styles'



function ItemRepo({repo, remove}){
    return(
       <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url}rel="noreferrer">Ver repositorio</a><br/>
        <a href='#' className='remover' rel='noreferrer' onClick={remove}>Remover</a>
        <hr/>
       </ItemContainer> 

    )
}

export default ItemRepo