import axiosInstance from "../Utils/axiosInstance";

export const getRoutesService=async(data)=>{
    const res=await axiosInstance.get(`/route?start=${data.startStr}&end=${data.endStr}`);
    return res;
} 


export const reportIncidentService=async(data)=>{
    const res=await axiosInstance.post("/incident/report",data);
    console.log(res.status);
    return res;
}
