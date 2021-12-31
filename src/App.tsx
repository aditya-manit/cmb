import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Global } from 'viser-react';
import './App.css';
import Validators from './Validators';
const { Text, Title, Link } = Typography;
Global.registerTheme('newTheme', {
  colors: ['#1890ff', '#d7504b']
});

Global.setTheme('newTheme');

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ padding: '50px 50px' }}>
        <Validators />
      </Content>
      <Footer style={{ textAlign: 'center', color: 'grey' }}>
      </Footer>
    </Layout>
  );
}

export default App;
