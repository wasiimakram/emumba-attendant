import React from 'react'
import { Layout,Typography,Input,Form,Button,Modal, message } from 'antd';
import { addSettingRecord, editSettingRecord } from '../../../app-redux/modules/setting/settingSlice';
import { useDispatch } from 'react-redux';
import { IAdminSettings } from '../../../common/typings/admin.d';
const {Title} = Typography;
const { Content } = Layout;

type SettingModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedUser:IAdminSettings | null;
    isAddModal:boolean;
}
type editSubmitProps = {
    name:string;
    email:string;
    position:string;
}
const SettingModal: React.FC<SettingModalProps> = ({ isModalOpen, setIsModalOpen,selectedUser,isAddModal }) => {
    const dispatch = useDispatch();
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = async (values:editSubmitProps)=>{
        const result = !isAddModal ? 
            await dispatch(editSettingRecord({...values,key:selectedUser?.key}))
            : await dispatch(addSettingRecord({...values,key:selectedUser?.key}))
        if(result){
            handleOk();
            !isAddModal ? message.success('Record updated successfully!')
            : message.success('Record added successfully!')
        };
    }
    
    const [form] = Form.useForm();
    React.useEffect(() => {
        if (selectedUser) {
          form.setFieldsValue({
            name: selectedUser?.name,
            email: selectedUser?.email,
            position: selectedUser?.position,
          });
        }else form.setFieldsValue({name:'',email:'',position:'',});
        
      }, [selectedUser,form]);
    return (
        <Modal footer={null} open={isModalOpen} onOk={handleOk} 
                onCancel={handleCancel}
                className='edit-modal'
            >
                <Content className='form-wrap'>
                    <Title level={4}>{isAddModal ? 'Add' :'Edit'} Info</Title>
                    <Form
                    form={form}
                    name="normal_login"
                    onFinish={handleSubmit}
                    >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input type="email" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="position"
                        rules={[{ required: true, message: 'Please input your position!' }]}
                    >
                        <Input placeholder="Position" />
                    </Form.Item>
                    <Form.Item className='form-button'>
                        <Button type="primary" htmlType="button"  
                        onClick={()=>handleCancel} 
                        className="btn-cancel">
                        Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" className="btn-success">
                        Save
                        </Button>
                    </Form.Item>
                    
                    </Form>
                </Content>
        </Modal>
    )
}
export default SettingModal