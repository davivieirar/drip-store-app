import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const buscarProdutos = async () => {
  const [data, setData] = useState([])

    const response = await axios.get('http://localhost:5000/produtos')
    console.log('response', response.data)

  }

  useEffect(() => {
    buscarProdutos();
  }, []);


  return (
  <>

  {JSON.stringify(data)}
  <Table />
  </>
  )
}

export default App
