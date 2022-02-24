import { func } from 'prop-types'
import React from 'react'
import FilterUser from './FilterUser'

function UserList({users}){
    return(
        <>
        <h1>*유용한 사용자 정보*</h1>
        {users.map( (user, name) => {
            return (
                <FilterUser key={name} {...user}></FilterUser> 
            )
        })}
        </>
    )
}
export default UserList