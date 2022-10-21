import '../App.css';
import {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
function Add() {
  const [discordid, setdiscordid] = useState("");
  const [points,setpoints] = useState(2);

function CheckLogin() {
  if (localStorage.getItem("login") === "yes") {
    console.log("logged in!")
  } else {
    Swal.fire(
      'เกิดข้อผิดพลาด',
      'กรุณาลงชื่อเข้าใช้',
      'error'
    ).then(() => {
      window.location = "/login"
    })
  }
}

window.onload = CheckLogin()

  const AddCustomer = () => {
    Axios.post('http://localhost:3001/add', { discordid: discordid, points: points }).then((response) => {
      console.log(response.data.message)
      if (response.data.message === "Success!") {
        Swal.fire({
          title: 'สำเร็จ',
          text: 'ข้อมูลลูกค้าได้ถูกเพิ่มแล้ว!',
          icon: 'success',
        }).then(() => {
          window.location.reload();
        })
      } else {
        if (response.data.message === "Added Already!") {
          Swal.fire({
            title: 'ไม่สำเร็จ',
            text: 'ข้อมูลลูกค้าถูกเพิ่มแล้ว',
            icon: 'error',
          }).then(() => {
            window.location.reload();
          })
        }
      }
      /// window.location.reload();
    }).catch(() => {
      Swal.fire({
        title: 'Error',
        text: 'ไม่สามารถเพิ่มลูกค้าได้ กรุณารอ 2-3 วิ',
        icon: 'error',
      }).then(() => {
      window.location.reload()
      })
    })
  }
  return (
    <div className="App">
      <h1>Add Customer | เพิ่มข้อมูลลูกค้า [กรุณาเช็คด้วยว่าลูกค้ามีบช. ยัง]</h1> 
      <pre />
      <p>Discord ID ของลูกค้า (Ex. 899947696650059786)</p>
      <input type="text" onChange={(e) => {
        setdiscordid(e.target.value)
      }} />
      <pre />
      <p>คะแนน [Optional, Default = 2 Points]</p>
      <input defaultValue={2} type="number" onChange={(e) => {
        setpoints(e.target.value)
      }}/>
      <pre />
      <button onClick={AddCustomer}>เพิ่มข้อมูล</button>
    </div>
  )
}

export default Add