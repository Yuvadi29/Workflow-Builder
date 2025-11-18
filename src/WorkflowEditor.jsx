import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react'
import React from 'react'
import { nodeTypes } from './nodeTypes'

const WorkflowEditor = () => {
  // Variable Initialisation
  const [nodes, setNodes, onNodesChange] = useNodesState([
    { id: 'start', type: 'start', position: { x: 50, y: 40 }, data: {} }
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  return (
    <div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={params =>
            setEdges(eds =>
              addEdge({ ...params, markerEnd: { type: MarkerType.Arrow } }, eds)
            )
          }
          fitView
        >
          <Background color='#ccc' variant={BackgroundVariant.Dots} />

          <MiniMap nodeStrokeWidth={3} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  )
}

export default WorkflowEditor
