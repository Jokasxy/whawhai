import * as React from 'react';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import WarriorRepository from '../repository/WarriorRepository';
import Warrior from '../models/Warrior';

const SelectWarrior = (warrior: Warrior, setWarrior: any) =>
{
    const warriors = WarriorRepository.getInstance().getWarriors();
    const { Header, Content } = Layout;

    return (
        <Layout>
            <Header>
                <Row>
                    <Link to='/'>
                        <LeftOutlined id='icon-back' />
                    </Link>
                    <h1>TANGATA TOA</h1>
                </Row>
            </Header>
            <Content>
                <Row gutter={[0, 64]} id='row-avatar'>
                    {
                        warriors.map((warriorMapped, key) =>
                        (
                            (warriorMapped.name !== warrior.name) &&
                            <Col span={12} key={key}>
                                <img className='avatar' src={imageUrlHelper(warriorMapped.imageName)} />
                            </Col>
                        ))
                    }
                </Row>
            </Content>
        </Layout>
    )
}
export default SelectWarrior;