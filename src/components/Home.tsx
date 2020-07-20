import * as React from 'react';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Form, Input, Button, Row, Col } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Warrior from '../models/Warrior';
import { Link } from 'react-router-dom';

const Home = (warrior: Warrior) =>
{
    const onFinish = () =>
    {
        console.log('FIGHT!!!');
    }

    const onFinishFailed = () =>
    {
        console.log('Invalid form data!');
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
                        <Col span={6}>
                            <Link to='/select-warrior'>
                                <img className='avatar' src={imageUrlHelper(warrior.imageName)} />
                            </Link>
                        </Col>
                        <Col span={18}>
                        <Form.Item
                        name='name-player'
                        required
                        >
                            <Input id='input-name-player' placeholder='$WARRIOR-NAME' />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row className='row-round' id='row-round1'>
                        <Col span={22}>
                            <div>Attack For Round #1</div>
                        </Col>
                        <Col span={2}>
                            <UpOutlined />
                        </Col>
                    </Row>
                    <Row className='row-round' id='row-round2'>
                        <Col span={22}>
                        <div>Attack For Round #2</div>
                        </Col>
                        <Col span={2}>
                            <UpOutlined />
                        </Col>
                    </Row>
                    <Row className='row-round' id='row-round3'>
                        <Col span={22}>
                        <div>Attack For Round #3</div>
                        </Col>
                        <Col span={2}>
                            <UpOutlined />
                        </Col>
                    </Row>
                    <Button id='button-fight' type='primary' htmlType='submit'>FIGHT!!!</Button>
                </Form>
            </Content>
        </Layout>
        
    )
}
export default Home;