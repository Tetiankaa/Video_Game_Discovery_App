import {useEffect, useState} from "react";
import {AxiosRequestConfig, CanceledError} from "axios";

import {apiClient} from "../services";
import {IResponse} from "../interfaces";

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig, deps?:any[]) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<IResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
            .then(({data:{results}})=>{
                setData(results);
                setLoading(false);
            })
            .catch(error=>{
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return ()=>controller.abort();
    }, deps ? [...deps] : []);

    return {data, loading, error}
}

export {useData}
