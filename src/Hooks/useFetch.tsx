import {useState, useEffect, SetStateAction} from "react"
export default function useFetch(url: string) {

    const [data, setData] = useState()

    useEffect(()=>{
        (
            async function(){
                const response = await fetch(url,
                    {   method:'GET',
                        mode: 'cors',
                        headers:{
                            'Access-Control-Allow-Origin':'*'
                        },
                    });
                const res = await response.json()
                setData(res)
            }
        )()
    },[])
    return data;
}