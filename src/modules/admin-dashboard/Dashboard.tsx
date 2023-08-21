import React,{} from 'react'
import { Layout,Typography, Card, Image} from 'antd';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../app-redux/modules/auth/authSlice';
import { Link } from 'react-router-dom';
const { Content } = Layout;
const {Title} = Typography;

export default function Dashboard() {
  const authUser = useSelector(selectAuthUser)
  return (
    <>
        <Layout className="admin-dashboard-main-wrap">
            
            <Image
              className='user-image'
              src="assets/images/user2.png"
            />
            <Title level={4}>Hi! {authUser ? authUser.name : ''}</Title>
            <Content className='user-cards'>
                <Card>
                  <Content>
                    <Link to="/availability">Today's Availibility</Link>
                  </Content>  
                </Card>
                <Card>
                  <Content>
                    <Link to="/stats">Overall Stats</Link>
                  </Content>  
                </Card>
                <Card>
                  <Content>
                    <Link to="/setting">Settings</Link>
                  </Content>  
                </Card>
            </Content>
        </Layout>
        
    </>
  )
}
