import { Box } from '../components/Box';
import { Tiltle, Contacts } from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook';
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
      }}
    >
      <Tiltle>Phonebook</Tiltle>
      <Forms />
      <Contacts>Contacts</Contacts>
      <Filter />
      <Phonebook />
    </Box>
  );
};
// };

export default App;
