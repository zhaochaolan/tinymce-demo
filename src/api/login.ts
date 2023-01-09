import request from '@/utils/request/index'

namespace Login {
    export interface LoginReqForm {
        username:string;
        password:string;
    }

    export interface LoginResData {
        token: string;
    }
}

export const login = (params:Login.LoginReqForm) => {
    return request.post<Login.LoginResData>('/user/login',params)
}