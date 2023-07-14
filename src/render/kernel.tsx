import React from "react";
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BodyPage from "./body";

const KernelPage = () => {
    return (<div>
        <Layout>
            <Header>
                this is header
            </Header>

            <Content>
                <BodyPage/>
            </Content>
        </Layout>
    </div>)
}
export default KernelPage