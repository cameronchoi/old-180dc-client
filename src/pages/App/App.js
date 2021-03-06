import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import './App.css'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Interviewer from '../Interviewer/Interviewer'
import Interviewee from '../Interviewee/Interviewee'
import Success from '../Success/Success'
import Allocation from '../Allocation/Allocation'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from '../../assets/180logo3.png'

const { Header, Content, Footer } = Layout

function App () {
  return (
    <Router>
      <Layout className='layout'>
        <Header>
          <Link className='link' to='/'>
            <img src={logo} alt='Logo' className='top-logo' />
            {/* <div className='logo'>180 Degrees Consulting</div> */}
          </Link>
          <Menu className='header-menu' theme='dark' mode='horizontal'>
            <Menu.Item key='1'>
              <Link className='link' to='/interviewer'>
                <div>Interviewer</div>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              {' '}
              <Link className='link' to='/interviewee'>
                <div>Interviewee</div>
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              {' '}
              <Link className='link' to='/login'>
                <div>Login</div>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item> </Breadcrumb.Item>
            <Breadcrumb.Item> </Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/interviewer' component={Interviewer} />
              <Route path='/interviewee' component={Interviewee} />
              <Route path='/login' component={Login} />
              <Route path='/success' component={Success} />
              <Route path='/allocation' component={Allocation} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          180 Degrees Consulting © 2020 Created by Cameron Choi, Matthew Phang,
          Chelsy Teng, Ulyana Yunitskaya, Liangyue Wang
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
