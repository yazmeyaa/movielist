import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    &{
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #EEBC3B;
        padding: 10px 45px 5px 45px;
        
    }
`

export const Title = styled.p`
    &{
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc( (100vw - 320px)/(1920 - 320) * (28 - 16) + 16px );;
    }
`

export const LinksContainer = styled.div`
    &{
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: fit-content;
    }
`

export const Links = styled.a`
    &{
        font-weight: normal;
        text-transform: capitalize;
        text-decoration: underline;
        font-size: calc( (100vw - 320px)/(1920 - 320) * (24 - 12) + 12px );
        cursor: pointer;
    }
`