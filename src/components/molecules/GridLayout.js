import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: grid;
    margin-top: 8rem;
    grid-template-columns: 1fr;
    padding: 4rem;
    grid-gap: 8rem;
    @media ( ${props => props.theme.breakpoints.md} ) {
      padding: 10rem;
      grid-gap: 20rem;
      grid-template-columns: repeat(2, 1fr);
    }
`;

function GridLayout({children}) {
    return (
      <Holder>{children}</Holder>
    )
}

export default GridLayout;
