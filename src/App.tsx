import './App.css'
import FormCrud from './components/form-crud/form-crud'

function App() {
  console.log(import.meta.env.VITE_PROJECT_ID)

  return (
    <>
      Game doc
      <FormCrud></FormCrud>
    </>
  )
}

export default App
