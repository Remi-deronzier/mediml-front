import StrokeView from '@features/stroke/view/StrokeView';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Main>
        <StrokeView />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
