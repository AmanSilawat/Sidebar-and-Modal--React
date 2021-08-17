import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const {open_sidebar, open_modal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={open_sidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={open_modal}>show modal</button>
    </main>
  )
}

export default Home
