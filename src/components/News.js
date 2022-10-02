import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'


export default function News(props) {

//  const  article = [
//     {
//         "source": {
//             "id": null,
//             "name": "Business Insider South Africa"
//         },
//         "author": "Huileng Tan",
//         "title": "Businessinsider.co.za | Elon Musk says Trump should 'hang up his hat & sail into the sunset'",
//         "description": "In a second tweet, Musk wrote that there should be a \"legal maximum age\" of 69 for those starting presidential terms.",
//         "url": "https://www.businessinsider.co.za/elon-musk-says-trump-hang-hat-sail-into-sunset-2022-7",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3352/12d8c197b6534dd09e15ce19b38e7d91.jpg",
//         "publishedAt": "2022-07-12T06:24:44Z",
//         "content": "It's time for former US President Donald Trump to \"hang up his hat &amp; sail into the sunset,\" Elon Musk tweeted on Monday. Musk was responding to a tweet from Breitbart News featuring a video of Tr… [+1708 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Biztoc.com"
//         },
//         "author": "mirandak",
//         "title": "Tesla Rival Rivian Considers a Major Move",
//         "description": "The young manufacturer of electric vehicles wants to prevent a possible recession from disrupting its projects. The company is currently increasing production rates to meet significant demand. The... #elonmusk #recession #r2rivian #tesla #automakers #r2 #layo…",
//         "url": "https://biztoc.com/p/aes45d2p?ref=rss",
//         "urlToImage": "https://cdn.biztoc.com/og/aes45d2p.jpg",
//         "publishedAt": "2022-07-12T06:20:11Z",
//         "content": "The young manufacturer of electric vehicles wants to prevent a possible recession from disrupting its projects. The company is currently increasing production rates to meet significant demand. The or… [+1215 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Ixbt.com"
//         },
//         "author": "jin@ixbt.com (Jin)",
//         "title": "Toyota, Volkswagen и Mercedes оказались компаниями с самыми крупными долгами",
//         "description": "Как сообщает Авто.ру, ссылаясь на результаты исследования международной группы Janus Henderson, Toyota Motor Corporation и Volkswagen AG возглавили список компаний с самыми большими долгами. В списке, в которых включены 900 компаний, перечислены только самые …",
//         "url": "https://www.ixbt.com/news/2022/07/12/toyota-volkswagen-mercedes.html",
//         "urlToImage": "https://www.ixbt.com/img/n1/news/2022/6/2/maxresdefault_large.png",
//         "publishedAt": "2022-07-12T06:11:00Z",
//         "content": "., Janus Henderson, Toyota Motor Corporation Volkswagen AG .\r\n , 900 , , . , , , .\r\n Toyota 186 , Volkswagen — 185 . Mercedes-Benz, , 109 .\r\n, 2022 , a o Brand Finance «-500 », Toyota 12 . Mercedes-B… [+10 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Ilfattoquotidiano.it"
//         },
//         "author": "Chiara Ciucci",
//         "title": "Olanda, il lavoro da casa diventa un “diritto legale”. Si attende solo il via libera del Senato: “Lavoratori più felici e produttivi”",
//         "description": "La proposta è stata approvata dalla camera bassa olandese, si attende l’esito del voto del senato: i datori di lavoro sarebbero obbligati a \"prendere in considerazione le richieste dei dipendenti di lavorare da casa, purché le loro professioni lo consentano\" …",
//         "url": "https://www.ilfattoquotidiano.it/2022/07/12/olanda-il-lavoro-da-casa-diventa-un-diritto-legale-si-attende-solo-il-via-libera-del-senato-lavoratori-piu-felici-e-produttivi/6657982/",
//         "urlToImage": "https://st.ilfattoquotidiano.it/wp-content/uploads/2022/07/11/Imagoeconomica_1518151-1.jpg",
//         "publishedAt": "2022-07-12T06:09:51Z",
//         "content": "Pochi giorni fa il parlamento olandese ha approvato una proposta di legge, promossa dai partiti GroenLinks (sinistra Verde) e D66 (sinistra liberale), per rendere il lavoro da casa un diritto legale:… [+3608 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "FX Empire"
//         },
//         "author": "Reuters",
//         "title": "Drivers face black or white choice to speed up new-car delivery",
//         "description": "By Gilles Guillaume and Joseph White PARIS (Reuters) -   For Emilie Malherbe, choosing the colour of her brand new Renault Arkana SUV was easy because only three were available: black, pearl-white and gray.",
//         "url": "https://www.fxempire.com/news/article/drivers-face-black-or-white-choice-to-speed-up-new-car-delivery-1061023",
//         "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/07/tagreuters.com2022newsml_LYNXMPEI6B06E1.jpg",
//         "publishedAt": "2022-07-12T06:07:01Z",
//         "content": "She and her husband swiftly settled on gray because what mattered most was getting the car delivered quickly.\r\nWe heard on television that we could face delays of six to eight months to get a new car… [+5468 chars]"
//     }
   
//   ]
  
 const[articles, setArticles] = useState([])
 const[loading, setLoading] = useState(true)
 const[page, setPage] = useState(1)
 const[totalResults, setTotalResults] = useState(0)
   
 const capitalizeFirstLetter = (string) => {
   
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `${capitalizeFirstLetter(props.category)} - FastNews`;
  useEffect(()=>{
    updateNews();
  }, []);
 
 const updateNews = async() => {

   // console.log("page: "+this.state.page) //in page i am getting bug agter clecking next and previous button.
   props.setProgressCount(10) 
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3965f7e2c33342b09f4a558c330a7f5a&page=${page}&pageSize=${props.pageSize}`
   setLoading(true) 
   props.setProgressCount(25)
    let data = await fetch(url);
    props.setProgressCount(50)
    let parsedData = await data.json();
    props.setProgressCount(75)
    //console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgressCount(100)
  }
 const handlePrevClick = () => {

    setPage(page-1)
    updateNews()
  }
 const handleNextClick = () => {

    setPage(page+1)
    updateNews()
  }
  
    return (
      <div className='container my-3'>
        <h2 className='my-3'>FastNews - Top Headlines</h2>
       { loading && <Spinner/>}
        <div className="row">
          {!loading && articles.map((element) => {
            return <div className="col-md-4" >
            <NewsItem title={element.title ? element.title.slice(0, 48)+"...": "there is no title"} 
            date = {element.publishedAt} description={element.description?element.description.slice(0, 120)+"...":"there is no description"} 
            imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author}/>
           </div>
          })}
          
        </div>
        <div className='container my-3 d-flex justify-content-between'>
          <button disabled ={page <= 1} type='button' className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled ={page >= Math.ceil(totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}
 News.defaultProps = {
  country:"in",
  pageSize:21,
  category:"general"
 }
 News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
 }
