import styled from 'styled-components'

export const Drawertoggle = styled.button `
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 30px;
width: 30px;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
box-sizing: border-box;
outline: none;
:focus {
    outline: none;
}

.toggle-button_line {
    width: 30px;
    height: 1px;
    background: white;
}
`

export const Nav = styled.div `
.side-drawer {
height: 100%;
background: #0f3959;
color: white;
box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
width: 70%;
max-width: 400px;
z-index: 200;
transform: translateX(-100%);
transition: transform 0.3s ease-out;
.image {
    text-align: center;
    position: relative;
    top: 4%;
    img {
        width: 40%;
        border-radius: 15em;
    }
}
ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.ul {
    position: relative;
    top: 2%;
    left: 0;
}
.social {
    margin-top: 15%;
    a {
        text-align: center;
        img {
            width: 15%;
        }
    }
}
li {
    list-style: none;
    margin: 0.5rem 0;
}
a {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px 0;
    letter-spacing: 5px;
    border-bottom: 1px solid black;
    width: 100%;
    :hover {
        color: orange;
    }
    :active {
        color: orange;
    }
}
}

.side-drawer.open {
transform: translateX(0);
}

@media (min-width: 769px) {
    .side-drawer {
        display: none;
    }
}

`