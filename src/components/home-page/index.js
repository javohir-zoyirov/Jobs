import React from 'react';
import { Flex, Layout } from 'antd';
import { Nav } from '../nav';
import { JobCards } from '../job-cards';
import { Filter } from '../filter';
import { Foter } from '../footer';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor:"black",
  borderBottom:"1px solid white"
};
const contentStyle = {
  overflow: 'scroll',
  minHeight: 120,
  color: '#fff',
};
const siderStyle = {
  color: '#fff',
};
const footerStyle = {
  backgroundColor:"black",
  color: '#fff',
};
const layoutStyle = {
  width: "100vh",
  height:"100vh",
};
const HomePage = () => (
  <Flex className='w-100'>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}><Nav/></Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          <Filter/>
        </Sider>
        <Content style={contentStyle}><JobCards/></Content>
      </Layout>
      <Footer style={footerStyle}><Foter/> </Footer>
    </Layout>      
  </Flex>
);
export default HomePage;