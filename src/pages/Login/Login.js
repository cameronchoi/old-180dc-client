import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import './Login.css'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8
  }
}

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='try'>
      <Row justify='center'>
        <h1>Welcome, please enter your login details</h1>
      </Row>
      <br />
      <Form
        {...layout}
        name='basic'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <br />
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <br />
        <Form.Item {...tailLayout}>
          <Row justify='center'>
            <Button type='primary' htmlType='submit' block>
              Submit
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
