import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../../components/iconify';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid } from '@mui/material';



const textfield={
  borderColor:"green",
  borderRadius:"10px",
  variant:"none",
   placeholder:"Search..."
}


const Searchbar = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [globalData,setGlobalData]=useState("");

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  // search function----- 
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Your data array to be/ searched
//   const data = [
//     { id: 1, name: 'Apple' },
//     { id: 2, name: 'Banana' },
//     { id: 3, name: 'Orange' },
//     // ... other data items
//   ];
console.log(data,"---==searchbar imported data");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Call the search function
    search(event.target.value);
  };

  // Function to perform the search
  const search = (query) => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
console.log(searchResults,"searched results------")
  return (
    <>
    <Grid container alignItems='center'>
        
        <TextField
         style={textfield}
       fullWidth
        value={searchQuery}
        // onChange={(e)=>{
        //     console.log(e?.target?.value,'user ')
        //     setSearchResults(e?.target?.value);
        // }}
        onChange={handleSearchChange}
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <SearchIcon onClick={search }/>
              </InputAdornment>
            ),
          }}
           

    //       <ul>
    //     {searchResults.map((item) => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
          
         
          
          // sx={{
            // "& fieldset": { border: 'none' },
           
          // }}
          
          // Add any additional props or styling as needed
        />
      
      
      {/* <Grid  item>
      <IconButton onClick={handleSearchChange}>
        <SearchIcon />
      </IconButton>
     
      </Grid> */}


    
   {/* <ul>
         {searchResults.map((item) => (
          <li key={type }>{item_name}</li>
        ))}
       </ul> */}

      </Grid>
    </>
  );
};

export default Searchbar;