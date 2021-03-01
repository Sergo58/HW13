import React from "react";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";


export function TestPage() {
    return (
        <div>
            <div>TestPage</div>
            <div><SuperInputText /></div>
            <div><SuperButton error={''}>button</SuperButton></div>
            <div><SuperCheckbox/></div>


        </div>
    );
}



// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз