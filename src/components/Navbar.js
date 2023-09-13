import React, {useState}from 'react'
export default function Navbar(props) {
 // to create dark mode
 const [btn, setBtn] = useState("Enable Light Mode")
 const [myStyle, setMyStyle] = useState({
   color: "black",
   backgroundColor: "white",
 })
 const toggleStyle = () => {
   if (myStyle.color === 'black') {
     setMyStyle({
       color: "white",
       backgroundColor: 'black',
     })
     setBtn("Enable Light Mode")
   }
   else {
     setMyStyle({
       color: 'black',
       backgroundColor: 'white',
     })
     setBtn("Enable Dark Mode")
   }
 }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">{props.title}</a>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form> */}
                     <button className="btn btn-primary " style={myStyle} onClick={toggleStyle}>{btn}</button>
                </div>

            </nav>
        </>
    )
}
