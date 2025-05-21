import './App.css'
import Landing from './pages/Landing'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <AnimatedCursor 
          trailingSpeed={8}
          innerSize={8}
          outerSize={50}
          innerScale={1}
          outerScale={2}
          outerAlpha={0} 
          outerStyle={{
            border: '2px solid rgba(97, 122, 246, 0.26)'
          }}
          innerStyle={{
            backgroundColor: '#474444'
          }}/>
      <Landing />
    </>
  )
}

export default App
