import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/2.0/',
    withCredentials: true,
})


// api
export const API = {
    passwordForgot(email: string) {


            return instance.post('auth/forgot',
                {
                    email: email,
                    from: 'godfather59@yandex.ru',
                    message: `<div>
										
									</div>`

                })

    }
}






