import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store';
import { ISettingAllUsers } from '../../../common/typings/admin.d';
import { settingsRecord } from '../../../app-data/admin.setting.data';

type SettingSt = {
  allUsers: ISettingAllUsers[];
};
const initialState:SettingSt = {
  allUsers:[],
}
export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
      getAllUsers:(state)=>{
        state.allUsers = settingsRecord
      },
      editSettingRecord:(state,action)=>{
        state.allUsers = state.allUsers.map((user) =>{
          const updatedRecord = action.payload;
          return (
            String(user.key) === String(updatedRecord.key)
            ? { ...user, name: updatedRecord.name, email: updatedRecord.email, position: updatedRecord.position }
            : user
          );
        });
      },
      addSettingRecord:(state,action)=>{
        const newRecord = action.payload;
        state.allUsers.push({...newRecord,hours:'150',avg_hrs:'9.00',key:'4'});
      },
      deleteSettingRecord: (state, action) => {
        const deletedKey = action.payload;
        state.allUsers = state.allUsers.filter((user) => String(user.key) !== String(deletedKey));
      },
  },
})

export const { editSettingRecord,getAllUsers,deleteSettingRecord,addSettingRecord } = settingSlice.actions
export const selectAllUsers = (state:RootState)=>state.setting.allUsers

export default settingSlice.reducer