import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Holder = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  align-items: center;
  justify-items: center;
  margin: 8rem 0;
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 9rem;
    li { 
      text-align: center;
      line-height: 3rem;
    }
  }
`;

class Pagination extends Component {
  render() {

    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/${(currentPage - 1).toString()}`;
    const nextPage = `/${(currentPage + 1).toString()}`;

    return (
      <Holder>
        {!isFirst && (
          <p>
            <Link to={prevPage} rel="prev">←</Link>
          </p>
        )}
        <ul>
          {Array.from( { length: numPages }, ( _, i ) => (
            <li>
              <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? '' : i + 1}`}>
                {i + 1}
              </Link>
            </li>
          ) )}
        </ul>
        {!isLast && (
          <p>
            <Link to={nextPage} rel="next">→</Link>
          </p>
        )}
      </Holder>
    )
  }
}

export default Pagination;