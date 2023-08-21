import request from "../request/index";
export const getRoutes = () => {
    return request.get('/route')
}