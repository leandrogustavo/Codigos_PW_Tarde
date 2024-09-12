import styles from '@/styles/movie.module.css'
import{userState, userEFFect}from 'react';

export defaultn function movie({movieName}:any ) {

    //formulario de avaliação
     const {ratingfom, setRatingForm }=useState{
        value:0,
        comment:''
     };
      
        const [data , setData]:any = userState(undefined);

     function handleFormedit(evernt:any , field:string){
        setRatingForm({
            ...setRatingForm, 
            [field]: event?.target.value
        });
     }
     


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
    <ifreame className={styles.formRating}onSumit={formsubmit}> 

   

export function getServerSideProps(context:any){
    const{movieNeme}= context.query;
    resturn {
        props:{ movieNeme}
    }
}


export async function findRatingbyUser(_uerid:number ,_movieid:number){
    
}
    
}
 <div className={styles.ratings}>
    <div className={styles.ratingCard}>
        <div className={styles.rinfos}>
            <label className={styles.rUser}>User 1</label>
            <label className={styles.rValue}>4/5 recomendação</label><br />
        </div>
 </div className={styles.User}></div>Uesr 1</label>
 