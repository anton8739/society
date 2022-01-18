let initializationState = {
    username: 'Anton',
    dialogs: [
        {
            id: 1, username: 'Андрей Тишкович',
            time: 'вчера',
            lastMessage: 'Ну да, не очень удачно',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/aSJMyEYg7jlvzd9l0KYXcfttwXCBep08kXfe_KgmwTllLML-AMc_GS29aFnk1jEBd9UIN9PX.jpg?size=50x0&quality=96&crop=255,5,502,502&ava=1'
        },
        {
            id: 2, username: 'Антон Малашеня',
            time: 'вчера',
            lastMessage: 'Ну да, типо)',
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/oPPDIesB9Z6FGHF-aY1haTLteLlOas1kuclPGA-D9SEpn3JkDXIl_lxUCmANzl3gImPNu1IcCyRfyTK7uMsehyMC.jpg?size=50x0&quality=96&crop=317,0,1706,1706&ava=1'
        },
        {
            id: 3, username: 'Антон Юровский',
            time: '9 февраля',
            lastMessage: '2_5267342694903975358.docx',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/8zpVkZMCufnP9wTc1PSlNkdJGn5dZptLjuA6AfAHoAMA5pnnS2BGppN-9CeQBPeXy_nSxyXq.jpg?size=50x0&quality=96&crop=0,171,560,560&ava=1'
        },
        {
            id: 4, username: 'Дмитрий Огиевич',
            time: '26 янв',
            lastMessage: 'Ахах, окей)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/2QLmSz0tmtfTk4cGX417c4A6ZpKFW67f-OIQPqMcreNNSyD16SDdLLW_-wY8WQJn9ghYnu5O.jpg?size=50x0&quality=96&crop=518,289,1147,1147&ava=1'
        },
        {
            id: 5, username: 'Женя Казерский',
            time: '19 янв',
            lastMessage: 'Ну да, надо будет катнуть в твои настолки)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig1/nmXztZIdpqauY2Gq-gOv7v3dW6pizMKDI8vBjC-3QKiJzpNmS0QK4D8gPMhRkmwJNe2r8LGH.jpg?size=50x0&quality=96&crop=237,0,1920,1920&ava=1'
        },
        {
            id: 6, username: 'Вова Романов',
            time: '1 января',
            lastMessage: 'Ну нормальное дело, кто то же должен следить на нг, чтобы электричество генерировалось и я, а также другие норм пацаны могли тусить:)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/F2N6b4lhGWBmbimFXILcdru-VFx0_mBMPtVePho0yAn_2SQgwuIbCo4He9mGXOIh8d-4E65v.jpg?size=50x0&quality=96&crop=132,349,525,525&ava=1'
        },
        {
            id: 7, username: 'Антон Юровский',
            time: '9 февраля',
            lastMessage: '2_5267342694903975358.docx',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/8zpVkZMCufnP9wTc1PSlNkdJGn5dZptLjuA6AfAHoAMA5pnnS2BGppN-9CeQBPeXy_nSxyXq.jpg?size=50x0&quality=96&crop=0,171,560,560&ava=1'
        },
        {
            id: 8, username: 'Дмитрий Огиевич',
            time: '26 янв',
            lastMessage: 'Ахах, окей)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/2QLmSz0tmtfTk4cGX417c4A6ZpKFW67f-OIQPqMcreNNSyD16SDdLLW_-wY8WQJn9ghYnu5O.jpg?size=50x0&quality=96&crop=518,289,1147,1147&ava=1'
        },
        {
            id: 9, username: 'Женя Казерский',
            time: '19 янв',
            lastMessage: 'Ну да, надо будет катнуть в твои настолки)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig1/nmXztZIdpqauY2Gq-gOv7v3dW6pizMKDI8vBjC-3QKiJzpNmS0QK4D8gPMhRkmwJNe2r8LGH.jpg?size=50x0&quality=96&crop=237,0,1920,1920&ava=1'
        },
        {
            id: 10, username: 'Вова Романов',
            time: '1 января',
            lastMessage: 'Ну нормальное дело, кто то же должен следить на нг, чтобы электричество генерировалось и я, а также другие норм пацаны могли тусить:)',
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/F2N6b4lhGWBmbimFXILcdru-VFx0_mBMPtVePho0yAn_2SQgwuIbCo4He9mGXOIh8d-4E65v.jpg?size=50x0&quality=96&crop=132,349,525,525&ava=1'
        },
    ]

}
let messagesReducer =(state = initializationState, action) => {
    switch (action.type){
        default :
            return {
                ...state
            }
    }
}

export default messagesReducer;