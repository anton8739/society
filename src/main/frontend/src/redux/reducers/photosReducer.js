import {setFetching, setUser} from "./userAccountReducer";
import {UserAPI} from "../../api/userApi";
import Cookies from "universal-cookie";
import {FotoAPI} from "../../api/fotoApi";
const cookies = new Cookies();
let initializationState =  {
    currentFoto : {
        currentUserImg : 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album',
        img: 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album',
        numberOfFoto : 21,
        likes: 1,
        share: 3,
        data: '3 мая 2018',
        user: {
            username: 'Антон Юровский',
            img: 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album'
        },

        commentList: [
            {
                id: 1,
                username: 'Денис Добрый ',
                text: 'Лакшери лайв, ласковый Тоха))',
                data: '4 мая 2018',
                img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/ggVjlRXaU5sWHmhG86gzK1tsNLW0Yo_DgXD87ChwTdBjvFclbmKEqHcgf3vA6qBlNbTv0QmU.jpg?size=50x0&quality=96&crop=189,0,1989,1989&ava=1'
            },
            {
                id: 2,
                username: 'Денис Добрый ',
                text: 'Лакшери лайв, ласковый Тоха))',
                data: '4 мая 2018',
                img : 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/ggVjlRXaU5sWHmhG86gzK1tsNLW0Yo_DgXD87ChwTdBjvFclbmKEqHcgf3vA6qBlNbTv0QmU.jpg?size=50x0&quality=96&crop=189,0,1989,1989&ava=1'
            },
        ]
    },
    numberOfAlbums : 5,
    albums : [
        {title : 'Фотографии с моей страницы', numberOfPhotos : 12,
        img : 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&proxy=1&sign=977f3817b9a6e126e647ecfa73707799&type=album'},
        {title : 'Фотографии со мной', numberOfPhotos : 19,
            img : 'https://sun9-34.userapi.com/impf/c837439/v837439521/2059c/Qs8y4epZ8Eo.jpg?size=1280x720&quality=96&proxy=1&sign=38aacc87028bb334f231a8998cd53509&type=album'},
        {title : 'Фотографии на моей стене', numberOfPhotos : 9,
            img : 'https://sun9-34.userapi.com/impf/c630830/v630830366/5598c/77mMHXRZjBk.jpg?size=1280x960&quality=96&proxy=1&sign=c042c77da16af76c66f47fe14c696324&type=album'},
        {title : 'Сохраненные фотографии', numberOfPhotos : 18,
            img : 'https://sun9-62.userapi.com/impf/c836430/v836430420/5d0f9/tvSB-3kasek.jpg?size=1280x960&quality=96&sign=dea7c9c41e499fde17c65e736466bdf4&type=album'}
    ],
    numberOfPhotos : '7',
    myPhotos : [
        {
            year: 2018, photos: [
                {
                    id: -1,
                    url: '',
                    data : ''
                }
            ]
        },
    ]

}

let photosReducer =(state = initializationState, action) => {
    switch (action.type){
        case 'FOTOR_SET_FOTOS' :
            debugger
            return {
                ...state,
                myPhotos :action.resultSet,
                numberOfPhotos : action.numberOfPhotos
            }
        case 'PHOTOR_SET_CURRENT_FOTO' :
            return {
                ...state,
                currentFoto : {
                    ...state.currentFoto,
                    img :action.foto.url
                }
            }
        default :
            return {
                ...state
            }
    }
}
export let setFotos = (resultSet,numberOfPhotos) => {
    return {
        type: 'FOTOR_SET_FOTOS',
        resultSet: resultSet,
        numberOfPhotos : numberOfPhotos
    }
}

export let setCurrentFoto = (foto) => {
    return {
        type: 'PHOTOR_SET_CURRENT_FOTO',
        foto : foto
    }
}
/* THUNKS */
export let getFotoListbyUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getFotosByUserId(id, headers).then(respounse => {
        let fotos =respounse.data;
        let years = new Set(fotos.map(foto => (new Date(foto.data)).getFullYear()));
        let resultSet = [];
        years.forEach( year => {

            let photos = [];
            fotos.forEach( foto => {
                if ((new Date(foto.data)).getFullYear() ===year){
                    photos.push(foto);
                }
            });

            resultSet.push({
                year : year,
                photos : photos
            })
        });
        resultSet = resultSet.sort((o1, o2) => {
            if(o1.year > o2.year) {
                return -1;
            } else  {
                return 1;
            }
        })
        dispatch(setFotos(resultSet, fotos.length));
    })


}

export let getFotoById = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    FotoAPI.getFotoInfo(id, headers).then(respounse => {
        let foto =respounse.data;
        setCurrentFoto(foto)
    })


}
export default photosReducer;