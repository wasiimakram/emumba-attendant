import React,{useState,useEffect} from 'react'
import { Layout,Typography,Input,Table, Button } from 'antd';
import { columns } from './common/columns';
import { IAdminSettings } from '../../common/typings/admin.d';
import SettingModal from './common/SettingModal';
import DeleteModal from './common/DeleteModal';
import { getAllUsers, selectAllUsers } from '../../app-redux/modules/setting/settingSlice';
import { useDispatch, useSelector } from 'react-redux';
const {Title} = Typography;
const { Content } = Layout;
export default function Setting() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState<string | null>(null); 
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllUsers());
    },[dispatch])
    // Search logic
    const pageRecord = useSelector(selectAllUsers);
    const [pageData, setPageData] = useState(pageRecord);
    useEffect(() => {
      setPageData(pageRecord)
    }, [pageRecord])
    
    const handleSearch = (title:string)=>{
      const filteredData = filterRecords(pageRecord, title);
      setPageData(filteredData);
    }
    const filterRecords = (recordArray:any, query:string) => {
      const record = recordArray.filter((item:any) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(record)
      return record;
    };
    // Table actions
    const [selectedUser, setSelectedUser] = useState<IAdminSettings | null>(null);
    const handleAddUser = () => {
      setSelectedUser(null);
      setIsAddModal(true);
      setIsModalOpen(true);
    };
    const handleUserSelection = (user: IAdminSettings) => {
      setSelectedUser(user);
      setIsAddModal(false);
      setIsModalOpen(true);
    };
    const handleDelete = (key: string) => {
      setSelectedKey(key); // Set the selected key before opening the delete modal
      setIsDeleteModalOpen(true);
    };
    // columns
    const tableColumns = columns(handleUserSelection,handleDelete); 
    return (
      <Layout className="setting-main-wrap">
          <Title className='modal-title' level={3}>Setting</Title>
          <Input  placeholder='Search Here...' onChange={(event)=>{handleSearch(event.target.value)}}/>
          <Content className='sortable'>
              <Button className='edit' onClick={handleAddUser}>Add New Record</Button>
          </Content>
          <Table columns={tableColumns} dataSource={pageData} />
          <SettingModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              selectedUser={isAddModal ? null : selectedUser}
              isAddModal={isAddModal}
            />
            {selectedKey && (
              <DeleteModal 
                isOpen={isDeleteModalOpen}
                setOpen={setIsDeleteModalOpen}
                deleteKey={selectedKey}
              />
            )}
      </Layout>
    )
}
