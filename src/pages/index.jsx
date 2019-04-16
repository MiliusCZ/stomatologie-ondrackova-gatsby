import React from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import './index.scss';

const IndexPage = ({ data }) => (
  <Layout showTopImage={true}>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html,
      }}
    />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query AboutUsQuery {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "about-us" } } }) {
      edges {
        node {
          frontmatter {
            title
            key
          }
          html
        }
      }
    }
  }
`;

IndexPage.displayName = 'IndexPage';

IndexPage.propTypes = {
  data: PropTypes.object,
};
