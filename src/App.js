import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Collapse, Space } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Space direction="vertical">
        <Collapse collapsible="header" defaultActiveKey={['1']}>
          <Panel header="This panel can only be collapsed by clicking text" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="header" style={{borderColor: '#e67e22'}}>
          <Panel header="This panel can't be collapsed" key="1" style={{backgroundColor:'#f0932b', borderColor: '#e67e22'}}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
    </div>
  );
}

export default App;
