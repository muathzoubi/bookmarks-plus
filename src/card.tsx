const Card = (props: any) => {
    return (
        <div className="cardContainer ">
            <div className="card">
              {  <img  src={props.img} alt={props.name} height={80 } width={80}/>}
                <p className="city">{props.name}</p>
                <p className="weather">{props.des}</p>
            </div>
        </div>
    )

}
export default Card