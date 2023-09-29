import StrokeView from '@features/stroke/view/StrokeView';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import CardiovascularView from '@features/cardiovascular/view/CardiovascularView';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <Main>
        <CardiovascularView />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
