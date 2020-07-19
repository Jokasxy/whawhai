import * as React from 'react';
import { useState } from 'react';
import WarriorRepository from '../repository/WarriorRepository';
import { Layout, Form, Input, Button, Select, Row, Col } from 'antd';

const Home = () =>
{
    const [warrior, setWarrior] = useState(WarriorRepository.getInstance().getWarriors()[0]);

    const onFinish = () =>
    {
        console.log('finished');
    }

    const { Header, Content } = Layout;

    return (
        <Layout>
            <Header>
                <h1>WHAWHAI</h1>
            </Header>
            <Content>
                <Form
                name='form-home'
                onFinish={onFinish}
                >
                    <img className='avatar' src={require(process.env.REACT_APP_IMAGES_PATH! + warrior.imageName)} />
                    <Form.Item
                    name='name-player'
                    >
                        <Input placeholder='$WARRIOR-NAME' />
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
        
    )
}
export default Home;