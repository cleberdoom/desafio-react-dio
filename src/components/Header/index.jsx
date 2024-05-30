import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoDio from '../../assets/background.png'
import Button from '../Button/index'
import {BuscarInputContainer,Column,Container,Input,Menu,MenuRight,Row,UserPicture,Wrapper} from './styles'

const Header = ({autenticado}) => {


    const navigate = useNavigate();

    const handleClickSignUp = () => {
        navigate('/signup')
    }
    const handleClickLogin = () => {
        navigate('/login')
    }


    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={LogoDio} width={64} height={64} alt='Logo da dio' />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/148928485?v=4'/>
                    ) : (<><MenuRight href='/'>Home</MenuRight>
                    <Button title='Entrar' onClick={(handleClickLogin)}/>
                    <Button title='Cadastrar' onClick={(handleClickSignUp)}/>
                    </> )
                }
                   
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}