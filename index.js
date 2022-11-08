const express = require("express");
const cors = require("cors");
const Data = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/allCart",async (req,res)=>{
const snapshot = await Data.get();
const list = snapshot.docs.map((doc)=>({id: doc.id,...doc.data()}));
res.send(list);
})
app.post("/create", async(req,res)=>{
    const data = req.body
    console.log('first', data);
    await Data.add(data)
    res.send({msg: "User Added"});
});
app.post("/update", async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await Data.doc(id).update(data);
    res.send({msg:'Update'});
});
app.post("/delete", async(req,res)=>{
    const id = req.body.id;
    await Data.doc(id).delete();
    res.send({msg:'Delete'});
});

app.listen(process.env.PORT || 4000, ()=>console.log("Horray!"));