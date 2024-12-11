import './App.css'
import Saudacao from './components/Saudacao'
import Texto from './components/Texto'
import ListaOrdenada from './components/ListaOrdenada'
import Imagem from './components/Imagem'
import Botao from './components/botao'
import Link from './components/Link'
import Tentativa from './components/If'
import Hora from './components/BomDia'
import Reportagem from './components/Reportagem'
import Fragment from './components/Fragment'

function App() {
return(
<>
<Saudacao/>
<Texto/>
<ListaOrdenada/>
<Imagem/>
<Botao/>
<Link/>
<Tentativa eGol={true}/>
<Hora queHora={true}/>
<Reportagem titulo="Falta de Energia em São Paulo" paragrafo01="Cotia sem energia" paragrafo02="São Paulo sem energia"/>
<Fragment subtitulo01="Vinicius" subtitulo02="Marques" paragrafo="Aluno da Flamingo"/>
</>
)  
}

export default App