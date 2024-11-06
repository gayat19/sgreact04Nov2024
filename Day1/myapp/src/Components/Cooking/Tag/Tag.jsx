import './Tag.css';
export default function Tag(props) {
    const handleClick = () => {
        props.onGetRecipe(props.name);
    }
    return (
        <div className="tag">
            <span>{props.name}</span>
            <button onClick={handleClick}>Get Recipe for {props.name}</button>
        </div>
    );
    }