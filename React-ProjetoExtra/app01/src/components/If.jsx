function GolPerdido (){
    return(
        <h1>Errou!</h1>
    )
}

function GolFeito(){
    return(
        <h1>Acertou!</h1>
    )
}

function Tentativa (props){
    const eGol = props.eGol

    if(eGol){
        return<GolFeito/>
    }
        return<GolPerdido/>

}

export default Tentativa