import {
  ReactFlow,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  BackgroundVariant
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback, useState } from 'react'

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
const initialEdges = [];

const ReactFlowComponent = () => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  // Add Event handlers which will be used to update the state of our nodes and edges when changes occur like dragging or deleting element
  const onNodesChange = useCallback(changes =>
    setNodes(nodesSnapshot => applyNodeChanges(changes, nodesSnapshot), [])
  )

  const onEdgesChange = useCallback(changes =>
    setEdges(edgeSnapshot => applyEdgeChanges(changes, edgeSnapshot), [])
  )

  const onConnect = useCallback(
    params => setEdges(edgesSnapshot => addEdge(params, edgesSnapshot)),
    []
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background color='#ccc' variant={BackgroundVariant.Dots}/>
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowComponent
