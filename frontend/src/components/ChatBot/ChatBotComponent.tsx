import React, { useState, useEffect } from 'react';
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

const DBPedia = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');
  const [trigger, setTrigger] = useState(false);

  const triggetNext = async () => {
    const { steps } = props;
    const search = steps.search.value;
    setLoading(true); // Set loading to true before making the request
    const respuesta = await new ChatBotApi().preguntar(search);
    setResult(respuesta);
    setLoading(false); // Set loading to false after receiving the response
    setTrigger(true);
    props.triggerNextStep();
  };

  return (
    <div>
      {loading && (<Loading />)}
      {!loading && (
        <div style={{ textAlign: 'center' }}>
          {!trigger && (
            <>
              <p>
                {result}
              </p>
              <button onClick={triggetNext}>
                Volver a preguntar
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

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
