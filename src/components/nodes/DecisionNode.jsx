import React from 'react'

const style = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #777',
  background: '#3a4436',
  color: '#e6eef8',
  minWidth: 180
}

export default function DecisionNode ({ data }) {
  return (
    <div style={style}>
      <strong>Decision</strong>
      <div style={{ fontSize: 12, marginTop: 6 }}>
        {data?.expression || '(condition)'}
      </div>
    </div>
  )
}
