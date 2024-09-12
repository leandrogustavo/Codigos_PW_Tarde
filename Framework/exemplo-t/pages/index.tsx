import { checkToken } from "@/services/tokenConfig";
import { getCookie } from "cookies-next";
import styles from "@/styles/home.module.css"
import{useState, usEffect} from "react";

export default function Home() {
const[data , setData]= useState(underfined);

async function fetchData() {
  try{
    const response =await fetch('/api/action/movie/selet',
       ; "get"
    
    )
  }
cosnts responseJson = await Response.json();

setData(responsajson.data);
}
catch(err){
  console.log(err);
}
}

useEffect()=>{

  fetchuData();
  },[])

function exibirfilmes(){
  console.log(data);
 
}
 useEffect(()=>{
  fetchData();
 },[])

 function logOut(){
  deleteCookie('authorization');
  Router.push('/user/login'); }

function moviClick(movieName: string){
  Router.push('/movi')
}

  return(
  <main id=(styles.main) className="flex min-h-screen flex-col">
    <button onClick={exibirFilmes}> Printar os filmes </button>
)

 Link herf={'/movie/create'}

 return (
    <main id={styles.main} className="flex min-h-screen flex-col">
      {/* Barra superior de navegação */}
      <div onClick={()=>{movieClick(mocie.name)}className={styles.card}>
      <nav className={styles.navBar}>
        <img src="/pipoca.png" className={styles.icon} alt="" />

        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchBar} />
          <button className={styles.send}>Enviar</button>
        </div>

        <button className={styles.logoutBtn}>Logout</button>

      </nav>

      {/* Container principal. Ele vai conter o GRID */}
      <div className={styles.mainContainer}>

        {/* Painel esquerdo */}
        <div className={styles.leftContainer}>

        </div>

        {/* Painel direito */}
        <div className={styles.rightContainer}>
            
            (data!= undeFined && data instanceof array? 

            <div className={styles.card}>
                <img src="/card.jfif" className={styles.cardImg} alt="" />
                <div className={styles.cardInfos}>
                  <h2>(movie.name)</h2>
                  <p>(movie.releaseDate)</p>
                  <p>Generos do Filme</p>
                  <p>(movie.description))</p>
                </div>

            </div>
            ))
            :
            <p>movies found</p>
            }
        </div>

      </div>

    </main>
  );
}

export function getServerSideProps({ req, res }: any) {
  try {
    const token = getCookie('authorization', { req, res });

    if (!token) {
      throw new Error('Invalid Token');
    }
    else {
      checkToken(token);
    }

    return {
      props: {}
    }

  }
  catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/user/login'
      },
      props: {}
    }
  }.

  forctin formSubmit(event:any){}