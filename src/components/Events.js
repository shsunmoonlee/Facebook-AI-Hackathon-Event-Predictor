import React, {Fragment} from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'
import { Input, Tag, Avatar, Divider, List, Button, Popconfirm, Icon } from 'antd'
import IconText from 'components/IconText'
import LoadSpinner from 'components/LoadSpinner'
const CheckableTag = Tag.CheckableTag;
const Search = Input.Search;

export default class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
      tableData: null,
      url: '',
      error: '',
      user: { role: [] },
      tableReady: false,
      selectedTags: [],
      categoryResult: '',
    }
  }

  async componentDidMount() {
    const categoriesOption = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer YQVEX6PF66QPHON2KHD3' },
      params: {
      },
      url: 'https://www.eventbriteapi.com/v3/categories/',
    };
    const categoriesResponse = await axios(categoriesOption);
    this.categories = categoriesResponse.data.categories

    const options = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer YQVEX6PF66QPHON2KHD3' },
      params: {
        'location.address': 'berlin',
        'sort_by': 'date',
      },
      url: 'https://www.eventbriteapi.com/v3/events/search/',
    };
    const response = await axios(options);
    this.events = response.data.events
    this.events = this.events.filter(event => (event.locale.includes("en") && event.description.text ))
    this.setState({user: this.user, posts: this.events})
  }

  async handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    const options = {
      method: 'GET',
      headers: { 'Authorization': 'Bearer YQVEX6PF66QPHON2KHD3' },
      params: {
        'location.address': 'berlin',
        'sort_by': 'date',
        'categories': `${nextSelectedTags.map(tag => tag.id).join(',')}`
      },
      url: 'https://www.eventbriteapi.com/v3/events/search/',
    };
    const response = await axios(options);
    this.events = response.data.events
    this.events = this.events.filter(event => (event.locale.includes("en") && event.description.text ))
    this.setState({ selectedTags: nextSelectedTags, posts: this.events });
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
  }

  render() {
    const { selectedTags } = this.state;
    if(!this.state.posts) {
      return <Fragment><h1 style={{textAlign: 'center', fontSize: '50px'}}>Loading</h1><LoadSpinner /></Fragment>
    }
    return (
      <Fragment>
        <Row
          type="flex" justify="center"
        >
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0}}
            lg={{ span: 24, offset: 0 }}
          >
            <Divider />
          </Col>
        </Row>
      <Row
        type="flex" justify="center"
      >
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 24, offset: 0}}
          lg={{ span: 24, offset: 0 }}
        >
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                // console.log(page);
              },
              pageSize: 10,
            }}
            dataSource={this.state.posts}
            header={
              <Fragment>
                <div style={{fontSize: '24px', fontWeight: '600'}}>Events in Berlin from Today</div>
                <Row>
                  <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
                  {this.categories.map(tag => (
                    <CheckableTag
                      key={tag.id}
                      checked={selectedTags.indexOf(tag) > -1}
                      onChange={checked => this.handleChange(tag, checked)}
                    >
                      {tag.name}
                    </CheckableTag>
                  ))}
                </Row>
              </Fragment>
            }
            footer={<div><b></b> </div>}
            renderItem={item => (
              <List.Item
                key={item.name.text}
                actions={[<div>{item.start.local}</div>, <IconText type="star-o" text="" />]}
                onClick={() => window.open(item.url, "_blank")}
                extra={
                  <a
                    style={{
                      backgroundImage: `url(${item.logo ? item.logo.url : 'https://cdn-images-1.medium.com/fit/c/120/120/1*kKs0NR9xjy6vYPdGehYbxQ.jpeg'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: "center center",
                      width: '150px',
                      height: '150px',
                      flex: '0 0 auto',
                      display: 'block',
                    }}
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={''} />}
                  title={<a style={{fontSize: '24px', fontWeight: '600'}} href=''>{item.name.text}</a>}
                  description={`${item.description.text ? item.description.text.substring(0, 160) : item.description.text }...`}
                />
                {this.categories.find(category => category.id === item.category_id) ? this.categories.find(category => category.id === item.category_id).name : item.category_id}
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" style={{paddingTop: '35px', paddingBottom: '10px',}}>
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 12, offset: 0}}
          lg={{ span: 2, offset: 0 }}
          style={{cursor: 'pointer'}}
          onClick={() => window.open('https://www.seunghunlee.net', '_blank')}
        >
          <a target="_blank" href="">
            <img
              src={'https://cdn-images-1.medium.com/fit/c/120/120/1*kKs0NR9xjy6vYPdGehYbxQ.jpeg'}
              style={{width: '60px', height: '60px', borderRadius: '100%'}}
            />
          </a>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 12, offset: 0}}
          lg={{ span: 22, offset: 0 }}
          style={{ paddingLeft: "15px", display: 'flex', flexDirection: 'column', alignItems: 'space-between', color: 'rgba(0,0,0,.84)', fontSize: "16px", lineHeight: '20px', fontWeight: '900' }}
          onClick={() => window.open('https://www.seunghunlee.net', '_blank')}
        >
          <div style={{}}>{''}</div>
          <div style={{color: 'rgba(0,0,0,.54)'}}>{ `🎹🎸🕺🏂 Full Stack React, React Native, Machine Learning Developer. Follow me@ SeunghunLee.net instagram: seunghun.sunmoon.lee twitter: seunghunSunmoon`}</div>
        </Col>
      </Row>          
    </Fragment>
    )
  }
}
