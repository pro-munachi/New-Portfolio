import styled from 'styled-components'


export const Div = styled.div `

`

export const Contacts = styled.div `
.contact {
    img{
        width: 2%;
    }
    .head {
        text-align: center;
        h1 {
            font-size: 45px;
        }
    }
    .for {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #03080a;
        .container .row100 .inputBox input:focus + .text,
        .container .row100 .inputBox input:valid + .text{
            top: -35px;
            left: -10px;
        }
        .container .row100 .inputBox input:focus ~ .line,
        .container .row100 .inputBox input:valid ~ .line {
            height: 100%;
        }
        .container .row100 .inputBox textarea:focus + .text,
        .container .row100 .inputBox textarea:valid + .text{
            top: -35px;
            left: -10px;
        }
        .container .row100 .inputBox textarea:focus ~ .line,
        .container .row100 .inputBox textarea:valid ~ .line {
            height: 100%;
        }
        .container {
            width: 80%;
            padding: 20px;
            h2 {
                width: 100%;
                color: #45f3ff;
                font-size: 36px;
                text-align: center;
                margin-bottom: 10px;
            }
            .row100 {
                position: relative;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(autofit,minmax(300px,1fr));
                .col {
                    position: relative;
                    width: 100%;
                    padding: 0 10px;
                    margin: 30px 0 10px;
                    transition: 0.2s;
                    input[type='submit'] {
                        border: none;
                        padding: 7px 35px;
                        cursor: pointer;
                        outline: none;
                        background: #45f3ff;
                        color: #000;
                        font-size: 18px;
                        border-radius: 2px;
                    }
                }
                .inputBox.textarea {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    padding: 10px 0;
                    textarea {
                        height: 100%;
                        resize: none;
                    }
                }
                .inputBox {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    color: #45f3ff;
                    input,
                    textarea {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: transparent;
                        box-shadow: none;
                        border: none;
                        outline: none;
                        font-size: 18px;
                        padding: 0 10px;
                        z-index: 1;
                        color: #000;
                    }
                   
                    .text {
                        position: absolute;
                        top: 0;
                        left: 0;
                        line-height: 40px;
                        font-size: 18px;
                        padding: 0 10px;
                        display: block;
                        transition: 0.5s;
                        pointer-events: none;
                    }
                    .line {
                        position: absolute;
                        bottom: 0;
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: #45f3ff;
                        transition: 0.5s;
                        border-radius: 2px;
                        pointer-events: none;
                    }
                }
            }
        }
    }
    .flex {
        display: flex;
        justify-content: space-evenly;
        @media (max-width: 950px) {
            flex-direction: column;
            justify-content: center;
        }
        .word {
            width: 40%;
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            @media (max-width: 950px) {
            width: 100%;
            margin-bottom: 20px;
            border-top: 1px solid black;
        }
            h2 {
                text-align: center;
                font-size: 35px;
                font-weight: 800;
            }
            strong {
                font-size: 18px;
            }
            .h {
                h1 {
                    font-size: 30px;
                }
            }
            .email {
                display: flex;
                justify-content: space-around;
                margin-top: 5%;
            }
            .add {
                display: flex;
                justify-content: space-around;
                .ad {
                    width: 200px;
                    margin-left: 4%;
                }
            }
            .soc {
                margin-right: 17%;
                @media (max-width: 950px) {
                margin-right: 0;
                }
                a {
                    text-decoration: none;
                    margin: 7px;
                    color: black;
                    font-size: 18px;
                }
            }
        }
        .map {
           width: 50%; 
           @media (max-width: 950px) {
            width: 100%;
        }
        }
    }
}
`