import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Interviewer.css'
import MarkerTimes from '../../components/MarkerTimes'
import interviewerTimes from './interviewerTimes'

class Interviewer extends Component {
  state = {
    date: new Date(),
    interviewerTimes: interviewerTimes
  }

  onChange = date => {
    this.setState({ date })
    console.log(date)
  }

  render () {
    return (
      <div className='Interviewer'>
        <Row justify='center'>
          <h1>Interviewer Page</h1>
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
            <MarkerTimes times={this.state.interviewerTimes} />
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

export default Interviewer
