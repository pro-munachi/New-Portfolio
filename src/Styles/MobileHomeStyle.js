import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: auto;
  .home {
    width: 80%;
    margin: auto;
    padding-top: 10%;
    padding-bottom: 12%;
    text-align: center;
    .image {
      text-align: center;
      img {
        border-radius: 10px;
        width: 20%;
      }
    }
    .intro {
      h1 {
        font-size: 39px;
      }
      p {
        font-size: 20px;
      }
    }
    .social {
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
    }
  }
`
