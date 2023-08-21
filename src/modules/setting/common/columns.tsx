import React from 'react';
import { Button, Space } from 'antd';
import { IAdminSettings } from '../../../common/typings/admin.d';

type HandleUserSelectionFunction = (user: IAdminSettings) => void;
type HandleUserDeleteFunction = (key: string) => void;

export const columns = (handleEdit: HandleUserSelectionFunction,handleDelete:HandleUserDeleteFunction) => [
          {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Total Hours',
          dataIndex: 'hours',
          key: 'hours',
        },
        {
          title: 'Daily Average Hrs',
          dataIndex: 'avg_hrs',
          key: 'avg_hrs',
        },
        {
          title: 'Action',
          key: 'action',
          render: (record:IAdminSettings) => (
            <Space className='action-button'>
              <Button className='delete' onClick={() => handleDelete(record.key)}>Delete</Button>
              <Button className='edit' onClick={() => handleEdit(record)}>Edit</Button>
            </Space>
          ),
        },
];
