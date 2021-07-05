import axios from 'axios';

const KEY = "AIzaSyCSI7Av2jUZ2G8M2A6xlNOB_DM9meaxOX8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});