import React from 'react'

const style = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #777',
  background: '#2a2f4a',
  color: '#e6eef8',
  minWidth: 180
}

const AiNode = ({ data }) => {
  return (
    <div style={style}>
      <strong>AI</strong>
      <div style={{ fontSize: 12, marginTop: 6 }}>{data?.label || 'process'}</div>
    </div>
  )
}

export default AiNode
