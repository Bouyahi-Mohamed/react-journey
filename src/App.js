import SimpleContainer from "./components/container"
import InputText from "./components/inputText"
import CalculatorGrid from "./components/gridBtn";
import { useReducer, useState} from "react";


function reducer(state, action) {
  switch (action.type) {
    case '0':
      return { ...state, value: state.value + '0' };
    case '1':
      return { ...state, value: state.value + '1' };
    case '2':
      return { ...state, value: state.value + '2' };
    case '3':
      return { ...state, value: state.value + '3' };
    case '4':
      return { ...state, value: state.value + '4' };
    case '5':
      return { ...state, value: state.value + '5' };
    case '6':
      return { ...state, value: state.value + '6' };
    case '7':
      return { ...state, value: state.value + '7' };
    case '8':
      return { ...state, value: state.value + '8' };
    case '9':
      return { ...state, value: state.value + '9' };
    case 'x':
      return { ...state, value: state.value + '*' };
    case '/':
      return { ...state, value: state.value + '/' };
    case '+':
      return { ...state, value: state.value + '+' };
    case '-':
      return { ...state, value: state.value + '-' };
    case '.':
      return { ...state, value: state.value + '.' };
    case '=':
      try {
        return { ...state, result: eval(state.value) };
      } catch (error) {
        return { ...state, value: '', result: 'Error' };
      }
    case 'AC':
      return { ...state, value: '', result: '' };
    case '-/+':
      return { ...state, value: state.value.startsWith('-') ? state.value.slice(1) : '-' + state.value };
    case 'c':
      return { ...state, value: state.value.slice(0, -1) };
    case '%':
      return { ...state, value: state.value + '%' };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { value: '', result: '' });



  return (
      <SimpleContainer>
        <InputText value={state.value} dispatch={dispatch} result={state.result} />
        <CalculatorGrid dispatch={dispatch} result={state.result} />
      </SimpleContainer>
  );
}

export default App;
