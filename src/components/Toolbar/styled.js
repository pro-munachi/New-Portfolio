import styled from 'styled-components'

export const Wrapper = styled.header `
background: ${props => props.bgcolor};
header {
    top: 0;
    position: fixed;
    width: 100%;
    height: 10%;
    background: transparent;
    .flex {
        display: flex;
        justify-content: space-between;
    }
    ul {
        font: sans-serif;
        display: flex;
        margin-top: 4.5%;
        .link {
            border-bottom: 3px solid white;
            
        }
    }
    a {
        text-decoration: none;
        list-style: none;
        color: #f3dbcf;
        font: Arial;
        letter-spacing: 3px;
        padding: 0 2px;
        margin: 0 25px;
    }
    .logo {
        font-size: 25px;
        color: #aac9ce;
        margin-left: 2em;
        margin-top: -5px;
    }
}

.na {
 display: flex;  
 margin-right: 2em; 
}

@media (max-width: 767px) {
    .toolbar_navigation_items {
        display: none;
    }
    .logo {
        margin-top: -16px;
    }
}

@media (min-width: 769px) {
    .tog {
        display: none;
    }
    .logo {
        margin-right: 2em;
    }
}
`

export default styled