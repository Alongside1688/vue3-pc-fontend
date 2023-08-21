import request from "../request/index";
export const getCategory = () => {
    return request.get('/category')
}