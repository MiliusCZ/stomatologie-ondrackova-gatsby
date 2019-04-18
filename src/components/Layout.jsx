import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import { StaticQuery, graphql } from 'gatsby';

import './Layout.scss';

const getNavigationData = (contentPages, dataPages) => {
  const dataNavigation = dataPages.map(item => {
    return {
      title: item.node.title,
      key: item.node.key,
      path: item.node.path,
      priority: item.node.priority,
    };
  });

  const contentNavigation = contentPages.map(item => {
    return {
      title: item.node.frontmatter.title,
      key: item.node.frontmatter.key,
      path: item.node.frontmatter.path,
      priority: item.node.frontmatter.priority,
    };
  });

  const navigation = contentNavigation.concat(dataNavigation);
  navigation.sort((a, b) => a.priority > b.priority);

  return navigation;
};

const LayoutComponent = ({ data, children, showTopImage }) => (
  <div className="main">
    <Header
      // title={data.configurationJson.title}
      navigation={getNavigationData(
        data.allMarkdownRemark.edges,
        data.allContentJson.edges
      )}
      // image={data.file.childImageSharp.fluid}
    />
    {showTopImage && <div className="topImage"><img src="/img/topimage1.jpg" /></div>}
    <div className="content">{children}</div>
    <Footer siteInfo={data.configurationJson} />
  </div>
);

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
  showTopImage: PropTypes.bool,
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query ConfigQuery {
        configurationJson {
          address {
            name
            street
            city
            zip
          }
          web
          facebook
          title
          disclaimer
          phone
          email
          openingHours
        }
        allContentJson(filter: { showInMenu: { eq: true } }) {
          edges {
            node {
              title
              key
              path
              priority
            }
          }
        }
        allMarkdownRemark(
          filter: { frontmatter: { showInMenu: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                key
                path
                priority
              }
            }
          }
        }
        file(relativePath: { eq: "fake.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <LayoutComponent data={data} {...props} />}
  />
);

export default Layout;

Layout.displayName = 'Layout';
