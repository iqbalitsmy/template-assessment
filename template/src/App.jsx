import './App.css'
import Template1 from './Template/Template1'
import Template2 from './Template/Template2'
import Template3 from './Template/Template3'

function App() {

  return (
    <main className="container mx-auto py-10 flex gap-16 flex-wrap justify-center bg-gray-100">
      <Template1 />
      <Template2 />
      <Template3 />
    </main>
  )
}

export default App
