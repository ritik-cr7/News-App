export default function News(props){

    return(
        <div className="news">

            <div className='news-img'>
                <img src={props.article.urlToImage} />

            </div>

            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")}   <a href={props.article.url} tartget="_blank" >Read More</a></p>
            <div className="source">
                <p>Author: {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>


        </div>
    )
}