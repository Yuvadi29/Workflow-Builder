import React from 'react'

const style = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #777',
  background: '#3a2f2f',
  color: '#e6eef8',
  minWidth: 180
}

const HttpNode = ({ data }) => {
  return (
    <div style={style}>
      <strong>HTTP</strong>
      <div style={{ fontSize: 12, marginTop: 6 }}>
        {data?.label || '(no url)'}
      </div>
    </div>
  )
}

export default HttpNode
