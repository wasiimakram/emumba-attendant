import React from 'react'
import { Layout, Row, Col, Typography,Button, Checkbox, Form, Input, Card,  message} from 'antd';
// import {Link} from "react-router-dom";
import {FacebookOutlined,InstagramOutlined,GoogleOutlined,LinkedinOutlined} from '@ant-design/icons'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { attemptUpdatePassword } from '../../app-redux/modules/auth/authSlice';
import { useHistory } from 'react-router-dom';
const { Content } = Layout;  


export default function ChangePassword() { 
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = async (values: any) => {
        // try-catch
        const res = await dispatch(attemptUpdatePassword(values))
        if(res){
            message.success('Password udpated successfully!');
            history.push('/user-dashboard');
        }else message.error('Something went wrong!')
    };
    const handleCancel = ()=>{
        history.push('/login')
    }
  return (
    <>
    <Layout className="change-password-main-wrap">
        <Card title="Change Password">
            <Content className='form-wrap'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    >
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} 
                        placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirm-password"
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match.'));
                              },
                            }),
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Item>
                    
                    <Form.Item className='form-button'>
                        <Button type="primary" htmlType="submit" className="btn-cancel"
                            onClick={handleCancel}
                        >
                        Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" className="btn-success">
                        Save
                        </Button>
                    </Form.Item>
                    
                    </Form>
            </Content>
        </Card>
                
        
    </Layout>
    </>
  )
}
