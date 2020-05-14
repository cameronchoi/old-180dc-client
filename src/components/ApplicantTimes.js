import React from 'react'
import { Table, Button } from 'antd'

const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
    align: 'center'
  },
  {
    title: 'Avaliability',
    dataIndex: 'available',
    align: 'center'
  }
]

class ApplicantTimes extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  }

  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render () {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      getCheckboxProps: data => ({
        disabled: data.available === 'False' // Column configuration not to be checked
      })
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <div style={{ marginBottom: 16 }}></div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.times}
          bordered={true}
          pagination={false}
          scroll={{ y: 385 }}
        />
      </div>
    )
  }
}

export default ApplicantTimes
