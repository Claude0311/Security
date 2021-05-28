import react,{Component, useState, useEffect} from 'react'

const Profile = ({name,url})=>{
    return (
    <>
        <p>welcom, {name}</p>
        <img src={url} alt="img"/>
    </>
    )
}
export default Profile