import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import "../App.css"
function Login() {
    const [password, setPassword] = useState("");

    const Check = () => {
        Axios.post('https://galax-shop-server.herokuapp.com/check',{
            password: password
        }).then((response) => {
            if (response.data.message === "Correct!") {
                localStorage.setItem("login","yes")
                Swal.fire({
                    title: 'สำเร็จ',
                    text: 'เข้าสู่ระบบแล้ว!',
                    icon: 'success',
                  }).then(() => {
                    window.location = "/"
                  })
            } else {
                localStorage.setItem("login", "no")
                Swal.fire({
                    title: 'ไม่สำเร็จ',
                    text: 'password ผิด',
                    icon: 'error',
                  }).then(() => {
                    window.location.reload()
                  })
            }
        })
    }
  return (
    <div className='App'>
        <h1>ลงชื่อเข้าใช้</h1>
        <pre />
        <p>รหัสผ่าน Backend</p>
      <input type="text" onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <pre />
      <button onClick={Check}>ลงชื่อเข้าใช้</button>
    </div>
  )
}

export default Login