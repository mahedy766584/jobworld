export function SplitWorld(input){
    return input
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1))
    .join(' ');
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ItemList() {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         const fetchItems = async () => {
//         try {
//             const response = await axios.get('/items'); // Update with your backend API endpoint
//             const sortedItems = response.data.sort((a, b) => a.status.localeCompare(b.status)); // Sort items by status in ascending order
//             setItems(sortedItems);
//         } catch (error) {
//             console.error('Error fetching items:', error);
//         }
//         };

//         fetchItems();
//     }, []);

//     return (
//         <div>
//         <h1>Items Sorted by Status</h1>
//         <ul>
//             {items.map((item, index) => (
//             <li key={index}>
//                 {item.name} - {item.status}
//             </li>
//             ))}
//         </ul>
//         </div>
//     );
// }

// export default ItemList;
