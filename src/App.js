import HelloWorld from "./components/HelloWorld";

const App = () => {

    return (
        //Remove the div code below.
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#202233'}}>
            <h1>React Template Canvas</h1>
            <HelloWorld message='Hello World!'/>
        </div>
    );
}

export default App;
