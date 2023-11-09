

// upload video

const { commonAPI } = require("./commonAPI")
const { serverURL } = require("./serverURL")

 export const uploadVideo=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get uploaded videos

export const getAllvideos = async()=>{
   return await commonAPI('GET',`${serverURL}/video`,"")
}


//delete a video

export const deleteAvideo = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}



//add history

export const addHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//API to get history from jason-server

export const getHistory = async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

//API call to delete history
export const deleteVideoHistory = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


//API to add category to jason-server

export const addAllCategories = async(body)=>{
   return await commonAPI('POST',`${serverURL}/category`,body)
}

//API to get category
export const getAllCategory = async()=>{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

//API to delete category
export const deleteCategory = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//API to get particular video from server http://localhost:5000/video
export const getAvideo = async(id)=>{
   return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}


//api to update the category with new videos
export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}