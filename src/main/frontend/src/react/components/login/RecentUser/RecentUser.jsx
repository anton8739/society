import React from 'react';

import style from './RecentUser.module.css';
import User from "./User/User";

const RecentUser = () => {

    let users = [
        { id : 1, username : 'Антон Юровский', img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1'},
        { id : 2, username : 'Антон Малашеня', img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1'},
        { id : 3, username : 'Максим Русак', img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1'}
    ]
    let userList = users.map(user => <User user={user}/>)
    return (
        <div className={style.main}>
            <div>
                <div className={style.h1}>Недавно входили на сайт с этого компьютера</div>
                <div className={style.h2}>Чтобы войти снова, нажмите на фотографию или имя</div>
            </div>
            <div className={style.userList}>
                {userList}
            </div>

        </div>
    )
}
export default  RecentUser;