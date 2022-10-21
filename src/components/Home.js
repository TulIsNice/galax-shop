import React from 'react'
import '../App.css'
function Home() {
  function Add() {
    window.location = "/add"
  }
  function Find() {
    window.location = "/find"
  }
  return (
    <div className='App'>
        <h1>Galax-Shop Backend</h1>
        <pre />
        <button onClick={Add}>เพิ่มข้อมูลลูกค้า</button>
        <pre />
        <button onClick={Find}>ตรวจสอบลูกค้า</button>
    </div>
  )
}

export default Home