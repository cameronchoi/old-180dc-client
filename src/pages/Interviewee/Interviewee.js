import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Interviewee.css'
import ApplicantTimes from '../../components/ApplicantTimes'
import intervieweeTimes from './intervieweeTimes'
import auth from '../Auth'

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
          <h1 className='page-title'>Enter your available times</h1>
        </Row>
        <Row justify='center'>
          <p>
            1. Click a day on the calendar to display all the available times
            during that day.
          </p>
        </Row>
        <Row justify='center'>
          <p>2. Click on all your available times during that specific day.</p>
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
        <Row justify='center'>
          <Button
            type='primary'
            size='large'
            onClick={() => {
              auth.login(() => {
                this.props.history.push('/success')
              })
            }}
          >
            Submit
          </Button>
        </Row>
      </div>
    )
  }
}

export default Interviewee
