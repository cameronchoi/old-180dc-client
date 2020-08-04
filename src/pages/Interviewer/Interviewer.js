import React, { Component, useState } from 'react'
import { Button, Row, Col } from 'antd'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Interviewer.css'
import MarkerTimes from '../../components/MarkerTimes'
import interviewerTimes from './interviewerTimes'
import auth from '../Auth'

const Interviewer = props => {
  const [date, setDate] = useState()
  const [times, settimes] = useState(interviewerTimes)

  const onChange = date => {
    console.log(date.toISOString())
    setDate(date)
  }

  return (
    <div className='Interviewer'>
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
          <Calendar onChange={onChange} value={date} />
        </Col>
        <Col className='times' span={12}>
          <MarkerTimes times={interviewerTimes} />
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
              props.history.push('/success')
            })
          }}
        >
          Submit
        </Button>
      </Row>
    </div>
  )
}

export default Interviewer
