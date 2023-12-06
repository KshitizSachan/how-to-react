import {useState} from 'react'

const SearchFilter = () =>{
    const tempItems =[
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Strawberry',
    'Watermelon',
]

const [items, setItems] = useState(tempItems)
const [searchItem, setSearchItem] = useState()

const handleChange = (e) =>{
    setSearchItem(e.target.value.toLowerCase());

    const filteredItems = tempItems.filter(item => (
        item.toLowerCase().includes(searchItem)
    ))
    setItems(filteredItems)
}


    return (
        <div>
            <h3>Search Filter</h3>
            <input type='text' placeholder='Enter the fruit you want' onChange={handleChange} value={searchItem}></input>
            {items.map((item, index) =>(
                <div key={index} >{item}</div>
            ))}
        </div>
    )
}

export default SearchFilter;