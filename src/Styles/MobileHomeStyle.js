import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: 80vh;
  font-family: 'Droid Sans';
  .home {
    width: 90%;
    margin: auto;
    padding-top: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 500px) {
      justify-content: center;
    }
    .image {
      text-align: center;
      margin: 10px 0;
      img {
        border-radius: 10px;
        width: 20%;
      }
    }
    .intro {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 17px;
      }
    }
    .button {
      margin: 5px 0;
      button {
        width: 120px;
        height: 45px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        background: transparent;
        color: white;
        border: 2px solid #777778;
        font-size: 14px;
      }
    }
    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .social {
        margin: 20px 0;
        text-align: center;
        .social-link {
          display: flex;

          p {
            font-size: 18px;
            margin: auto;
            :hover {
              color: #777778;
            }
            @media (max-width: 500px) {
              font-size: 15px;
            }
            a {
              text-decoration: none;
              color: white;
            }
          }
        }
      }
      .inspire {
        margin: 18px 0;
        font-size: 18px;
        color: #777778;
        a {
          color: white;
          margin: 8px;
        }
      }
      .copy {
        color: white;
        margin-top: 8px;
      }
    }
  }
`
