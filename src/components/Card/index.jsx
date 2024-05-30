import { CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture } from "./styles"
import {FiThumbsUp} from 'react-icons/fi'
import React from "react"

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?cs=srgb&dl=pexels-pixabay-158826.jpg&fm=jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/148928485?v=4"/>
                    <div>
                        <h4>cleber tavares
                        </h4>
                        <p>a 8 minutos</p>

                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de html e css</h4>
                    <p>projeto feito para o curso de html e css no bootcamp dio do Global avenade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#html #css #javascript</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>






    )
}

export {Card}