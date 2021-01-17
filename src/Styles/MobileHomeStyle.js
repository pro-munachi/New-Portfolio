import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: auto;
  padding-bottom: 14%;
  height: 100vh;
  .home {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    padding-top: 10%;
    padding-bottom: 12%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image {
      text-align: center;
      margin: 10px 0;
      img {
        border-radius: 10px;
        width: 20%;
      }
    }
    .intro {
      margin: 10px 0;
      h1 {
        font-size: 34px;
      }
      p {
        font-size: 17px;
      }
    }
    .social {
      margin: 10px 0;
      .social-link {
        display: flex;
        p {
          font-size: 18px;
          margin: 8px 0 8px 8px;
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
`
