import Data from "./meusComponentes/Data";
import Cont from "./meusComponentes/Contv2";
import DataV2 from "./meusComponentes/DataV2";

function App() {
  return (
    <div className="App">
        <Data texto="Data e hora atuais: " timeZone={-3.00}/>
        <Data texto="Data e hora em Londres: " timeZone={1.00}/>
        <Data texto="Data e hora em Nova York:" timeZone={-4.00}/>
        <DataV2 texto="Data JSX " timeZone={-3.00}/>
        <Cont/>
    </div>
  );
}

export default App;
