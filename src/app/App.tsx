import StrokeView from '@features/stroke/view/StrokeView';

import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Main>
        <StrokeView />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
