import * as React from 'react';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const SelectWarrior = (warriorName: String, setWarrior: any) =>
{
    const { Header, Content } = Layout;

    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ fontSize: '4rem' }} />
                    </Col>
                    <Col span={22}>
                        <h1>TANGATA TOA</h1>
                    </Col>
                </Row>
            </Header>
        </Layout>
    )
}
export default SelectWarrior;