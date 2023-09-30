import StrokeView from '@features/stroke/view/StrokeView';

import CardiovascularView from '@features/cardiovascular/view/CardiovascularView';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Main}></Route>
        <Route path='/stroke' Component={StrokeView}></Route>
        <Route path='/cardiovascular' Component={CardiovascularView}></Route>
      </Routes>
    </Router>
  );
}

export default App;
