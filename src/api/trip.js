import request from "../request/index";
export const getTrips = () => {
    return request.get('/trip')
}