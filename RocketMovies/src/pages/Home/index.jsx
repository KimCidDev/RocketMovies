import { Container } from './styles';
import { Header } from '../../components/Header';

import { TiPlus } from "react-icons/ti";

export function Home() {
  return (
    <Container>
    <Header />
    <div>
      <h1>Meus Filmes</h1>
      <button>
      <TiPlus />
        Adicionar Filme
      </button>
    </div>

    </Container>
  )
}
