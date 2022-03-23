import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #EEBC3B;
        padding: 12px 0px 12px 0px;
    }
`

export const Title = styled.p`
    &{
        user-select: none;
        letter-spacing: 0.15rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: calc( (100vw - 320px)/(1920 - 320) * (48 - 26) + 26px );
    }
`