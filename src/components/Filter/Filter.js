import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsAction from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from '../Filter/filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsAction.changeFilter(e.target.value));

  return (
    <div className={styles.formInner}>
      <label>Find contacts by name
        <input
          className="input"
          type="text"
          name="filter"
          value={value}
          placeholder="Find me"
          onChange={onChange}
          />
        </label>
    </div>
  );
};

export default Filter;
