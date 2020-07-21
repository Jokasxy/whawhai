import * as React from 'react';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import WarriorRepository from '../repository/WarriorRepository';

const SelectWarrior = (props: any) =>
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
                        warriors.map((warrior, key) =>
                        (
                            (warrior.id !== props.warriorId) &&
                            <Col span={12} key={key}>
                                <Link to='/'>
                                    <img className='avatar' src={imageUrlHelper(warrior.imageName)} onClick={() => props.onClick(warrior)} />
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Content>
        </Layout>
    )
}
export default SelectWarrior;