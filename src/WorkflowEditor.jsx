import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState
} from '@xyflow/react'
import React, { useState } from 'react'
import { nodeTypes } from './nodeTypes'
import Sidebar from './Sidebar'

const WorkflowEditor = () => {
  // Variable Initialisation
  const [nodes, setNodes, onNodesChange] = useNodesState([
    { id: 'start', type: 'start', position: { x: 50, y: 40 }, data: {} }
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [running, setRunning] = useState(false)
  const [log, setLog] = useState([])

  //   Function to create Node
  const createNode = type => {
    const id = `${type}_${Date.now()}`
    setNodes(nds =>
      nds.concat({ id, type, position: { x: 250, y: 150 }, data: {} })
    )
  }

  //   Function to run
  const run = async () => {
    setRunning(true)
    setLog([])
    const startNodes = nodes.filter(n => n.type === 'start')
    // Add function to runWorkflow below

    setRunning(false)
  }

  return (
    <div>
      <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
        <Sidebar
          onCreateNode={createNode}
          onRun={run}
          onClearLog={() => setLog([])}
          running={running}
          log={log}
        />
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={params =>
              setEdges(eds =>
                addEdge(
                  { ...params, markerEnd: { type: MarkerType.Arrow } },
                  eds
                )
              )
            }
            fitView
          >
            <Background color='#ccc' variant={BackgroundVariant.Dots} />

            <MiniMap nodeStrokeWidth={3} />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default WorkflowEditor
