import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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
  margin-left: 3.1rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: sans-serif;
  transition: .2 ease-in-out;

  @media screen and (max-width: 960px) {
    margin-left: 1.5rem;
    transition: .2 ease-in-out;
  }
  @media screen and (max-width: 500px) {
    margin-left: 1.5rem;
    transition: .2 ease-in-out;
  }
`;

export const BackHome = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  transition: .2s ease-in-out;
  color: white;
  width: 35px;
  height: 35px;

  &:hover{
    transition: .2s ease-in-out;
    transform: rotate(90deg);
    border-radius: 50%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-right: 100px;
  transition: .2 ease-in-out;
  @media screen and (max-width: 960px) {
    background-color: white;
    position: absolute;
    bottom: -16px;
    right: ${({ open }) => (open ? "0" : "130%")};
    width: 100vw;
    height: 100%;
    margin: 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: .2s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  transition: .2 ease-in-out;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2 ease-in-out;
  }
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  transition: .2s all ease;
  color: gray;

  &:hover {
    color: black;
  }

  &.active{
    text-decoration: overline;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    color: black;
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
    transition: .2 ease-in-out;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
    transition: .2 ease-in-out;
  }
`;

export const MenuItemCV = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #3742fa;
  cursor: pointer;
  transition: .2s all ease;
  
  &:hover {
    color: #70a1ff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    transition: .2 ease-in-out;
  }
  @media screen and (max-width: 500px) {
    font-size: 2rem;
    transition: .2 ease-in-out;
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
    transition: .2s ease-in-out;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 2;
    svg {
      fill: white;
    }

    &:hover{
      transition: .2s ease-in-out;
      border-radius: 5px;
    }
  }
`;