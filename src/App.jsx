import './App.css';
import Firstpoint from './Components/Firstpoint';
import Secondpoint from './Components/Secondpoint';
import Thirdpoint from './Components/Thirdpoint';
import Fourthpoint from './Components/Fourthpoint';
import TwoWayData from './Components/TwoWayData';
import SumToNumber from './Components/SumToNumber';
import DynimacallyAddChildComponents from './Components/DynimacallyAddChildComponents';

function App() {
  return (
   <>
<Firstpoint/>
<Secondpoint/>
<Thirdpoint/>
<Fourthpoint/>
<TwoWayData/>

<DynimacallyAddChildComponents/>
<SumToNumber/>
   </>
  );
}

export default App;
