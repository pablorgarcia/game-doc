import './App.css'
import List from './components/list/list'

function App() {
  console.log(import.meta.env.VITE_PROJECT_ID)
  return (
    <>
      Game doc
      <List></List>
    </>
  )
}

export default App
