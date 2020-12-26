import axios from 'axios';
import { Config } from '../Config'

export default axios.create({
    baseURL: "http://ec2-3-224-83-45.compute-1.amazonaws.com:4000",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*'
    }
});