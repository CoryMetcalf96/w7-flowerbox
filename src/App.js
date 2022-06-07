import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import FlowerBox from './components/FlowerBox';


const data = [
	{
		name: 'forgive-me-pleases',
		image: 'https://i.imgur.com/0UCzcZM.jpg',
		price: 50,
		tags: ['pink', 'roses', 'bouquet', 'apologies'],
	},
	{
		name: 'pink perfection',
		image: 'https://i.imgur.com/XoEClf7.png',
		price: 15,
		tags: ['pink', 'gerbera daisy', 'singular', 'decor'],
	},
	{
		name: 'hopeful sunshine',
		image: 'https://i.imgur.com/LRrcBtN.png',
		price: 30,
		tags: ['yellow', 'sunflower', 'multiple', 'garden'],
	},
	{
		name: 'motivational mug',
		image: 'https://i.imgur.com/NOJ2ikN.png',
		price: 25,
		tags: ['yellow', 'gerbera daisy', 'singular (with mug)'],
	},
	{
		name: 'breathtaking bouquet',
		image: 'https://i.imgur.com/TuuKiHt.png',
		price: 40,
		tags: ['white', "baby's breath", 'bouquet', 'decor'],
	},
	{
		name: 'loves-me-loves-me-knots',
		image: 'https://i.imgur.com/SaTbTEx.png',
		price: 20,
		tags: ['mixed', 'gerbera daisy', 'mini bouguet', 'for fun'],
	},
	{
		name: 'hiya, spring',
		image: 'https://i.imgur.com/dJvHolr.jpg',
		price: 35,
		tags: ['mixed', 'hyacinths', 'bouquet', 'garden'],
	},
	{
		name: 'can of compassion',
		image: 'https://i.imgur.com/PN3jmrf.png',
		price: 55,
		tags: ['mixed', 'decor', 'bouquet (with can)', 'love'],
	},
	{
		name: 'basket of beauty',
		image: 'https://i.imgur.com/Z86X3qq.png',
		price: 50,
		tags: ['mixed', 'bouquet (with basket)', 'love', 'decor'],
	},
]

function App() {
  return (
    <div>
      <div className='navigation-bar'>
        <NavigationBar />
      </div>
      <div className='header'>
        <Header url="https://i.imgur.com/U8tiT5X.png" />
      </div>
      <div className='flowerbox-grid'>
        <div className='flowerbox'>
          <FlowerBox url={data[0].image} name={data[0].name} price={data[0].price} tag1={data[0].tags[0]} tag2={data[0].tags[1]} tag3={data[0].tags[2]} tag4={data[0].tags[3]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
