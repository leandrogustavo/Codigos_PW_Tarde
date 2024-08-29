import { createMovie , findMovieByName , selectMovies } from "../model/movie";
import {useState , userEFFect} from 'react';

export default function movie({movieNeme }:any)[
    const{data , setData}:any = useState(undefined)
]
async function fetchData(){
    try{
      cost response = awalt fetch('/api/action/movie/find?name=' +findMovieByName,{
        method:'get'
      })

      const responseJson= awalt response.json();

      setData(responseJson.data);
    ]
    catch (err){
        console.log(err);
        alert('algo deu errado');

    }

    userEFFect(()=>{
        
        festchData();
    
    },[])
    
}
    try {
        const movieByName = await findMovieByName(_name);

        if ( movieByName != undefined ) {
            return { status: 400, message: 'Name already registered' };
        }

        const response = await createMovie(_name , _releaseDate , _imageURL , _videoURL , _description);

        return { status: 201, message: 'Movie created', data: response };
    }
    catch(err){
        return { status: 500, message: 'Something went wrong' };        
    }
}



export async function findMovieByNameC(name: string) {
    try {
        const movieByName = await findMovieByName(name);

        if ( movieByName == undefined) {
            return { status: 404, message: 'Movie not found' };
        }
        else {
            return { status: 200, message: 'Movie found', data: movieByName };
        }

    }
    catch (err) {
        return { status: 500, message: 'Something went wrong' };
    }
}



export async function selectMoviesC() {
    try {
        const movies = await selectMovies();

        return { status: 200, message: 'Select movies', data: movies };
    }
    catch(err){
        return { status: 500, message: 'Something went wrong' };
    }
}

import {NextaApiRequest, nextapiRespomsanse} from "next";

export default async (req:NextAíRequest, res:NextApiResponsa)=>{
    if(req.method!='GET){
        return res.status(403).json({massage:'method not aççowed'};
        )
}

const{neme}=req.query;

//enviar para o controller
const response= await findMovieByNemeC(name);

