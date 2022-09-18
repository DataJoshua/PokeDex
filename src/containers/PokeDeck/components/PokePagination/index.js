import "./styles.css"

function PokePagintaion({prev, next, onPrev, onNext}) {
    return ( 
        <div className="Pp-container">
            {prev ? <button className="pp-btn" onClick={onPrev}>Prev</button> : null}
            {next ? <button className="pp-btn" onClick={onNext}>Next</button> : null}
        </div> 
    );
}

export default PokePagintaion;