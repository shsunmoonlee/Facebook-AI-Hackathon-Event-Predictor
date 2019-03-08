import React, {Fragment} from 'react'
import axios from 'axios'
import { Row, Col, Input, Layout, Divider} from 'antd'

import Events from 'components/Events'
import starIcon from 'components/Icon/star2.svg'

const Search = Input.Search;

export default class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      categoryResult: '',
    }
  }

  async getCategory(text) {
    const AIOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  'crossdomain': 'true', 'Access-Control-Allow-Origin': '', 'Access-Control-Allow-Methods': '*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
      params: {
        description: text,
      },
      url: 'http://37f91685.ngrok.io/predict',
    };
    const AIResponse = await axios(AIOption);
    this.categoryResult = AIResponse.data.result
    this.setState({categoryResult: this.categoryResult})
    console.log("===AIResponse", AIResponse)
  }
  render() {
    return (
      <Layout.Content className="app-layout-content">
        <Row type="flex" justify="center">
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 23, offset: 0}}
            lg={{ span: 23, offset: 0 }}
            xl={{ span: 21, offset: 0 }}
            xxl={{ span: 19, offset: 0 }}
            style={{cursor: 'pointer'}}
          >
            <Row type="flex" justify="center" style={{paddingTop: '35px', paddingBottom: '10px',}}>
              <Col
                xs={{ span: 24, offset: 0 }}
                md={{ span: 12, offset: 0}}
                lg={{ span: 12, offset: 0 }}
                style={{cursor: 'pointer'}}
              >
                <Search
                  placeholder="input search text"
                  onSearch={value => this.getCategory(value)}
                  style={{ width: '100%' }}
                />
                {this.state.categoryResult}
              </Col>
            </Row>
            <Row
              type="flex" justify="center"
            >
              <Col
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 15, offset: 0}}
                lg={{ span: 13, offset: 0 }}
                xl={{ span: 13, offset: 0 }}
                xxl={{ span: 13, offset: 0 }}
              >
                <Events />
              </Col>
              <Col
              xs={{ span: 24, offset: 0 }} // <576px
              sm={{ span: 24, offset: 0 }} // >= 576px
                md={{ span: 7, offset: 1}} // >= 768px
                lg={{ span: 6, offset: 1 }} // >= 992px
                xl={{ span: 6, offset: 1 }} // >= 1200px
                xxl={{ span: 6, offset: 1 }} // >= 1600px
                style={{marginTop: '18px'}}
              >
                <Row style={{backgroundColor: '#D7EFEE', height: '150px', display: 'flex', alignItems: 'flex-end'}}>
                  <div style={{color: 'rgba(0,0,0,.84)', fill: 'rgba(0,0,0,.84)', padding: '16px', fontWeight: '600', fontSize: '24px', maxWidth: '180px'}}>
                    Popular events
                  </div>
                </Row>
                <Row style={{backgroundColor: '#fafafa', height: '536px', display: 'flex', flexDirection: 'column', alignItems: 'space-between', padding: '32px'}}>
                  <Row
                    style={{marginBottom: '24px', cursor: 'pointer'}}
                    onClick={() => window.open("https://medium.com/@seunghunsunmoonlee/how-to-connect-spark-ar-studio-facebook-to-backend-server-database-4de75b5ef20f", "_blank")}
                  >
                    <Col
                      xs={{ span: 0, offset: 0 }} // <576px
                      sm={{ span: 0, offset: 0 }} // >= 576px
                      md={{ span: 0, offset: 0}} // >= 768px
                      lg={{ span: 4, offset: 0 }} // >= 992px
                      xl={{ span: 4, offset: 0 }} // >= 1200px
                      xxl={{ span: 4, offset: 0 }} // >= 1600px
                    >
                      <a
                        style={{
                          backgroundImage: "url(https://cdn-images-1.medium.com/fit/c/120/120/1*kKs0NR9xjy6vYPdGehYbxQ.jpeg)",
                          backgroundSize: 'cover',
                          backgroundPosition: "center center",
                          width: '40px',
                          height: '40px',
                          borderRadius: '100%',
                          flex: '0 0 auto',
                          display: 'block',
                        }}
                      />
                    </Col>
                    <Col
                      xs={{ span: 24, offset: 0 }} // <576px
                      sm={{ span: 24, offset: 0 }} // >= 576px
                      md={{ span: 24, offset: 1}} // >= 768px
                      lg={{ span: 19, offset: 1 }} // >= 992px
                      xl={{ span: 19, offset: 1 }} // >= 1200px
                      xxl={{ span: 19, offset: 1 }} // >= 1600px
                      style={{display: 'flex', flexDirection: 'column'}}
                    >
                      <a><h3 style={{maxHeight: '60px', overflow: 'hidden', fontWeight: '900', fontSize: '16px', transform: 'translateY(.96px)', letterSpacing: '-.17px', lineHeight: '20px', textOverflow: 'ellipsis', overflow: 'hidden', }}>
                        How to connect Spark AR Studio(Facebook) to Backend Server, Firebase Database
                      </h3></a>
                      <a style={{color: 'inherit', textDecoration: 'none'}}><div style={{fontWeight: '400', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                      </div></a>
                      <a style={{fontWeight: '400', fontSize: '14px', color: 'inherit', textDecoration: 'none'}}>
                        Seunghun Sunmoon Lee
                      </a>
                      <span className="u-noWrap" dataTooltip="Updated Oct 10" style={{whiteSpace: 'nowrap'}}>
                        <time style={{ lineHeight: '1.4', display: 'inline-block'}}>Oct 21</time>
                        <span className="middotDivider" style={{paddingRight: '.3em', paddingLeft: '.3em', fontSize: '14px'}}></span>
                        <span className="readingTime" style={{}}>3 min read</span>
                        <span className="u-paddingLeft4" style={{paddingLeft: '4px'}}>
                          <span className="svgIcon svgIcon--star svgIcon--15px">
                            <img src={starIcon} style={{width: '15px', height: '15px'}}/>
                          </span>
                        </span>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    style={{marginBottom: '24px', cursor: 'pointer'}}
                    onClick={() => window.open("https://medium.com/@seunghunsunmoonlee/crypto-currency-realtime-market-analysis-data-visualization-react-app-tutorial-4abcc857bdbe", "_blank")}
                  >
                    <Col
                      xs={{ span: 0, offset: 0 }} // <576px
                      sm={{ span: 0, offset: 0 }} // >= 576px
                      md={{ span: 0, offset: 0}} // >= 768px
                      lg={{ span: 4, offset: 0 }} // >= 992px
                      xl={{ span: 4, offset: 0 }} // >= 1200px
                      xxl={{ span: 4, offset: 0 }} // >= 1600px
                    >
                      <a
                        style={{
                          backgroundImage: "url(https://cdn-images-1.medium.com/fit/c/120/120/1*kKs0NR9xjy6vYPdGehYbxQ.jpeg)",
                          backgroundSize: 'cover',
                          backgroundPosition: "center center",
                          width: '40px',
                          height: '40px',
                          borderRadius: '100%',
                          flex: '0 0 auto',
                          display: 'block',
                        }}
                      />
                    </Col>
                    <Col
                      xs={{ span: 24, offset: 0 }} // <576px
                      sm={{ span: 24, offset: 0 }} // >= 576px
                      md={{ span: 24, offset: 1}} // >= 768px
                      lg={{ span: 19, offset: 1 }} // >= 992px
                      xl={{ span: 19, offset: 1 }} // >= 1200px
                      xxl={{ span: 19, offset: 1 }} // >= 1600px
                      style={{display: 'flex', flexDirection: 'column'}}
                    >
                      <a><h3 style={{maxHeight: '60px', overflow: 'hidden', fontWeight: '900', fontSize: '16px', transform: 'translateY(.96px)', letterSpacing: '-.17px', lineHeight: '20px', textOverflow: 'ellipsis', overflow: 'hidden', }}>
                        Crypto Currency Realtime Market Analysis, Data Visualization React App Tutorial.
                      </h3></a>
                      <a style={{color: 'inherit', textDecoration: 'none'}}><div style={{fontWeight: '400', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                      </div></a>
                      <a style={{fontWeight: '400', fontSize: '14px', color: 'inherit', textDecoration: 'none'}}>
                        Seunghun Sunmoon Lee
                      </a>
                      <span className="u-noWrap" dataTooltip="Updated Oct 10" style={{whiteSpace: 'nowrap'}}>
                        <time style={{ lineHeight: '1.4', display: 'inline-block'}}>May 1</time>
                        <span className="middotDivider" style={{paddingRight: '.3em', paddingLeft: '.3em', fontSize: '14px'}}></span>
                        <span className="readingTime" style={{}}>3 min read</span>
                        <span className="u-paddingLeft4" style={{paddingLeft: '4px'}}>
                          <span className="svgIcon svgIcon--star svgIcon--15px">
                            <img src={starIcon} style={{width: '15px', height: '15px'}}/>
                          </span>
                        </span>
                      </span>
                    </Col>
                  </Row>

                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}