import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

const category: Category = {
  id: "1ce68ddd-4981-4ee2-a23b-a01452b96b01",
  name: "Olive",
  description: "ipslon dolres asdes adresse",
  is_active: true,
  created_at: "2021-09-20T15:00:00.000Z",
  updated_at: "2021-09-20T15:00:00.000Z",
  deleted_at: null,
};

export const initialState = [
  category,
  { ...category, id: "1ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Peach" },
  { ...category, id: "2ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Apple" },
  { ...category, id: "3ce68ddd-4981-4ee2-a23b-a01452b96b01", name: "Orange" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
  },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
