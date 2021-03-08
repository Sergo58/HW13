
import {API, } from "../../api/passwordForgot-api";

let initial=''
export const passwordReducer = (state=initial) => {
    switch (state) {


        default: return state;
    }
};





export const passwordTC = (email:string) => () => {

    API.passwordForgot(email)

        .then(res => {


                console.log(res.data.info)

        })
        .catch((error) => {

        })
}
