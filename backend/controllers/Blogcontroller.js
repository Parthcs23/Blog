import Blog from "../../Thinknest/src/pages/Blog.js"

export const addblog=async(req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog)
        const imagefile=req.file

        if(!title || !description || !category || !imagefile){
            return res.json({success:false , message:"Missing required fields"})
        }
    } catch (error) {
        console.log(error.message)
    }
}