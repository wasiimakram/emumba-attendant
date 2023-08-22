import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { AdminSettings } from "../../../common/typings/admin.d";
import { settingsRecord } from "../../../app-data/admin.setting.data";

type SettingState = {
  allUsers: AdminSettings[];
};
const initialState: SettingState = {
  allUsers: [],
};
export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    getAllUsers: (state) => {
      state.allUsers = settingsRecord;
    },
    editSettingRecord: (state, action) => {
      state.allUsers = state.allUsers.map((user) => {
        const updatedRecord = action.payload;
        return String(user.key) === String(updatedRecord.key)
          ? {
              ...user,
              name: updatedRecord.name,
              email: updatedRecord.email,
              position: updatedRecord.position,
            }
          : user;
      });
    },
    addSettingRecord: (state, action) => {
      const newRecord = action.payload;
      state.allUsers.push({
        ...newRecord,
        hours: "150",
        average_hours: "9.00",
        key: "4",
      });
    },
    deleteSettingRecord: (state, action) => {
      const deletedKey = action.payload;
      state.allUsers = state.allUsers.filter(
        (user) => String(user.key) !== String(deletedKey)
      );
    },
    searchRecord: (state, action) => {
      const query = action.payload;
      if (query !== "") {
        state.allUsers = state.allUsers.filter((item: any) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      } else state.allUsers = settingsRecord;
    },
  },
});

export const {
  editSettingRecord,
  getAllUsers,
  deleteSettingRecord,
  addSettingRecord,
  searchRecord,
} = settingSlice.actions;
export const selectAllUsers = (state: RootState) => state.setting.allUsers;

export default settingSlice.reducer;
