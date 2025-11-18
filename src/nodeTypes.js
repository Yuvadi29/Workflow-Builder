import AiNode from './components/nodes/AiNode'
import DecisionNode from './components/nodes/DecisionNode'
import HttpNode from './components/nodes/HttpNode'
import OutputNode from './components/nodes/OutputNode'
import StartNode from './components/nodes/StartNode'
import TextNode from './components/nodes/TextNode'

export const nodeTypes = {
  start: StartNode,
  text: TextNode,
  ai: AiNode,
  http: HttpNode,
  decision: DecisionNode,
  output: OutputNode
}
