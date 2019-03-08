import React from 'react'
import { Layout, Menu, Icon, AutoComplete, Input, Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import CookieConsent from "react-cookie-consent";

const { SubMenu } = Menu

export default class Footer extends React.Component {
  render() {
    const Option = AutoComplete.Option
    const OptGroup = AutoComplete.OptGroup
    const dataSource = [
      {
        title: 'Projects',
        children: [
          {
            title: 'seunghunlee.net',
            count: 10000,
          },
          {
            title: 'phase.yonsei.ac.kr',
            count: 10600,
          },
        ],
      },
      {
        title: 'Media',
        children: [
          {
            title: 'Instagram',
            count: 60100,
          },
          {
            title: 'YouTube',
            count: 30010,
          },
        ],
      },
      {
        title: 'Consulting',
        children: [
          {
            title: 'Programming, Tech Seminar',
            count: 100000,
          },
        ],
      },
    ]
    function renderTitle(title) {
      return (
        <span>
          {title}
          <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=leeart.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
        </span>
      )
    }
    const options = dataSource
      .map(group => (
        <OptGroup key={group.title} label={renderTitle(group.title)}>
          {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
              {opt.title}
              <span className="certain-search-item-count">
                {opt.count} Followers
              </span>
            </Option>
          ))}
        </OptGroup>
      ))
      .concat([
        <Option disabled key="all" className="show-all">
          <a
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
          >
            See All
          </a>
        </Option>,
      ])
    return (
      <Layout.Footer
        className="footer"
        style={{ textAlign: 'center', paddingTop: '0' }}
      >
        <Row justify="center" type="flex" style={{paddingTop: '60px', paddingBottom: '60', marginTop: '20px', marginBottom: '20px', backgroundColor: 'transparent'}}>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 12, offset: 0}}
            lg={{ span: 2, offset: 0}}
            style={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}
          >
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '600', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              Services
            </div>
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '300', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              <a style={{transition: 'color .3s ease', color: '#949494'}}>Hire</a>
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 12, offset: 0}}
            lg={{ span: 2, offset: 2}}
            style={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}
          >
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '600', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              Blog
            </div>
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '300', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              <a style={{transition: 'color .3s ease', color: '#949494'}}>Popular</a>
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 12, offset: 0}}
            lg={{ span: 2, offset: 2}}
            style={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}
          >
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '600', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              Company
            </div>
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '300', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              <a style={{transition: 'color .3s ease', color: '#949494'}}>Contact</a>
            </div>
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '300', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              <a style={{transition: 'color .3s ease', color: '#949494'}}>FAQ</a>
            </div>
            <div style={{fontSize: '14px', marginBottom: '10px', textAlign: '', fontWeight: '300', lineHeight: '1.33', letterSpacing: '1.5px'}}>
              <a style={{transition: 'color .3s ease', color: '#949494'}}>Privacy Policy</a>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center" style={{textAlign: 'center', lineHeight: '64px'}}>
          <Col
            xs={{ span: 6, offset: 0 }}
            md={{ span: 4, offset: 0}}
            lg={{ span: 4, offset: 3 }}
          >
            <Link to="/" style={{fontFamily: 'karla', color: '#949494', fontSize: '33px', fontWeight: '400'}}>
              Predyctr
            </Link>
          </Col>
          <Col
            xs={{ span: 6, offset: 0 }}
            md={{ span: 4, offset: 0}}
            lg={{ span: 2, offset: 2 }}
            style={{display: 'flex', justifyContent: 'space-between'}}
          >
            <a target="_blank" href="https://www.linkedin.com/in/seunghunsunmoonlee/" style={{fontFamily: 'karla', color: 'inherit', fontSize: '25px', fontWeight: '200', color: '#949494'}}>
              <Icon type="linkedin" theme="outlined" />
            </a>
            <a target="_blank" href="https://medium.com/@seunghunsunmoonlee" style={{fontFamily: 'karla', color: 'inherit', fontSize: '25px', fontWeight: '200', color: '#949494'}}>
              <Icon type="medium" theme="outlined" />
            </a>
          </Col>
        </Row>
        <CookieConsent>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Layout.Footer>
    )
  }
}