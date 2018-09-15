import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #272e36;
  width: 23rem;
  flex-direction: column;
  padding: 2rem;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
`

export const Box = styled.div`
  margin: 2.5rem 0;
`;

export const Hr = styled.hr`
  border-color: #313941;
  height: 1px;
  font-size: 1.4rem;
  text-transform: none;
`;
