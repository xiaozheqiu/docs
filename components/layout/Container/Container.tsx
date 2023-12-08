import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

const Container = styled('div')`
  position: relative;
  margin-right: auto;
  width: 100%;
  max-width: 704px;
  @media only screen and (min-width: ${breakpoints.lg + 1}px) {
    margin-left: 35%;
  }
  @media only screen and (width: ${breakpoints.lg}px) {
    margin-left: 25%;
  }
  @media only screen and (width: ${breakpoints.lg - 1}px) {
    margin-left: 10%;
  }
`;

export default Container;
