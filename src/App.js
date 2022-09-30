import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"






function App() {
  const [text, setText] = useState('')
  const [Option, setOption] = useState('')
  const [ProductData, setProductData] = useState([{
    title: '2gb DDR3 AMD CPU CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'pc'
  },
  {
    title: '2gb DDR3 AMD GRAPHICS CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'pc'
  },
  {
    title: '2gb DDR3 nvidia CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'mobile'
  },
  {
    title: '2gb lol GRAPHICS CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'mobile'
  },
  {
    title: 'DDR3 xyz GRAPHICS CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'car'
  },
  {
    title: '10GB GDDR6X GRAPHICS CARD',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, repudiandae!',
    location: 'Dhoke Syedan, Rawalpindi',
    seller: 'Some Seller',
    imageUrl: 'https://images.olx.com.pk/thumbnails/191105188-400x300.webp',
    category: 'plot'
  },
  ])
  const [categories, setCategories] = useState(ProductData.map((e) => e.category))
  console.log(Option)
  const FilterCategoryHandler = () => {
    const filterdCategory = new Set(categories)
    setCategories([...filterdCategory])

  }
  useEffect(() => {
    FilterCategoryHandler()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <br />
        <div><h1>HELLO</h1>
      <select onChange={(e) => setOption(e.target.value)}>
        <option value="">select</option>
        {categories.map((e, i) => <option key={i}>
          {e}
        </option>)}

      </select>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {
          Option ?
            ProductData.filter((e, i) => e.category == Option && e.title.toLowerCase().includes(text)).map((e, i) => <li key={i}>
              {e.title} category : {e.category}
            </li>)
            : ProductData.filter((e, i) => e.title.toLowerCase().includes(text.toLowerCase())).map((e, i) => <li key={i}>
              {e.title} category : {e.category}
            </li>)}


      </ul>
    </div>
      
        
      </header>
    </div>
  )
}


export default App;
