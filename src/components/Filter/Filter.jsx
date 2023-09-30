import React from 'react';
import { TypeName, InputName, FilterBox } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from '../../redux/selectors';
import { filterContact } from '../../redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);
  const nameFilter = e => dispatch(filterContact(e.currentTarget.value));

  return (
    <FilterBox>
      <TypeName>Find contacts by name</TypeName>
      <InputName type="text" value={filters} onChange={nameFilter} />
    </FilterBox>
  );
};

export default Filter;
