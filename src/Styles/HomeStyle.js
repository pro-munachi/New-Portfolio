import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  color: #777778;
  background: black;
  .desktop {
    border: 2px solid black;
    .heading {
      width: 60%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
    .intro {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 19px;
      }
    }
    .links {
      .link {
        display: flex;
        color: #777778;
        font-size: 18px;
        width: auto;
        :hover {
          color: white;
        }
        .line {
          width: 50px;
          height: 3px;
          background: #777778;
          margin-left: 20px;
          margin-top: 14px;
          text-decoration: none;
          :hover {
            width: 70px;
            transition-duration: 3s;
            transition: ease-in-out;
            background: white;
          }
          .link-name {
            margin-left: 130%;
            margin-top: -14px;
            color: #777778;
            :hover {
              color: white;
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      flex-direction: column;
      .social {
        display: flex;
      }
      .image {
        width: 15%;
        border-radius: 15em;
        margin-right: 25px;
      }
    }
  }
`
