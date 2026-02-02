import {Router} from "express"
import axios from "axios"
const router=Router();
router.get('/home',async (req,res)=>{
    try{
        const newsData=await axios.get("https://newsdata.io/api/1/latest?apikey=pub_bc2beff7e900460095cf0e7b96302c23&q=Medical&country=in");
        res.send(newsData.data.results);     
    }
    catch(err){
        console.log(err.message);
    }
})
export default router;