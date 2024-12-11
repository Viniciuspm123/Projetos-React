import './ReportagemStyle.css'

function Reportagem(props){

    return(
        <div className = "reportagem">
            <h1 style={{color:"red", backgroundColor:"purple", margin:"30px"}}>{props.titulo}</h1>
            <p>{props.paragrafo01}</p>
            <p>{props.paragrafo02}</p>

        </div>
    )
}

export default Reportagem