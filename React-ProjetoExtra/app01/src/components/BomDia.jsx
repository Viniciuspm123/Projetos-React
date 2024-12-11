function BomDia(){
    
    return(
        <h1>Bom Dia!</h1>
    )
}

function BoaNoite(){
    
    return(
        <h1>Boa Noite!</h1>
    )
}

function Hora(props){
    const queHora=props.queHora

    if (queHora){
        return <BomDia/>
    }else{
        <BoaNoite/>
    }
}
export default Hora