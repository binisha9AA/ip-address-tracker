import './App.css';
import Map from './components/map';
import SearchBar from './components/searchbar';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet';
function App() {
  return (
    <>
      {/* <main>
        <section className="search-bg">
          <h3>IP Address tracker</h3>
          <SearchBar />
        </section>
      </main> */}
      <Map />
    </>
  );
}

export default App;
