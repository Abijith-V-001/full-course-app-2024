const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const { coursemodel }=require("./Models/Course")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abijith0a31:abijith1415@cluster0.fodkdeb.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let Course=new coursemodel(input)
    Course.save()
    console.log(Course)
    res.json({"status": "success"})
})

app.post("/search",(req,res)=>{
    res.send("hi")
})

app.get("/delete",(req,res)=>{
    res.send("hloooo")
})
app.get("/view", (req, res) => {

    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8083,()=>{
    console.log("server started")
})