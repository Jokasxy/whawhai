import * as React from 'react';
import imageUrlHelper from '../helpers/imageUrlHelper';
import { Layout, Form, Input, Button, Row, Col, Select } from 'antd';
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
    const rounds = [1, 2, 3];

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
                        <Form.Item name='name-player' required>
                            <Input id='input-name-player' placeholder='$WARRIOR-NAME' />
                        </Form.Item>
                        </Col>
                    </Row>
                    {
                        rounds.map((round, key) =>
                        (
                            <Form.Item className='form-row-round' name={`select-round${round}`} required key={key}>
                                <Select dropdownStyle={{backgroundColor: '#FFE992'}} className='row-round' id={`row-round${round}`} placeholder={`Attack For Round #${round}`}>
                                    {
                                        warrior.attacks.map((attack, key) =>
                                        (
                                            <Select.Option value={attack} key={key}>{attack}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        ))
                    }
                    <Button id='button-fight' type='primary' htmlType='submit'>FIGHT!!!</Button>
                </Form>
            </Content>
        </Layout>
        
    )
}
export default Home;