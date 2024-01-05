import { ChangeEvent, useState } from "react"
import { Credentials } from "../type/api"
import { useNavigate } from 'react-router-dom'

export default function Login(){
    
    const navigate = useNavigate()
    const [apiKey, setApiKey] = useState<Credentials>({
        apikey: "",
        accountid: 0,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setApiKey(prevState =>{
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: any) =>{
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey.apikey}`).then(res => {
            res.json().then(data => {
                if(data.success){
                    console.log(data)
                    navigate('/')
                }
            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ApiKeyInput">API Key</label>
            <input id="ApiKeyInput" type="text" name="apikey" onChange={handleChange}/>
            <label htmlFor="IdAccountInput">Id Compte</label>
            <input id="IdAccountInput" type="text" name="accountid" onChange={handleChange}/>

            <button type="submit">Login</button>
        </form>
    )
}