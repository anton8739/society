let initializationState =  {
    username : 'Anton',
    numberOfGroups : 168,
    groupsList : [
        { groupTitle : 's13.ru – новости Гродно и региона',description: 'Открытая группа', members : 92807,
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/u_Mq9xh9gm25ixBhBkX0t69CXdPBQAijYt33Y-0J7bM-71Y4nnLD1zLfV3GHkBRxuYznYU8V.jpg?size=100x0&quality=96&crop=0,38,200,200&ava=1'},
        { groupTitle : 'ВЕСТИ',description: 'Интернет-СМИ', members : 790401,
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/aR07wQ6WDW0Jm8XA8wsBnkt66CRkjovoAw7yM-EsfaXgir1adgnI22DEhrXzSU4zOgBKDSIj.jpg?size=100x0&quality=96&crop=0,0,800,800&ava=1'},
        { groupTitle : 'NR.Music',description: 'Музыка', members : 5291594 ,
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/33Kgq-65y5FHeCifTiUgzy-AK9RfB6AO4VWGgd3Zymr49-qtZ6wGA2FjsyFjqspxJyRvMolC.jpg?size=100x0&quality=96&crop=128,22,409,409&ava=1'},
        { groupTitle : 'Илон Маск / Elon Musk (Tesla, SpaceX, Neuralink)',description: 'Предприниматель или предпринимательница', members : 327871,
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/vodO_4cMNuVARzMSZzJggC4VWdCBTjGcF14yh-fW3mWTEdaJx-AbPKXSNSyl-4mTPWxBnMap5zhi7KP3nSxIXKuq.jpg?size=100x0&quality=96&crop=0,0,400,400&ava=1'},
        { groupTitle : 'РИА Новости',description: 'Интернет-СМИ', members : 2552829 ,
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/WL6Ly25kj0Im_3TIL3Z7-85ho8rIKTrTuMl2B56t9z53HMTlw2ge32-vGeH7O4hg93glpD8NYVaVFY21R2YSwl6j.jpg?size=100x0&quality=96&crop=0,0,200,200&ava=1'},
        { groupTitle : 'РУП "Белорусская АЭС"',description: 'Открытая группа', members : 4085 ,
            img : 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/YZAu47jluVLzLYPvu9euqQ55lmPnfF2HrRJ9PSsCC_pej0dDYUZL9A_9ci5cnN_dejjkeg.jpg?size=100x0&quality=96&crop=87,87,697,697&ava=1'},
        { groupTitle : 'Подслушано в МЭИ',description: 'Фан-клуб', members : 18323 ,
            img : 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/zrBS6dXlU4Ubcw-xdYa6D8viY-WkICiB0OU6aiXHl6XggJjmW-jAyfQZTp97LY0oKDC9ZfkHydw_xcYCm1sWm-Xy.jpg?size=100x0&quality=96&crop=0,0,640,640&ava=1'},

    ]
    ,
    possibleGroups : [
        { groupTitle : 'Пикабу', description : 'Фабрика ваших дней',
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/SKPh1hvjcn4rY45flIjVqtO8um6v06QCoBROVB2QPtavMV2mM8t9gMgr6RyTXxpqMjyN3CqN.jpg?size=100x0&quality=96&crop=187,494,1125,1125&ava=1'},
        { groupTitle : 'NR', description : 'Интернет-СМИ',
            img : 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/CktwxQVla6tPSgmH_a_GmDIdm6wE6cAlc_U0j_kPMdIjumT_K4E2tqRWCLCVCEuWeBtTf4yx_TB3Wvsu4dUGCJlC.jpg?size=100x0&quality=96&crop=0,0,1385,1385&ava=1'},
        { groupTitle : 'МХК', description : 'Только интеллигенция',
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/o0VdOw80Q9QxDTdjjGPZjm3EIH6tpU66v0YmFymX2m8gIbP-j4dIRhcU4l6EIIauVSR52VXt.jpg?size=100x0&quality=96&crop=151,617,1129,1129&ava=1'},
        { groupTitle : 'Газпромбанк', description : '8 493 подписчика',
            img : 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/mUNnWbapXj4pr0RdEHaGk8yJKA2irEgcd-frYGCu_-z0G6GTlKqYnI7Aydf6pitc-BDxjt74kIiHOYJFYtQ6CwrN.jpg?size=100x0&quality=96&crop=0,0,2048,2048&ava=1'},
        { groupTitle : 'Настоящий Лентач', description : 'Пропаганда здравого смысла',
            img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/6ajcAns_TXtX2YCSJVR01d93plnO_aJK_oCJjugJLvDbjoje52bvZ3wF3vxj8c4IGJwuBN0wv934UeXliuoKc0e-.jpg?size=100x0&quality=96&crop=15,20,965,965&ava=1'},
        { groupTitle : 'Английский язык', description : 'English is Fun!',
            img : 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/2UniMTHd-dvXzbkZvDhA95oft-kuu5akMh9rJjtpymkaOy-22sLTGo5awN6cZ2QH5lTpzvbv.jpg?size=100x0&quality=96&crop=74,89,367,367&ava=1'},
    ]


}

let groupsReducer =(state = initializationState, action) => {
    switch (action.type){
        default :
            return {
                ...state
            }
    }
}

export default groupsReducer;