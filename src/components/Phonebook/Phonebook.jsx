import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import { Box } from '../Box';
import {
  ContactBox,
  ContactList,
  ContactItem,
  ContactName,
  DeleteButton,
  Point,
} from './Phonebook.styled';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const normolizedFilter = filters.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );

  const deleteContactBtn = id => dispatch(deleteContact(id));

  return (
    <Box>
      <ContactBox>
        <ContactList>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id}>
              <Point></Point>
              <ContactName>
                {contact.name}: {contact.phone}
              </ContactName>
              <DeleteButton onClick={() => deleteContactBtn(contact.id)}>
                Delete
              </DeleteButton>
            </ContactItem>
          ))}
        </ContactList>
      </ContactBox>
    </Box>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Phonebook;
