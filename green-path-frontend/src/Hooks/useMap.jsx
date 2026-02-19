import { useState } from "react"
import { getRoutesService, reportIncidentService } from "../Services/MapSevices";

export function useAiroMap(){
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const getRoutes=async(data)=>{
        setLoading(true);
        setError(true);
        try{
            const res=await getRoutesService(data);
            console.log(res.data);
            return res.data;
        } catch (err){
             setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    const reportIncident=async(data)=>{
        setLoading(true);
        setError(true);
        try{
            const res=await reportIncidentService(data);
            console.log(res.data);
            return res.data;
        } catch (err){
             setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }
    return {
        getRoutes,
        reportIncident,
        loading,
        error,
    }
}