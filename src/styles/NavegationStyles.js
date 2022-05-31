import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
`;

export const BackHome = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: white;
    position: absolute;
    top: 3px;
    right: ${({ open }) => (open ? "0" : "130%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: .3s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #808e9b;
    transition: 0.5s all ease;
    div {
      svg {
        fill: #23394d;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    margin-right: 10px;
    background-color: black;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 15px;
    z-index: 2;
    svg {
      fill: white;
      /* margin-right: 0.5rem; */
    }
  }
`;