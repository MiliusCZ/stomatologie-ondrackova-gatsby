import React from 'react';

import Image from '../components/Image';

import './index.scss';

import Layout from '../components/layout';
// import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <div className="main">
      <div className="logoPlaceholder">
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
