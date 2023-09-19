import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '../Box';
import {
  ContactBox,
  ContactList,
  ContactItem,
  ContactName,
  DeleteButton,
  Point,
} from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from '../../redux/selectors';
import { removeContact } from '../../redux/contactSlice';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const normolizedFilter = filters.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );

  const deleteContact = id => dispatch(removeContact(id));

  return (
    <Box>
      <ContactBox>
        <ContactList>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id}>
              <Point></Point>
              <ContactName>
                {contact.name}: {contact.number}
              </ContactName>
              <DeleteButton onClick={() => deleteContact(contact.id)}>
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
