import './App.css'
import Header from './layout/header/header'
import Footer from './layout/footer/footer'
import FormGameCrud from './components/form-crud/form-game-crud'

function App() {
  console.log(import.meta.env.VITE_PROJECT_ID)

  return (
    <>
      <Header></Header>
      <FormGameCrud></FormGameCrud>
      <Footer></Footer>
    </>
  )
}

export default App
