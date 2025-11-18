import React from 'react'

const style = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #777',
  background: '#243b3b',
  color: '#e6eef8',
  minWidth: 180
}

export default function OutputNode ({ data }) {
  return (
    <div style={style}>
      <strong>Output</strong>
      <div style={{ fontSize: 12, marginTop: 6 }}>{data?.format || 'raw'}</div>
    </div>
  )
}
