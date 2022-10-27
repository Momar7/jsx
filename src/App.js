import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto 
      imageUrl='https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU.png?v=1597638270'
      />
      <FullName 
      FullName={FullName}
      />
      <Address
      Address={Address}
      />
    </div>
  );
}

export default App;
