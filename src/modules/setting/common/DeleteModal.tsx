import React from 'react'
import { Modal, message } from 'antd';
import { deleteSettingRecord } from '../../../app-redux/modules/setting/settingSlice';
import { useDispatch } from 'react-redux';
type DeleteModalProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    deleteKey:string;
}
const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, setOpen,deleteKey }) => {
    const dispatch = useDispatch();
    const handleOk = async () => {
        if (deleteKey) {
            const res = await dispatch(deleteSettingRecord(deleteKey));
            if(res){
                message.success('Record deleted successfully!')
                setOpen(false); 
            }
        }
    };
    const handleCancel = () => {
        setOpen(false);
    };
  return (
    <Modal
          className='delete-modal' 
          centered 
          title="Delete Record" 
          open={isOpen} 
          onOk={handleOk} 
          onCancel={handleCancel}
          okText="Delete"
          cancelText="Cancel"
          >
            Are you sure you want to delete?
    </Modal>
  )
}
export default DeleteModal