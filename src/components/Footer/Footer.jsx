import React from 'react'  
import {Container, Title, Links, LinksContainer} from './styled'

const Footer = () => {
    return(
    <Container>
        <Title>movielist.org</Title>
        <LinksContainer>
            <Links to='#' >Contacts</Links>
            <Links to='#'>About</Links>
        </LinksContainer>
    </Container>
    )
}


export { Footer }