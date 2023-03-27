import { useState } from 'react'
import './App.css'

function App() {
  let [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    PinCode: 0,
    "Mobile-Number": 0
  })
  let [tabledata, setTabledata] = useState([])

  
  const handleChange = (event) => {
    let { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }
  
  const onSubmit = (event) => {
    const form = document.getElementsByName("sub")[0]
    event.preventDefault()
    setTabledata([...tabledata, data])
    form.reset();
  }

  return (
    <div >
      <form className='form' name="sub" onSubmit={onSubmit}>
        <label>FirstName</label>
        <input onChange={handleChange} name="FirstName" placeholder='First Name' type="text" required></input>
        <label>LastName</label>
        <input onChange={handleChange} name="LastName" placeholder='Last Name' type="text" required></input>
        <label>Address</label>
        <input onChange={handleChange} name="Address" placeholder='Address' type="text" required></input>
        <label>PinCode</label>
        <input onChange={handleChange} name="PinCode" placeholder='Pincode' type="number" required></input>
        <label>Mobile Number</label>
        <input onChange={handleChange} name="Mobile-Number" placeholder='Mobile' type="number" required></input>
        <button id='btn'>Save in Table</button>
      </form>
      <table className='showtable'>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>MobileNumber</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.FirstName}</td>
                <td>{ele.LastName}</td>
                <td>{ele.Address}</td>
                <td>{ele.PinCode}</td>
                <td>{ele["Mobile-Number"]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
