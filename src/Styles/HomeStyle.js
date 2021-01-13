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
      @media (max-width: 1250px) {
        width: 80%;
      }
    }
    .intro {
      h1 {
        font-size: 48px;
      }
      .m,
      .h {
        border-left: 5px solid #777778;
        border-top: 5px solid #777778;
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
          transition: 0.5s ease-in-out;
        }
        .like {
          text-decoration: none;
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
            transition: 0.5s ease-in-out;
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
      .social-link {
        margin: 0 4px;
        display: flex;
        justify-content: space-between;
        p {
          margin: 9% 0 0 3px;
          a {
            margin: 5px;
            text-decoration: none;
            color: #777778;
            :hover {
              color: white;
            }
          }
        }
      }
      .image {
        width: 15%;
        border-radius: 15em;
        margin-right: 25px;
      }
      .inspire {
        margin: auto;
        margin-top: 5px;
        a {
          color: white;
          margin-left: 5px;
          text-decoration: none;
        }
      }
    }
    .copy {
      text-align: center;
      margin-bottom: 3px;
    }
  }
`
