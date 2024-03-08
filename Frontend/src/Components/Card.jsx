import axios from "axios";
import { useEffect } from "react"

export default function Card(){
    
    useEffect(() => {
        const getdata = async () => {
            const bearerToken = localStorage.getItem('CATIT');
            const response = await axios.get('http://localhost:8001/api/getDetails',{
            headers : {
                Authorization : bearerToken
            }
            })
            console.log(response);
        }
        getdata();
    },[])

    return (
        <div>
            Card
        </div>
    )
}