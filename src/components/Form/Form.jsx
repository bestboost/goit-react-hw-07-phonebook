import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  Form,
  TypeName,
  InputName,
  TypePhone,
  InputPhone,
  AddButton,
} from './Form.styled';
import { getContacts } from '../../redux/selectors';

const Forms = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handelChange = e => {
    const { value } = e.currentTarget;

    switch (contacts) {
      case 'name':
        addContact(value);
        break;

      case 'phone':
        addContact(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const alertCondition = contacts.map(contact => contact.name);
    if (
      alertCondition.find(
        item => item.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(form.elements.name.value + ' is already in contacts');
      form.reset();
      return;
    }
    const contact = {
      name: form.elements.name.value,
      phone: form.elements.phone.value,
    };

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <TypeName>Name</TypeName>
      <InputName
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handelChange}
      />
      <TypePhone>Phone number</TypePhone>
      <InputPhone
        type="number"
        name="phone"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handelChange}
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

Forms.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Forms;
