import {nextApiRequest , nextApiResponse }from "netx";
import{ createMovieC }from "../.../controller/movieContoller";
import { NextApiHandler } from "next";

export default async ( req:NextApiRequest, res:NextApiHandler) =>{
    if ( req.method!= 'post') {
        return res.status(405).json({message:'method not allowed'})
    }
}
const ( name , relesseDate , imageURL , videoURL , description) = req.body;

//enviar para o controller

return resizeBy.status(response.status).json({message: Response.message});