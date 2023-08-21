import React,{useState} from 'react'
import { Layout,Typography,Input,Card } from 'antd';
import { absentRecord, leaveRecord, presentRecord } from '../../app-data/admin.dashbaord.data';
import { adminAvailablity } from '../../common/typings/admin.d';
const {Title} = Typography;
const { Content } = Layout;
export default function Availability() {
        //drive state
        const [filteredPresentRecord, setFilteredPresentRecord] = useState(presentRecord);
        const [filteredLeaveRecord, setFilteredLeaveRecord] = useState(leaveRecord);
        const [filteredAbsentRecord, setFilteredAbsentRecord] = useState(absentRecord);
      
        const handleSearch = (value:string) => {
            setFilteredPresentRecord(filterRecords(presentRecord, value));
            setFilteredLeaveRecord(filterRecords(leaveRecord, value));
            setFilteredAbsentRecord(filterRecords(absentRecord, value));
        };
        const filterRecords = (recordArray:adminAvailablity,query:string) => {
            return recordArray.filter(item => item.toLowerCase().includes(query.toLowerCase()));
        };

    return (
        <Layout className="availability-main-wrap">
            <Title className='modal-title' level={3}>Today's Availability</Title>
            <Input  placeholder='Search Here...' onChange={(event)=>{handleSearch(event.target.value)}}/>
            <Content className='user-cards'>
                <Card title="Present">
                    <Content>
                        {filteredPresentRecord.length !==0 ? filteredPresentRecord.map((item, index) => (
                            <p key={index}>{item}</p>
                        )):<><p className='no-record'>No Record Found...</p></>}
                    </Content>  
                </Card>
                <Card title="On Leave">
                    <Content>
                        {filteredLeaveRecord.length !==0 ? filteredLeaveRecord.map((item, index) => (
                            <p key={index}>{item}</p>
                        )):<><p className='no-record'>No Record Found...</p></>}
                    </Content>  
                </Card>
                <Card title="Absent">
                    <Content>
                        {filteredAbsentRecord.length !==0 ? filteredAbsentRecord.map((item, index) => (
                            <p key={index}>{item}</p>
                        )):<><p className='no-record'>No Record Found...</p></>}
                    </Content>  
                </Card>
            </Content>
        </Layout>
    )
}
