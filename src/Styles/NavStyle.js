import styled from 'styled-components'

export const Container = styled.nav`
  display: none;
  align-items: center;
  width: 100wh;
  height: auto;
  background: black;
  color: #777778;
  @media (max-width: 1000px) {
    display: flex;
  }
  .header {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    margin: auto;
    padding: 13px 0;
    overflow: hidden;
    @media (max-width: 700px) {
      font-size: 12px;
    }
    .link {
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 19px;
      a {
        text-decoration: none;
        font-size: 30px;
        color: white;
        @media (max-width: 700px) {
          font-size: 23px;
        }
      }
    }
    .burgermenu {
      display: flex;
      flex-direction: column;
      margin: auto;

      i {
        background: #777778;
        width: 32px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        transition: all ease-in-out 0.5s;
      }

      .open:nth-child(1) {
        transform: rotate(45deg) translateY(16px);
      }

      .open:nth-child(2) {
        opacity: 0;
      }

      .open:nth-child(3) {
        transform: rotate(-45deg) translateY(-16px);
      }

      .close:nth-child(1) {
        transform: rotate(0) translateY(0);
      }

      .close:nth-child(2) {
        opacity: 1;
      }

      .close:nth-child(3) {
        transform: rotate(0) translateY(0);
      }
    }
    .image {
      margin-right: -155px;
      img {
        border-radius: 50%;
      }
    }
  }
  .nav-items {
    .list-items {
      text-align: center;
      li {
        list-style: none;
        margin: 10px;
        a {
          text-decoration: none;
          font-size: 20px;
          color: #777778;
        }
      }
    }
  }
`
