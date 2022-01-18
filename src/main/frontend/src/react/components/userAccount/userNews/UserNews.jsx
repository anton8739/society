import React from 'react';
import style from './userNews.module.css';
import NewsItem from "./NewsItem/NewsItem";
import NewsMenu from "./NewsMenu/NewsMenu";


const UserNews = (props) => {

    return (
        <div className={style.main}>
            <NewsMenu/>
            <NewsItem img="https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1"
                      foto="https://sun9-27.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&proxy=1&sign=977f3817b9a6e126e647ecfa73707799&type=album"
                      username="Антон Юровский" data="3 мая 2018" likes="34" share="1" views="125"/>
            <NewsItem img="https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1"
                      foto="https://sun9-65.userapi.com/impf/c604617/v604617366/3a67b/8PWuJ8D9X4Y.jpg?size=720x960&quality=96&proxy=1&sign=26ac9c8a064f6a68a04b71e664e842f3&type=album"
                      username="Антон Юровский" data="3 мая 2018" likes="34" share="1" views="125"/>
            <NewsItem img="https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/gYtm9y3KehPBASo1C_v88Xdu8EkRWHMaI4n8GimYdFBnsvMrQEyXRkS0-rinBK9mwaER_8Lk.jpg?size=200x0&quality=96&crop=0,171,560,560&ava=1"
                      foto="https://sun9-27.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&proxy=1&sign=977f3817b9a6e126e647ecfa73707799&type=album"
                      username="Антон Юровский" data="3 мая 2018" likes="34" share="1" views="125"/>

        </div>
    )
}

export default UserNews;