import React from 'react'
import {Spin} from 'antd'
const LoadSpinner = () => (
  <div
    className="example"
    style={{
      textAlign: 'center',
      background: 'grba(0,0,0,0.05)',
      borderRadius: '4px',
      padding: '30px 50px',
      margin: '20px 0',
      marginBottom: '20px',
    }}
  >
    <Spin size="large" />
  </div>
)

export default LoadSpinner