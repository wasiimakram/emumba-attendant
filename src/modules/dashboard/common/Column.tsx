import type { ColumnsType } from 'antd/es/table';
import { userTable } from '../../../common/typings/user';
export const columns: ColumnsType<userTable> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width:'50%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width:'50%',
    }
    
  ];