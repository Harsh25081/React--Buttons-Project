import React, { useState } from 'react'
import "./AddMore.css"

function AddMore() {
    let [data, setData] = useState({
        inp1: "",
        inp2: ""
    })
    let [show, setShow] = useState(false)

    const handlechange = (event) => {
        let { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <div>
            <div className='inputtext'>
                <input name='inp1' placeholder='Input 1' type="text" onChange={handlechange}></input>
                {show && <input name='inp2' placeholder='Input 2' type="text" onChange={handlechange}></input>}
            </div>
            <button onClick={() => { setShow(!show) }}>{!show ? "Add More" : "Show Less"}</button>
            <div id='showdata'>
                {data.inp1&&<p>Input 1 : {data.inp1}</p>}
                {show && <div>
                    {data.inp2&&<p>Input 2 : {data.inp2}</p>}
                </div>}
            </div>
        </div>
    )
}

export default AddMore