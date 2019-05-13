import React from 'react';
import Layout from '../components/organisms/Layout';
import SEO from '../components/molecules/SEO';
import ArtList from '../components/organisms/ArtList';
import BlogList from '../components/organisms/BlogList';
import styled from 'styled-components';

const Holder = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 100%;
    display: grid;
    grid-auto-flow: dense;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ( ${props => props.theme.breakpoints.lg} ) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    li:nth-child(1) { 
      grid-column: 1/2; 
      grid-row: 1/2; 
    }
    li:nth-child(2) { 
      grid-column: 1/2; 
      grid-row: 2/3; 
    }
    li:nth-child(3) { 
      grid-column: 1/2; 
      grid-row: 3/4; 
    }
    li:nth-child(4) { 
      grid-column: 1/2; 
      grid-row: 4/5; 
    }
    li:nth-child(5) { 
      grid-column: 1/2; 
      grid-row: 5/6; 
    }
    li:nth-child(6) { 
      grid-column: 1/2; 
      grid-row: 6/7; 
    }
    li:nth-child(7) { 
      grid-column: 1/2; 
      grid-row: 7/8; 
    }
    li:nth-child(8) { 
      grid-column: 1/2; 
      grid-row: 8/9; 
    }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]}/>
    <Holder>
      <BlogList/>
      <ArtList/>
    </Holder>
  </Layout>
);

export default IndexPage;
