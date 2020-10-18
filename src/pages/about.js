import React from 'react';
import Layout from '../components/organisms/Layout'
import SEO from '../components/molecules/SEO'
import styled from 'styled-components';

const Holder = styled.article`
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  align-items: start;
  grid-auto-flow: dense;
  @media ( ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media ( ${props => props.theme.breakpoints.lg} ) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .text {
    margin: 8rem 0;
    @media ( ${props => props.theme.breakpoints.md} ) {
      grid-column: 2/3;
    }
  }
`;

const SecondPage = () => (
  <Layout>
    <SEO title="About"/>
    <Holder>
      <div className="text">
        <h1>About</h1>
        <p>Will McLean is an artist based in Wamberal on the Central Coast of NSW, Australia.</p>
        <h2>Group Shows</h2>
        <ul>
          <li>Piccolo - 2019 - Comber Street Studios</li>
          <li>Rude Assembly 4 - 2019 - Above the Toolshed</li>
          <li>Rude Assembly 3 - 2019 - Burton Project Space</li>
          <li>Asymetric Archaeology - 2018 - China Heights</li>
          <li>Works on Paper - 2017 - China Heights</li>
          <li>Works on Paper - 2016 - China Heights</li>
        </ul>
      </div>
    </Holder>
  </Layout>
);

export default SecondPage;
