import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const history = createHistory();
const { Header, Sider, Content } = Layout;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  pressMenu = (e) => {
    history.replace(e.key);
  }

  login = () => {
    console.log('login');
  }

  register = () => {
    console.log('register');
  }

  render() {
    return (
      <Router history={history}>
        <Layout className="App">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo">Ant</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]} onClick={this.pressMenu}>
              <Menu.Item key="/">
                <Icon type="user" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="/about">
                <Icon type="video-camera" />
                <span>About</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="header" >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <div className="auth">
                <div className="btn-text" onClick={this.login}>Login</div>
                <div className="btn-text" onClick={this.register}>Register</div>
              </div>
            </Header>
            <Content className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
