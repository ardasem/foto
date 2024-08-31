import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
