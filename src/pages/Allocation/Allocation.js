import React from 'react'
import './Allocation.css'
import InterviewAllocation from '../../components/InterviewAllocation'
import { Row, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import auth from '../Auth'

function Allocation (props) {
  return (
    <div className='allocation'>
      <Row justify='center'>
        <h1>Interview Allocation</h1>
      </Row>
      <br />
      <Row justify='center'>
        <InterviewAllocation />
      </Row>
    </div>
  )
}

export default Allocation
