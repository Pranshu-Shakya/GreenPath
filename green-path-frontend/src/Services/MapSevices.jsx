import axiosInstance from "../Utils/axiosInstance";

export const getRoutesService=async(data)=>{
    const res=await axiosInstance.get(`/route?start=${data.startStr}&end=${data.endStr}`);
    return res;
} 