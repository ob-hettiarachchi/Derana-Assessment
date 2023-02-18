import axios from 'axios';
import Keys from "../config/Keys";

import authHeader from '../config/AuthHeader';

const API_URL = Keys.API_URL + "admin/";

class UserActions {

    CreateNews(title, news, image) {
        return axios.post(API_URL + 'news', {
            title: title,
            news: news,
            image: image
        }, {headers: authHeader()})
    }

    FetchNews(page) {
        return axios.get(API_URL + 'news/' + page, {})
    }

    FetchNewsCount() {
        return axios.get(API_URL + 'news-count', {})
    }

    DeleteNews(id) {
        return axios.delete(API_URL + 'news/' + id, {headers: authHeader()})
    }

    GetNewsById(id) {
        return axios.get(API_URL + 'news-id/' + id, {})
    }

    UpdateNews(id, title, news, image) {
        return axios.put(API_URL + 'news/' + id, {
            title: title,
            news: news,
            image: image
        }, {headers: authHeader()})
    }

}

export default new UserActions();
