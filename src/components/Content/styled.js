import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        flex: 1 1 auto;
        align-self: center;
        min-height: 100%;
        max-width: 80%;
        padding-top: 10px;
    }
`

export const SubContainer = styled.div`
    &{
        display: flex;
        flex-direction: column;
        padding: 10px 0px;
        height: fit-content
    }
`

export const InfoMessage = styled.div`
    &{
        opacity: ${props => {return props.opacity ? props.opacity : '0'}};
        transition: 1s;
        border: 1px solid red;
        padding: 5px;
        align-self: center;
        max-width: 360px;
    }
`

export const Title = styled.span`
    &{
        font-weight: 200;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`   