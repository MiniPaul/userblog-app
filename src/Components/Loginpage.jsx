import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {

    const[input,setInput]=new useState(
        [
            {
                "name":"",
                "age":"",
                "mobno":"",
                "address":"",
                "pincode":"",
                "email":"",
                "password":"",
            }
        ]
    ) 
    
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
      console.log(input)
      axios.post("http://localhost:3001/api/userblog/signin",input).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="success") {
                  alert("Successfully added")
                  setInput(
                    {
                        "name":"",
                        "age":"",
                        "mobno":"",
                        "address":"",
                        "pincode":"",
                        "email":"",
                        "password":"",
                    }
                  )
              } else {
                  alert("Something went wrong")
              }
          }
      )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-info">Log in</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <Link href="/signup">New User Click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Loginpage

