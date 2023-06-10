import { Container } from './styles';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Link } from 'react-router-dom';


import { TiPlus } from "react-icons/ti";

export function Home() {
  return (
    <Container>
    <Header />
    <div>
      <h1>Meus Filmes</h1>
      <Link to='/new'>
      <button>
      <TiPlus />
        Adicionar Filme
      </button>
      </Link>
      
    </div>
    <section>
    <Movie data={{
      title: 'Taxi Driver',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [
        {id: '1', name: 'thriller'},
        {id: '2', name: 'drama'}
      ]
    }}/>
    <Movie data={{
      title: 'Fight Club',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [
        {id: '1', name: 'thriller'},
        {id: '2', name: 'action'}
      ]
    }}/>
    <Movie data={{
      title: 'Apocalypse Now',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [
        {id: '1', name: 'drama'},
        {id: '2', name: 'war'}
      ]
    }}/>

    </section>
    

    </Container>
  )
}
