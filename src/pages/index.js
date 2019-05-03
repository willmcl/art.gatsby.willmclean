import React from "react";
import Layout from "../components/organisms/Layout";
import Image from "../components/elements/Image";
import SEO from "../components/molecules/SEO";
import PostList from '../components/organisms/PostList';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Index</h1>
    <PostList/>
    <div style={{ maxWidth: `300px`, marginBottom: `2rem` }}>
      <Image imgName="cups.jpg"/>
    </div>
  </Layout>
);

export default IndexPage
