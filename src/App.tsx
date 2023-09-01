import './App.css'
import FormGameCrud from './components/form-crud/form-game-crud'

function App() {
  console.log(import.meta.env.VITE_PROJECT_ID)

  return (
    <>
      Game doc
      <FormGameCrud></FormGameCrud>
    </>
  )
}

export default App
