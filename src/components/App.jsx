import { Box } from '../components/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { Tiltle, Contacts } from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook';
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';
import { getContacts } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
