import * as React from 'react';
import { useState } from 'react';
import WarriorRepository from '../repository/WarriorRepository';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Form, Input, Button, Select, Row, Col } from 'antd';

const Home = () =>
{
    const [warrior, setWarrior] = useState(WarriorRepository.getInstance().getWarriors()[0]);

    const onFinish = () =>
    {
        console.log('FIGHT!!!');
    }

    const onFinishFailed = () =>
    {
        console.log('Invalid form data!');
    }

    const selectWarrior = () =>
    {
        console.log('Warrior Selection Menu');
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
                onFinishFailed={onFinishFailed}
                >
                    <Row gutter={[64, 0]}>
                        <Col span={6} className='test'>
                            <img onClick={selectWarrior} className='avatar' src={imageUrlHelper(warrior.imageName)} />
                        </Col>
                        <Col span={18} className='test'>
                        <Form.Item
                        name='name-player'
                        required
                        >
                            <Input id='input-name-player' placeholder='$WARRIOR-NAME' />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Button id='button-fight' type='primary' htmlType='submit'>FIGHT!!!</Button>
                </Form>
            </Content>
        </Layout>
        
    )
}
export default Home;