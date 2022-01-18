let initializationState = {
    username: 'Anton',
    news: [
        {
            id: 1, publisher: 'ВЕСТИ', timeOfCreation: '18 минут назад',
            text: 'В ноября 2015 года он заявлял о своей причастности к убийству Олега Пешкова. После обвинения в незаконном хранении оружия он изменил свои показания и стал утверждать, что не убивал россиянина.',
            likes: 10, comments: 6, share: 3, views: '2K',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/LWfaIRqrNDli2wuMksjJ_drBa1ugmJ_JtPhsO7frLmwyWj8LQpfjb_MctoEqt6Oz0Uzn6RAT.jpg?size=50x0&quality=96&crop=0,0,800,800&ava=1',
            foto: 'https://sun9-30.userapi.com/impg/BrvNomW9VwPl50NSWGJGP5On7r3ZMaFsPRpzfQ/5zPDCZttw0g.jpg?size=537x240&quality=96&proxy=1&sign=38114ee8484285eee77688ac9eb70ff5&type=share',
            lastcomments: [
                {
                    id: 1, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : 15,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
                {
                    id: 2, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : 10,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
            ]
        },
        {
            id: 2, publisher: 'TJ', timeOfCreation: '23 минуты назад',
            text: 'Квартал красных фонарей (неофициальная столица проституции) в Амстердаме пережил религиозные давления, две военные оккупации (в том числе нацистами) и криминальные войны, но теперь его может победить простая бюрократия. \n' +
            '\n' +
            'Рассказываем историю квартала, который нынешние власти хотят перенести из центра на окраины. Говорят, чтобы улучшить туристический образ Амстердама.',
            likes: 14, comments: 1, share: 14, views: '4.2K',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/c_F3MsjJkZTrsaPqQeE3fMSlGuawMtAqNKukNmoYWcDTrfmdgKuyZGd6p249lkcejGjBwDFdDqpL7CDkQkWuNMg4.jpg?size=50x0&quality=96&crop=366,116,273,273&ava=1',
            foto: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/n3k1CaP2tBUKE5pGverFjykWlOIJmd4Xnc-zWQ/mmGe27z8niY.jpg?size=537x240&quality=96&sign=4c99a258748265589e6a034ad7f017e2&type=share',
            lastcomments: [
                {
                    id: 3, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : null,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
                {
                    id: 4, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : null,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
            ]
        },
        {
            id: 3, publisher: 'Словарный запас', timeOfCreation: '25 минут назад',
            text: 'Вы ждали, вы надеялись и ОН вернулся! Не пропустите премьерную трансляцию сериала «Нагиев на каникулах» эксклюзивно на Okko 12 февраля в 12:00 (МСК). 16+ https://vk.cc/bYgXBs',
            likes: 3, comments: 5, share: 0, views: '13K',
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/y0j47aznHe6qi0VT1dSNSc0SMHMuLmZsKm8D8fn1BkGQxwN02Gv-DAMrFbmqaoRMxu0Oonvu.jpg?size=50x0&quality=96&crop=0,0,800,800&ava=1',
            foto: null,
            lastcomments: []
        },
        {
            id: 4, publisher: 'Хабр', timeOfCreation: '30 минут назад',
            text: 'Культ лучших практик.\n' +
            '\n' +
            'Почему лучшие практики могут быть вредны? Когда и как они мешают? Чтобы ответить на эти вопросы, нужно понять, откуда берутся эти практики и как они распространяются в программировании: http://amp.gs/5rXX',
            likes: 1, comments: 1, share: 1, views: 1,
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig1/cvgInBNS_bB-IXhszhAOIqfoum5D3pvm3GeU3MYLSfzFeUVo5ZNGs0FYWuh7o25OMJPkRtXr.jpg?size=50x0&quality=96&crop=0,0,567,567&ava=1',
            foto: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/rVoHPehRXcI-5f1P9tHQ25e_X80tp5gCSShqfg/SkSbDxufLwc.jpg?size=631x385&quality=96&proxy=1&sign=646cb06ef83772565b900411c519e776&type=album',
            lastcomments: [
                {
                    id: 5, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : null,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },

            ]
        },
        {
            id: 5, publisher: 'NR.Music', timeOfCreation: '32 минуты назад',
            text: 'сделает этот четверг прекраснее',
            likes: 168, comments: 17, share: 23, views: '25K',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/Mxz6eY7A-j9lHSKreJS9zROcqWJx7Sho7y3WRoVSIO_KQNu7chqz6uAho4ZTKxm-XXNyGTlq.jpg?size=50x0&quality=96&crop=128,22,409,409&ava=1',
            foto: 'https://sun1.beltelecom-by-minsk.userapi.com/impg/VlhLa7-RTlUpXRHWhnfgiCN4arQ68hp6teEscA/O-7Jarc4Xi4.jpg?size=865x1080&quality=96&sign=1f787ed8c91c1a926865ccc47416184c&type=album',
            lastcomments: [
                {
                    id: 6, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : null,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
                {
                    id: 7, username: 'Виктория Хуевина', time: '20 минут назад',
                    text: 'Турция Братья навек.',
                    likes : null,
                    img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/BHDvt6cSVDmcKJfz8yn1WcL3ioqKsUCF2C4IjFJL_GDxhzq57wNYnkcoBz3BHJiaeMgfnVyaJ-tdOHK0EmUaZS4k.jpg?size=50x0&quality=96&crop=162,138,455,455&ava=1'
                },
            ]
        }

    ]
}

let newsReducer =(state = initializationState, action) => {
    switch (action.type){
        default :
            return {
                ...state
            }
    }
}

export default newsReducer;