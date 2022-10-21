import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import '../App.css'
function Find() {
    const [discordid, setdiscordid] = useState("");
    function FC() {
        if (discordid === "") {
            Swal.fire({
                title: 'เกิดข้อผิดพลาด',
                text: 'กรุณาใส่ discord id ลูกค้า',
                icon: 'error',
              }).then(() => {
              window.location.reload()
              })
        } else {
            Axios.post('https://galax-shop-server.herokuapp.com/find',{
                discordid: discordid
            }).then((response) => {
                if (response.data.length > 0) {
                    console.log(response.data)
                    const s1 = `ID: ` + response.data[0].discordid
                    const s2 = `คะแนน: ` + response.data[0].points
                    Swal.fire(
                        'ข้อมูลลูกค้า:',
                       s1 + "\n" + s2
                    )
                } else {
                    Swal.fire({
                        title: 'เกิดข้อผิดพลาด',
                        text: 'ไม่พบข้อมูลลูกค้า',
                        icon: 'error',
                      })
                }
            })
        }
    }
  return (
    <div className='App'>
        <h1>ตรวจสอบลูกค้า</h1>
        <pre />
        <p>Discord ID ของลูกค้า (Ex. 899947696650059786)</p>
      <input type="text" onChange={(e) => {
        setdiscordid(e.target.value)
      }} />
      <pre />
      <button onClick={FC}>ตรวจสอบ</button>
    </div>
  )
}

export default Find