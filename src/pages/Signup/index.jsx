import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {ReactComponent as PassIcon} from "../../assets/password.svg"
import {ReactComponent as EmailIcon} from "../../assets/email.svg"
import Button from "../../components/Button"
import { Header } from "../../components/Header"
import {Container,Column,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from "./styles"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { string } from "i/lib/util"

const schema = yup
  .object({
    fullname: yup.string().matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Deve conter apenas letras').required('Campo Obrigatório'),
    email: yup.string().email('Email não valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();


const Signup = () => {

        const {control,handleSubmit,formState: { errors },} = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',

        })
        const onSubmit = async formData => {
            try {
                const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
                console.log('retorno api', data)
                if(data.length === 1){
                  
                        navigate('/feed')

                }else{
                    alert('Email ou senha errados')
                }


            } catch{
                alert('Ouve um erro,tente novamente')
                
            }
        }


    const navigate = useNavigate();


    return(
    <>
       <Header />
       <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>Começe agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change ._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="fullname" placeholder="Nome Completo" errorMessage={errors.fullname?.message} control={control} leftIcon={<EmailIcon/>} type="name" />
                        <Input name="email" errorMessage={errors.email?.message}  control={control} placeholder="E-mail" leftIcon={<EmailIcon/>} type="email" />
                        <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" leftIcon={<PassIcon/>} type="password" />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Column>
                        <SubTitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleLogin>
                        
                        
                        <Row>
                            <EsqueciText>Já tenho conta.</EsqueciText>
                        <CriarText href="/login">Fazer login</CriarText>
                        </Row>
                    </Column>

                </Wrapper>        
            </Column>
       </Container>
    </>
    )
}

export {Signup}