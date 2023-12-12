import { EmployeeData } from '../store/store';

export const fetchData = async (): Promise<EmployeeData[]> => {
    // Perform your API fetch here
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
  };
  