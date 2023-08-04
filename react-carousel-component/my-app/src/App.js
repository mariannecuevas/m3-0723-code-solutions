import Carousel from './Carousel';
import './Carousel.css';

const images = [
  { id: 1, src: '/images/calcifer.png', alt: 'Calcifer' },
  { id: 2, src: '/images/jiji.png', alt: 'Jiji' },
  { id: 3, src: '/images/no-face.png', alt: 'No-Face' },
  { id: 4, src: '/images/soot.png', alt: 'Soot' },
  { id: 5, src: '/images/totoro.png', alt: 'Totoro' },
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
