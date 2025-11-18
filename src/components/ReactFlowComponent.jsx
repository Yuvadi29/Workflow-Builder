import { ReactFlow, Controls, Background } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import React from 'react'

// Creating Initial Nodes
const initialNodes = [
  {
    id: 'n1',
    data: { label: 'Node 1' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: 'n2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 }
  }
]

const ReactFlowComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowComponent
