import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import Hero from './Hero'
import Button from './Button'

function App() {
 

  return (
    <>
    {/* <Button title="Search Now" bgColor="red" color="white"/> */}

    <Navbar className='Navb'/>
    <Hero/>
    

   <div className='grid'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

   </div>
   <Footer />
  
    
    </>
  )
}

export default App
