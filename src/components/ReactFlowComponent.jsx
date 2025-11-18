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

// Creating edges
const initialEdges = [
  {
    id: 'n1-n2', //Id should be usually given to connect from which node to which node
    source: 'n1', //source node
    target: 'n2', //destination node,
    type: 'step',
    label: 'connects with',
  },
];

const ReactFlowComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowComponent
