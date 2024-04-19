import { Component } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ChatBotApi from './ChatBotApi';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

interface State {
  loading: boolean;
  result: string;
  trigger: boolean;
}


class DBPedia extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  async componentDidMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    const respuesta = await new ChatBotApi().preguntar(search);
    self.setState({ loading: false, result: respuesta });

  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div>
        {loading ? <Loading /> : <p>{result}</p>}
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Volver a preguntar
              </button>
            }
          </div>
        }
      </div>
    );
  }
}



const ChatBotComponent = () => (
  <ThemeProvider theme={theme}>

    <ChatBot
      floating={true}
      placeholder="Escribe tu pregunta..."
      headerTitle="Fitkidpedia"
      theme={theme}
      steps={[
        {
          id: '0',
          message: '¡Hola! Estoy aquí para resolver cualquier duda que tengas sobre el código FitKid.',
          trigger: '1',
        },
        {
          id: '1',
          message: '¿Cuál es tu pregunta sobre el código?',
          trigger: 'search',
        },
        {
          id: 'search',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          component: <DBPedia />,
          waitAction: true,
          trigger: '1',
        },
      ]}
    />
  </ThemeProvider>
);

export default ChatBotComponent;