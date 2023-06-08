import { Container, Form, TextArea, NewTag } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { TiArrowLeftThick, TiTimes, TiPlus } from "react-icons/ti";

export function New () {
  return (
    <Container>
      <Header />

      <Form>
      <ButtonText icon={TiArrowLeftThick}title="Back to Login" />
      <h1>New Memory</h1>

      <div>
      <Input         
        placeholder="Nome"
        type="text"/>
      <Input         
        placeholder="Email"
        type="email"/>
      </div>
      <TextArea         
        placeholder="Password"
        type="password"/>

      <section>
          <NewTag>
            <p>Xis Salada</p>
            <TiTimes />
          </NewTag>
          <NewTag>
            <p>Xis Porco</p>
            <TiPlus />
          </NewTag>
      </section>

      <footer>
      <Button title='Delete'/>
      <Button title='Save'/>
      </footer>
      
      </Form>
    </Container>

  )
}