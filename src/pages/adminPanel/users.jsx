import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'Adress',
    width: 260,
    editable: false
  },
];

const rows = [ 
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 22, address: '123 North Wall St, Winterfell' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, address: '45 Lion Keep, King\'s Landing' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 42, address: '45 Lion Keep, King\'s Landing' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 18, address: '2 Direwolf Ln, Winterfell' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30, address: '10 Dragonstone Blvd, Dragonstone' },
        { id: 6, lastName: 'Melisandre', firstName: 'Kaseyn', age: 150, address: '3 Shadow Street, Essos' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 50, address: '33 Cliffside Rd, Braavos' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, address: '89 Opera House, Volantis' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: '5 Hilltop Rd, Pentos' },
        { id: 10, lastName: 'Bolton', firstName: 'Ramsay', age: 29, address: '77 Dreadfort Ave, Dreadfort' },
        { id: 11, lastName: 'Tyrell', firstName: 'Margaery', age: 28, address: '9 Rose Gardens, Highgarden' },
        { id: 12, lastName: 'Baratheon', firstName: 'Stannis', age: 45, address: '44 Storm\'s End, Stormlands' },
        { id: 13, lastName: 'Greyjoy', firstName: 'Yara', age: 34, address: '2 Salt Throne, Pyke' },
        { id: 14, lastName: 'Martell', firstName: 'Oberyn', age: 39, address: '25 Spear Palace, Dorne' },
        { id: 15, lastName: 'Baelish', firstName: 'Petyr', age: 38, address: '101 Finger St, The Vale' },
        { id: 16, lastName: 'Tully', firstName: 'Edmure', age: 43, address: '2 Riverlands Rd, Riverrun' },
        { id: 17, lastName: 'Arryn', firstName: 'Jon', age: 60, address: '90 Eyrie Peak, The Vale' },
        { id: 18, lastName: 'Sand', firstName: 'Ellaria', age: 35, address: '16 Sandstone Way, Dorne' },
        { id: 19, lastName: 'Hightower', firstName: 'Alicent', age: 40, address: '34 Citadel Ave, Oldtown' },
        { id: 20, lastName: 'Reed', firstName: 'Meera', age: 25, address: '7 Neck Passage, Greywater Watch' },
        { id: 21, lastName: 'Glover', firstName: 'Robett', age: 55, address: '15 Ironwood St, Deepwood Motte' },
        { id: 22, lastName: 'Mormont', firstName: 'Lyanna', age: 13, address: '20 Bear Island, North' },
        { id: 23, lastName: 'Karstark', firstName: 'Alys', age: 26, address: '8 Stark St, Karhold' },
        { id: 24, lastName: 'Umber', firstName: 'Greatjon', age: 47, address: '23 Last Hearth, North' },
        { id: 25, lastName: 'Dayne', firstName: 'Arthur', age: 35, address: '12 Starfall, Dorne' },
        { id: 26, lastName: 'Frey', firstName: 'Walder', age: 93, address: '100 Crossing St, The Twins' },
        { id: 27, lastName: 'Clegane', firstName: 'Sandor', age: 38, address: '7 Hound\'s Keep, Riverlands' },
        { id: 28, lastName: 'Manderly', firstName: 'Wyman', age: 63, address: '88 White Harbor, North' },
        { id: 29, lastName: 'Blackwood', firstName: 'Tytos', age: 41, address: '12 Raven Tree, Riverlands' },
        { id: 30, lastName: 'Morrigen', firstName: 'Donnel', age: 54, address: '17 Stormlands Rd, Storm\'s End' },
        { id: 31, lastName: 'Yronwood', firstName: 'Anders', age: 50, address: '33 Stone Way, Dorne' },
        { id: 32, lastName: 'Harlaw', firstName: 'Rodrik', age: 47, address: '22 Iron Islands, Pyke' },
        { id: 33, lastName: 'Dondarrion', firstName: 'Beric', age: 39, address: '16 Stormlands St, Blackhaven' },
        { id: 34, lastName: 'Royce', firstName: 'Yohn', age: 60, address: '45 Runestone, The Vale' },
        { id: 35, lastName: 'Tarly', firstName: 'Samwell', age: 23, address: '101 Horn Hill, Reach' },
        { id: 36, lastName: 'Selmy', firstName: 'Barristan', age: 67, address: '32 King\'s Landing, Westeros' },
        { id: 37, lastName: 'Velaryon', firstName: 'Corlys', age: 60, address: '10 Driftmark, Westeros' },
        { id: 38, lastName: 'Seaworth', firstName: 'Davos', age: 49, address: '2 Blackwater Bay, King\'s Landing' },
        { id: 39, lastName: 'Flowers', firstName: 'Garlan', age: 29, address: '11 Rose Road, Reach' },
        { id: 40, lastName: 'Mudd', firstName: 'Tristan', age: 58, address: '1 Trident, Riverlands' },
        { id: 41, lastName: 'Strong', firstName: 'Harwin', age: 45, address: '4 Harrenhal, Riverlands' },
        { id: 42, lastName: 'Tarth', firstName: 'Brienne', age: 32, address: '99 Sapphire Isle, Stormlands' },
        { id: 43, lastName: 'Flint', firstName: 'Robin', age: 53, address: '76 Widow\'s Watch, North' },
        { id: 44, lastName: 'Celtigar', firstName: 'Aron', age: 65, address: '100 Claw Isle, Crownlands' },
        { id: 45, lastName: 'Fowler', firstName: 'Cletus', age: 48, address: '3 Skyreach, Dorne' },
        { id: 46, lastName: 'Blackmont', firstName: 'Bennifer', age: 40, address: '67 Blackmont, Dorne' },
        { id: 47, lastName: 'Drumm', firstName: 'Donel', age: 59, address: '21 Iron Islands, Pyke' },
        { id: 48, lastName: 'Redwyne', firstName: 'Hobber', age: 37, address: '12 Arbor, Reach' },
        { id: 49, lastName: 'Smallwood', firstName: 'Theomar', age: 42, address: '101 Acorn Hall, Riverlands' },
        { id: 50, lastName: 'Qorgyle', firstName: 'Arron', age: 35, address: '15 Sandstone, Dorne' },
];

export default function DataGridDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCustomers = rows.filter((row) =>
    (row.firstName?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (row.lastName?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    row.age?.toString().includes(searchTerm)
  );

  return (
    <div>
    
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Box sx={{ height: '96vh', width: '80%', marginLeft: '20%', marginTop: 2 }}>
        <DataGrid
          rows={filteredCustomers}
          columns={columns}
          pageSizeOptions={[8]}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
        />
      </Box>
  <Outlet />
    </div>
  );
}




