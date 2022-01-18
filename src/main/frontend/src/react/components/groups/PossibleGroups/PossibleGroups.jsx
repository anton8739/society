import React from 'react';

import style from './PossibleGroups.module.css';
import Group from "./Group/Group";

const PossibleGroups = (props) => {

    let possibleGroupsList = props.possibleGroups.map(group => <Group group={group}/>)
    return (
        <div className={style.bar}>
            <div className={style.possible}>Рекомендуемые сообщества</div>
            {possibleGroupsList}
        </div>
    )
}

export default PossibleGroups;