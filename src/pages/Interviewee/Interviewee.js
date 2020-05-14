import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Interviewee.css'
import ApplicantTimes from '../../components/ApplicantTimes'
import intervieweeTimes from './intervieweeTimes'

class Interviewee extends Component {
  state = {
    date: new Date(),
    intervieweeTimes: intervieweeTimes
  }

  onChange = date => {
    this.setState({ date })
    console.log(date)
  }

  render () {
    return (
      <div className='Interviewee'>
        <Row justify='center'>
          <h1>Interviewee Page</h1>
        </Row>
        <Row justify='center'>
          <p>Enter available times</p>
        </Row>
        <br />
        <Row align='middle'>
          <Col span={12}>
            <Calendar onChange={this.onChange} value={this.state.date} />
          </Col>
          <Col className='times' span={12}>
            <ApplicantTimes times={this.state.intervieweeTimes} />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row justify='center'>
          <Button type='primary'>Submit</Button>
        </Row>
      </div>
    )
  }
}

export default Interviewee
