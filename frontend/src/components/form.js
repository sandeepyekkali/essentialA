import React from 'react'
import axios from 'axios'

class Form extends React.Component {

    constructor(props){
        super(props)

        this.state={
            nameInForm: "",
            birthday: "",
            fileUpload: null,
            options: "option 1"
        }

    }

    postData=()=>{
        var data = new FormData()
        const {nameInForm, birthday, fileUpload, options} = this.state
        const config = {
            headers:{
                'Content-type':'multipart/form-data'
            }
        }

        data.append("nameInForm",nameInForm)
        data.append("birthday",birthday)
        data.append("options",options)
        data.append("fileUpload",fileUpload)


        axios.post("api/data",data,config)
        .then(res=>{
            alert(res.data)
        })

    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleFileUpload=({target:{files}})=>{
        this.setState({
            fileUpload : files[0]
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.postData()
    }


   render(){
    return (
        <div className="dataForm">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nameInForm">Name (No whitespaces)</label>
                <input type="text" className="default" name="nameInForm" onChange={this.handleChange} 
                 placeholder="Enter Name" pattern="^[a-zA-Z0-9]*$" required/>
                
                <label htmlFor="birthday">Birthday</label>
                <input type="date" className="default" id="birthday" name="birthday" onChange={this.handleChange} required/>
                <br/>
                <label htmlFor="options">Option 1</label>
                <input type="radio" name="options" className="radio" value="option 1" onClick={this.handleChange} defaultChecked required/> 
                <label htmlFor="options">Option 2</label> 
                <input type="radio" name="options" className="radio" value="option 2" onClick={this.handleChange} required/>
                <br/>
                <input type="file" className="fileUpload" name="fileUpload" onChange={this.handleFileUpload} required/>
                <br/>
                <button type="submit" className="submit">Submit</button>
                <br></br>
            </form>
            {this.props.children}
        </div>
    )
   }
}

export default Form
