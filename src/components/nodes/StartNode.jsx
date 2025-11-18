import React from 'react';

const style = {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #777"
}

const StartNode = ({data}) => {
  return (
    <div style={style}>
    <strong>Start</strong>
    <div style={{fontSize: 12, marginTop: 6}}>
        {data?.label || "Begin"}
    </div>
    </div>
  )
}

export default StartNode