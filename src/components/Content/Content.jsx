import React, {useState, useRef} from 'react'
import {Container, Title, InfoMessage, SubContainer} from './styled'


const Content = () => {
    const [messageBoxProperties, setMessageBoxProperties] = useState({
        opacity: 0,
        textValue: ''
    })

    const messageInput = useRef()

    function summonMessage(){
        setMessageBoxProperties( (prevState) => {return {...prevState, textValue: messageInput.current.value, opacity: 100} } )
    }

    return(
        <Container>
            <SubContainer>
                <Title>Title Text</Title>
                {messageBoxProperties.textValue && <InfoMessage> {messageBoxProperties.textValue} </InfoMessage>}
                <input ref={messageInput} placeholder='Message' type='text' style={{maxHeight: '100px'}}/>
                <button onClick={summonMessage}>asd</button>
            </SubContainer>
        </Container>
    )
}

export {Content}