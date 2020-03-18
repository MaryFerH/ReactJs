import React, { Component } from 'react'
import axios from 'axios'
import UserGrid from '../organisms/UserGrid'
class Users extends Component {
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            this.setState({
                users: response.data
            })
        })
    }

    render(){
        const {users}=this.state
        return (
            <UserGrid users={users}/>
        )
    }
}

export default Users
