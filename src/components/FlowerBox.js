function FlowerBox(props) {
    return (
        <div className="flower-box">
            <div className="flower-picture">
                <img src={props.url} alt={props.name} />
            </div>
            <div className="flower-name-and-price">
                <div className="flower-name">
                    {props.name}
                </div>
                <div className="flower-price">
                    
                    ${props.price}
                </div>
            </div>
            <div className="flower-tags">
                {props.tag1}
                {props.tag2}
                {props.tag3}
                {props.tag4}
            </div>
        </div>
    )
};

export default FlowerBox;