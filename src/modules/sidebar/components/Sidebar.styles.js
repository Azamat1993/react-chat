import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 8rem;
  background-color: #1d232a;
  text-align: right;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  width: 7rem;
  height: 6rem;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  max-width: 100%;
  width: 3rem;
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
`
