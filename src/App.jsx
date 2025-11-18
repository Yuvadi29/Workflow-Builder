import React from 'react'
import ReactFlow from './components/ReactFlowComponent'
import WorkflowEditor from './WorkflowEditor'

const App = () => {
  return (
    <div>
      <h1 style={{ fontFamily: 'system-ui' }}>
        Workflow Builder using React Flow
      </h1>
      {/* <ReactFlow /> */}
      <WorkflowEditor />
    </div>
  )
}

export default App
