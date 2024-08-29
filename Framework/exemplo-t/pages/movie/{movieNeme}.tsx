

export defaultn function movie({movieName}:any ) {

    return(
        <main className="flex min-h-screen flex-col">
         
        <div>
        <img src="" alt=""/>
        <div>
        <h2>Nome do filme </h2>
        <p>data de lançamento</p>
        <p>descrição do filme</p>
        <p>generos</p>
        </div>
    </div>
    
    
}


export function getServerSideProps(context:any){
    const{movieNeme}= context.query;
    resturn {
        props:{ movieNeme}
    }
}