import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';

const Holder = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  align-items: center;
  margin: 20rem 0;
  p:last-child { text-align: right; }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 9rem;
    justify-self: center;
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
    const prevPage = currentPage - 1 === 1 ? `/${this.props.base}` : `/${this.props.base}/${(currentPage - 1).toString()}`;
    const nextPage = `/${this.props.base}/${(currentPage + 1).toString()}`;

    return (
      <Holder>
        {!isFirst && (
          <p>
            <Link to={prevPage} rel="prev">Newer</Link>
          </p>
        )}
        <ul>
          {Array.from( { length: numPages }, ( _, i ) => (
            <li key={`pagination-number${i + 1}`}>
              <Link to={`/${this.props.base}/${i === 0 ? '' : i + 1}`}>
                {i + 1}
              </Link>
            </li>
          ) )}
        </ul>
        {!isLast && (
          <p>
            <Link to={nextPage} rel="next">Older</Link>
          </p>
        )}
      </Holder>
    )
  }
}

Pagination.propTypes = {
  base: PropTypes.string.isRequired
};

export default Pagination;
