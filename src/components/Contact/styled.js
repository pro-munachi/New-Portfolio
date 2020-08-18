import styled from 'styled-components'


export const Div = styled.div `

`

export const Contacts = styled.div `
.contact {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff;
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0%;
        width: 50%;
    }
    .container {
        position: relative;
        min-width: 1100px;
        min-height: 550px;
        display: flex;
        z-index: 1000;
        .contactinfo {
            position: absolute;
            left: 40%;
            top: 40px;
            width: 350px;
            height: calc(100% - 80px);
            background: #0f3959;
            z-index: 1;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
            h2 {
                color: #fff;
                font-size: 25px;
                font-weight: 500;
            }
            .info {
                position: relative;
                margin: 20px 0;
                li {
                    position: relative;
                    list-style: none;
                    display: flex;
                    margin: 20px 0;
                    cursor: pointer;
                    align-items: flex-start;
                    span:nth-child(1){
                        width: 30px;
                        min-width: 30px;
                    }
                    span:nth-child(1) img{
                        max-width: 100%; 
                        filter: invert(1);
                        opacity: 0.5;
                    }
                    span:nth-child(2){
                        color: #fff;
                        margin-left: 10px;
                        font-weight: 300;
                        opacity: 0.5;
                    }
                    span:nth-child(2) img{
                        max-width: 100%; 
                        filter: invert(1);
                        opacity: 0.5;
                    }
                    :hover span:nth-child(1) img,
                    :hover span:nth-child(2) {
                        opacity: 1;
                    }
                }
            }
            .sci {
                position: relative;
                display: flex;
                li {
                    list-style: none;
                    margin-right: 15px;
                    a {
                        text-decoration: none;
                        img {
                            filter: invert(1);
                            opacity: 0.5;
                            :hover {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    img{
        
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
}
`