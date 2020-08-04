import React from 'react'
import './success.css'
import { Row, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import auth from '../Auth'

function Success (props) {
  return (
    <div className='success'>
      <Row justify='center'>
        <h1 style={{ fontSize: '40px' }}>Success</h1>
      </Row>
      <Row justify='center'>
        <CheckCircleTwoTone style={{ fontSize: '60px' }} />
      </Row>
      <br />
      <br />
      <Row justify='center'>
        <Button
          type='primary'
          size='large'
          onClick={() => {
            auth.login(() => {
              props.history.push('/allocation')
            })
          }}
        >
          View Interview Allocation
        </Button>
      </Row>
    </div>
  )
}

export default Success
