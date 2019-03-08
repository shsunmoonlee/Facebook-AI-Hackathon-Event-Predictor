import React, { Fragment } from 'react';
import { Sider, Row, Col, Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { scaleRotate as BurgerMenu }  from 'react-burger-menu';
import 'components/Header.css'
export default class Header extends React.PureComponent {
  state = {
    isOpen: false,
    windowHeight: undefined,
    windowWidth: undefined,
    collapsed: true,
  };
  show() {
    this.setState({collapsed : false});
  }
  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }
  openNav = () => {
    this.setState({ isOpen: true })
  }

  closeNav = () => {
    this.setState({ isOpen: false })
  }

  onToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  onClickSignUp = () => {
    this.closeNav();
    // this.props.SetSignUpModalVisible(true);
  }

  onClickSignIn = () => {
    this.closeNav();
    // this.props.SetSignInModalVisible(true);
  }
  render() {
    if(!this.state.windowWidth) {
      return <h1>loading</h1>
    }
    if(this.state.windowWidth < 750) {
      return (
        <Fragment>
          <BurgerMenu right>
            <Layout.Header className="header" style={{padding: '0px'}}>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['home']}
                defaultOpenKeys={['/service', '/post']}
                style={{ display: 'flex', flexDirection: 'column',}}
              >
                <Menu.Item key="home">
                  <Link to="/">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="/@seunghunsunmoonlee/post">
                  <Link to="/@seunghunsunmoonlee/post">Blog</Link>
                </Menu.Item>
                <Menu.Item key="/contact">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Layout.Header>
          </BurgerMenu>
          <Row type="flex" justify="center" style={{textAlign: 'center', lineHeight: '64px'}}>
            <Col
              xs={{ span: 2, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0}}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >

            </Col>
            <Col
              xs={{ span: 20, offset: 0 }}
              sm={{ span: 20, offset: 0 }}
              md={{ span: 20, offset: 0}}
              lg={{ span: 20, offset: 0 }}
              xl={{ span: 20, offset: 0 }}
              xxl={{ span: 20, offset: 0 }}
            >
              <Link to="/" style={{fontFamily: 'karla', color: 'inherit', fontSize: '33px', fontWeight: '400'}}>
                Predyctr
              </Link>
            </Col>
            <Col
              xs={{ span: 2, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0}}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >

            </Col>
          </Row>
        </Fragment>
      )
    }
    if(this.state.windowWidth >= 750) {
      return (
        <Fragment>
          <Row type="flex" justify="center" style={{textAlign: 'center', lineHeight: '64px'}}>
            <Col
              xs={{ span: 2, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0}}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >

            </Col>
            <Col
              xs={{ span: 20, offset: 0 }}
              sm={{ span: 20, offset: 0 }}
              md={{ span: 20, offset: 0}}
              lg={{ span: 20, offset: 0 }}
              xl={{ span: 20, offset: 0 }}
              xxl={{ span: 20, offset: 0 }}
            >
              <Link to="/" style={{fontFamily: 'karla', color: 'inherit', fontSize: '33px', fontWeight: '400'}}>
                Predyctr
              </Link>
            </Col>
            <Col
              xs={{ span: 2, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              md={{ span: 2, offset: 0}}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >

            </Col>
          </Row>
          <Row type="flex" justify="center" style={{marginBottom: '20px', textAlign: 'center'}}>
            <Col
              xs={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0}}
              lg={{ span: 22, offset: 0 }}
            >
              <Layout.Header className="header">
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={['home']}
                  className="header-menu"
                  style={{display: 'flex', justifyContent: 'center'}}
                >
                  <Menu.Item key="home">
                    <Link to="/">
                      home
                    </Link>
                  </Menu.Item>
                    <Menu.Item key="/@seunghunsunmoonlee/post">
                      <Link to="/@seunghunsunmoonlee/post">Blog</Link>
                    </Menu.Item>
                    <Menu.Item key="/contact">
                      <Link to="/contact">Contact</Link>
                    </Menu.Item>
                </Menu>
              </Layout.Header>
            </Col>
          </Row>
        </Fragment>

      );
    }
  }
}
