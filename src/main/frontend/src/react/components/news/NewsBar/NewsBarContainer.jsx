import NewsBar from "./NewsBar";
import {connect} from "react-redux";
import {getNews} from "../../../../redux/selectors/newsSelector";

let mapStateToProps = (state) => {
    return {
        news : getNews(state)
    }
}

export default connect (mapStateToProps, {}) (NewsBar);