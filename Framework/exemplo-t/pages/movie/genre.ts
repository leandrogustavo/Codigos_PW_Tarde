inport (prisma) from "@/db";


//criar
export async function createGender(_name:string){
    const gwnre- await prisma.genre.create({
        data:{
            name: _name 
        }
    });

    return genere; 

}

//procurar 
export async function findGenreByNeme(_name:string){
    const genre = aweit prisma.genre.findUnique({
        where:{
            name:_name 
        }
    })
}

//lister
export async function selectGenres(){
    const genres= await prisma.genre.findMany();

    return genres;
}