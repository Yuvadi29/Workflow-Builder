import React from 'react'

const Sidebar = ({ onCreateNode, onRun, onClearLog, running, log }) => {
  return (
    <div
      style={{
        width: 240,
        padding: 12,
        borderRight: '1px solid #112233',
        color: '#569ed2ff'
      }}
    >
      <h3>Nodes</h3>

      <div style={{ marginTop: 8 }}>
        {[
          ['text', 'Text'],
          ['ai', 'AI'],
          ['http', 'HTTP Request'],
          ['decision', 'Decision'],
          ['output', 'Output']
        ]?.map(([t, label]) => (
          <button
            key={t}
            onClick={() => onCreateNode(t)}
            style={{
              display: 'block',
              width: '100%',
              marginBottom: 8,
              padding: '8px 10px',
              background: '#082435',
              color: '#e6eef8',
              border: 'none',
              borderRadius: 6,
              textAlign: 'left',
              cursor: 'pointer'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <button
          style={{
            padding: '8px 12px',
            background: '#0b845e',
            color: 'white',
            border: 'none',
            borderRadius: 6
          }}
        >
          {running ? 'Running...' : 'Run'}
          {/* Run */}
        </button>
        <button
          style={{
            padding: '8px 12px',
            background: '#334155',
            color: 'white',
            border: 'none',
            borderRadius: 6
          }}
        >
          Clear Log
        </button>
      </div>

      <div style={{ marginTop: 18 }}>
        <strong>Execution log</strong>
        <div
          style={{
            marginTop: 8,
            maxHeight: 300,
            overflow: 'auto',
            padding: 8,
            background: '#021018',
            borderRadius: 6
          }}
        >
          {log.map((item, i) => (
            <div key={i} style={{ fontSize: 12, marginBottom: 8 }}>
              <div style={{ opacity: 0.8 }}>[{item.level || 'info'}]</div>
              <div style={{ whiteSpace: 'pre-wrap' }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
