import {useState, useEffect} from "react"
export default function useFetch<T>(url: string) {

    const [data, setData] = useState<T>()

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