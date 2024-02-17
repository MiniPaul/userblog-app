import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewmyPost = () => {

    const [input, setInput] = new useState(
        {
            "userId": sessionStorage.getItem("userid")
        }
    )

    const [data, setData] = new useState([])

    const getData = () => {
        axios.post("http://localhost:3001/api/userblog/post/viewmypost",input).then(
            (response) => { 
                console.log(input)
                setData(response.data) })
    }

    useEffect(()=>{getData()},[])

    const deletePost = (id)=>{
        let data = {"_id":id}
        axios.post("http://localhost:3001/api/userblog/post/delete",data).then((response)=>
        {
          if (response.data.status=="success") {
            alert("Successfully deleted")
            getData()
          } else {
            alert("Something went wrong")
          }
        })
      }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <br /><br /> <h1><center>View My Post</center></h1>
                            </div>
                            {
                                data.map((value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card border-success mb-3">
                                            <div className="card-body text-success">
                                                <p className="card-text">Post: {value.post}</p>
                                                <p className="card-text">Date: {value.postedDate}</p>
                                                <button className="btn btn-danger" onClick={()=>{deletePost(value._id)}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewmyPost






                                