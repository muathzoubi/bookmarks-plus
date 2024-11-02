const Card = (props: any) => {
    return (
        <div className="cardContainer " onClick={props.onClick}>
            <div className="card">
              {  <img style={{borderRadius:10}} src={props.img} alt={props.name} height={80 } width={80}/>}
                <p className="city">{props.name}</p>
            </div>
        </div>
    )

}
export default Card