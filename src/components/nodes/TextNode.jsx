import React from 'react'

const style = {
  padding: 10,
  borderRadius: 8,
  border: '1px solid #777',
  background: '#0f172a',
  color: '#e6eef8',
  minWidth: 180
}

const TextNode = ({ data }) => {
  return (
    <div style={style}>
      <strong>Text</strong>
      <div style={{ fontSize: 12, marginTop: 6 }}>{data?.label || '(no text)'}</div>
    </div>
  )
}

export default TextNode
