import styled from 'styled-components'

export const Cards = styled.div `
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 450px;
    height: 300px;
    margin: 1em;

    /* @media (max-width: 768px) {
        margin: 1em 0 1em;
        width: 100%;
        height: 280px;
        padding: 0;
    }
    @media (min-width: 901px) {
        width: 320px;
        min-width: 310px;
        height: 250px;
    }
    @media (min-width: 1380px) {
        width: 520px;
        max-width: 550px;
        height: 300px;
    } */

    .card{
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

            :hover .caption_container{
                filter: blur(3px);
                -webkit-filter: blur(3px);
                backdrop-filter: blur(3px);                
                transition: 0.5s;
            }

            .caption_container{
                display: flex;
                align-content: center;
                justify-content: space-around;
                flex-wrap: wrap;
                text-align: center;
                background-image:  url(${props => props.imgUrl});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                margin: auto;        
            }

                @media (min-width: 1024px){
                    :hover .card_text .caption button {
                        visibility: visible;
                        opacity:  1;
                        transition: 0.6s;
                    }
                }
            .card_text{
                position: absolute;
                width: 100%;
                height: 100%;

                .caption{
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2;
                    width: 90%;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    color: white;
                    text-align: center;
                    margin: auto;

                    button{
                        margin: 1em auto;
                        margin-top: 80px;
                        padding: 0.5em 2em 0.5em;
                        visibility: hidden;
                        opacity: 0;
                        font-weight: bold;
                        font-size:15px;
                        color: white;
                        background: #0f3959;
                        border: none;
                        border-radius: 2px;
                        cursor: pointer;

                        @media (max-width: 1024px){
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
            }
    }
`

export const FlexStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1em auto 6em;
    width: 100%;
    padding-top: 60px;

    @media (min-width: 760px){
        margin: auto;
        margin-right: 0;
        width: 100%;
    }
`