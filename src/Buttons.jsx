import React, { useState } from 'react'
import "./Buttons.custom.css"

function Buttons() {
    let [data, setData] = useState({
        "Button Name": "",
        "When I Clicked": ""
    })
    let [click, setClick] = useState([])

    const handleClick = (event) => {
        let { name } = event.target
        setData({
            "Button Name": name,
            "When I Clicked": new Date().toString().slice(16, 25)
        })
        setClick([...click,
        {
            "Button Name": name,
            "When I Clicked": new Date().toString().slice(16, 25)
        }]
        )
    }

    return (
        <div>
            <div >
                <div className='buttons'>
                    <button name='Button A' onClick={handleClick}>Button A</button>
                    <button name='Button B' onClick={handleClick}>Button B</button>
                </div>
                <div className='buttons'>
                    <button name='Button C' onClick={handleClick}>Button C</button>
                    <button name='Button D' onClick={handleClick}>Button D</button>
                </div>
            </div>
            <table className='showtable' id='show'>
                <thead>
                    <tr>
                        <th>Button Name</th>
                        <th>When I Clicked</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        click.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ele["Button Name"]}</td>
                                    <td>{ele["When I Clicked"]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Buttons