import { Provider } from 'react-redux';
import store from './Store/store';
import { Formulario } from "./components/Formulário"

function App() {
  return (
    <Provider store={store}>
      <Formulario />
    </Provider>
  )
}

export default App
