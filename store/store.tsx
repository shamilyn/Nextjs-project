import create from 'zustand';
import { fetchData } from '../api/api';

export interface EmployeeData {
  id: number;
  first_name: string;
  last_name: string;
  age: string;
  salary: string;
  contact: string;
  email: string;
  avatar: string;
}

interface EmployeeStore {
  data: EmployeeData[];
  selectedEmployee: EmployeeData | null;
  activeTab: number;
  tabName: string;
  setActiveTab: (tabIndex: number) => void;
  setData: (data: EmployeeData[]) => void;
  addData: (newData: EmployeeData) => void;
  setSelectedEmployee: (employee: EmployeeData | null) => void;
  updateData: (updatedData: EmployeeData) => void;
  setTabName:(name: string) => void;
}


export const useEmployeeStore = create<EmployeeStore>((set) => ({
  data: [],
  selectedEmployee: null,
  activeTab: 0,
  tabName: 'Add Employee',
  setActiveTab: (tabIndex) => {
    console.log('Setting active tab:', tabIndex);
    set({ activeTab: tabIndex })
  },
  setData: (newData) => {
    console.log('Setting data:', newData);
    set({ data: newData });
  },
  addData: (newData) => {
    console.log('Adding data:', newData);
    set((state) => ({ data: [...state.data, newData] }));
  },
  initData: async () => {
    const data = await fetchData();
    set({ data });
  },
  setSelectedEmployee: (employee) => {
    console.log('Edit data:', employee);
    set({ selectedEmployee: employee });
  },
  updateData: (updatedData) => {
    set((state) => ({
      data: state.data.map((item) =>
        item.id === updatedData.id ? { ...item, ...updatedData } : item
      ),
    }));
  },
  setTabName: (name) => {
    set({tabName: name})
  },
}));

// Fetch initial data
export const initData = async () => {
  const data = await fetchData();
  useEmployeeStore.setState({ data });
};
