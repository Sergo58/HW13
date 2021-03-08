import React from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch} from "react-redux";
import {passwordTC} from "../../bll/reducers/passwordReducer";
import {API} from "../../api/passwordForgot-api";


export function TestPage() {




    const dispatch = useDispatch()

    let handler = () => {

       API.passwordForgot("godfather59@yandex.ru")

            .then((res) => {

                alert("success")

            })
            .catch((err) => {
                alert("error")


            })
            .finally(() => {

            })
    }

    return (
        <div>
            <div>TestPage</div>
            <div><SuperInputText /></div>
            <div><SuperButton onClick={handler} error={''}>button</SuperButton></div>
            <div><SuperCheckbox/></div>


        </div>
    );
}



// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз