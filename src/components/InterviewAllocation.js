import React from 'react'
import { Table, Button } from 'antd'

const dataSource = [
  {
    key: '1',
    date: '25/05/2020',
    time: '12:00am',
    room: 'Law Group Study Room 015'
  },
  {
    key: '1',
    date: '25/05/2020',
    time: '1:00pm',
    room: 'Law Group Study Room 015'
  },
  {
    key: '1',
    date: '25/05/2020',
    time: '3:00pm',
    room: 'Law Group Study Room 015'
  }
]

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: 'Room',
    dataIndex: 'room',
    key: 'room'
  }
]

class InterviewAllocation extends React.Component {
  render () {
    return (
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    )
  }
}

export default InterviewAllocation
