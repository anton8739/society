import React from 'react';
import style from './List.module.css';
import Group from "./Group/Group";

const List = (props) => {

    let groupsList =props.groupsList.map(group => <Group group={group}/>)
    return (
        <div className={style.list}>
            {groupsList}
        </div>
    )
}

export default List;