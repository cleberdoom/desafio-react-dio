import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { Header } from "../../components/Header"
import { Container,Column,Title,TitleHighlight} from "./styles"
import Bannerimg from "../../assets/banner.webp"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"






const Feed = () => {
    return(
    <>
       <Header autenticado={true} />
       <Container>
        <Column flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighlight>#Ranking Top 4 da semana</TitleHighlight>
        <UserInfo name={'Cleber Tavares'} image={'https://avatars.githubusercontent.com/u/148928485?v=4'} percentual={80}/>
        <UserInfo name={'Cleber Tavares'} image={'https://avatars.githubusercontent.com/u/148928485?v=4'} percentual={80}/>
        <UserInfo name={'Cleber Tavares'} image={'https://avatars.githubusercontent.com/u/148928485?v=4'} percentual={80}/>
        <UserInfo name={'Cleber Tavares'} image={'https://avatars.githubusercontent.com/u/148928485?v=4'} percentual={80}/>
        </Column>
      

       </Container>
    </>
    )
}

export {Feed}