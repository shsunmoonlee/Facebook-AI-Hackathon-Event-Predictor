/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  Menu,
  Layout
} from 'antd'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage'
import 'antd/dist/antd.css';
import './App.css'
const SubMenu = Menu.SubMenu
export default class App extends React.PureComponent {
  handleClick = e => {
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <Fragment>
        <article>
          <Helmet>
            <title>Event Predictor</title>
            <meta name="description" content="Event Predictor" />
          </Helmet>
        </article>
        <Header
          className="header"
        />
        <Layout.Content className="app-layout-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Layout.Content>
        <Footer />
      </Fragment>
    )
  }
}