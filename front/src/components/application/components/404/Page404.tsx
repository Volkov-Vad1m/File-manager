import React from 'react'
import {Button, Result} from "antd";

import './Page404.css'
import {useNavigate} from "react-router-dom";

const Page404 = () => {

    const navigate = useNavigate()

    return (
        <div className={"error-content"}>
            <Result
                status={"404"}
                title={"404"}
                subTitle={"Запрашиваемая страница не найдена"}
                extra={
                    <Button type={"primary"} onClick={() => navigate('/')}>
                        На главную
                    </Button>
                }
            />
        </div>
    )

}


export default Page404;
