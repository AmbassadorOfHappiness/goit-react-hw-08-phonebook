import React from 'react';
import { useSelector, useDispatch } from "react-redux";

// import { getFilter } from '../../redux/contacts/contacts-selectors';
import {changeFilter} from "../../redux/contacts/actions";

import style from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
    const onChange = e => dispatch(changeFilter(e.target.value))

    return (
        <div className={style.formInner}>
            <label>Find contacts by name
                <input
                    className='input'
                    type="text"
                    name="filter"
                    value={filter}
                    placeholder="Find me"
                    onChange={onChange}
                    />
            </label>
        </div>
    )
}

export default Filter;
