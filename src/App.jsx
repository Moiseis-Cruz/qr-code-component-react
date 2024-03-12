import { QrCode } from './component/qr-card/qr-card';
import { GlobalStyle, SectionContainer } from './styles/GlobalStyles';

function App() {
  return (
    <SectionContainer>
      <GlobalStyle />
      <QrCode />
    </SectionContainer>
  );
}

export default App;
