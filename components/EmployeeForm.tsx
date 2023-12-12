// components/FormComponent.tsx
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageUpload from '../components/ImageUpload';
import {useEmployeeStore, EmployeeData, initData} from '../store/store';

const FormComponent: React.FC = () => {

  const [formData, setFormData] = useState<EmployeeData>({ 
    id: 0,
    first_name: "",
    last_name: "",
    age: "",
    salary: "",
    contact: "",
    email: "",
    avatar: "",

  });


  // const addData  = useEmployeeStore((state) => state.addData);

  const { data, setData, addData, selectedEmployee, setSelectedEmployee, updateData, setTabName, setActiveTab } = useEmployeeStore();

  // const selectedEmployee = useEmployeeStore((state) => state.selectedEmployee);

  useEffect(() => {
    // Update the form data when selectedEmployee changes
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    }
  }, [selectedEmployee]);


  const handleSubmit = async () =>  {
        console.log(formData)
        if(selectedEmployee){
          updateData(formData);
          setTabName('Add Employee');
        }
        else {
          // addData(formData);
          addData({ ...formData, id: data.length + 1 });

          await setData([formData, ...data]);
        }
        setActiveTab(0)
        
        setFormData({
          id: 0,
          first_name: '',
          last_name: '',
          age: '',
          salary: '',
          contact: '',
          email: '',
          avatar: '',
          });
          
    };
  const  handleCancel = () => {
    setFormData({
      id: 0,
      first_name: '',
      last_name: '',
      age: '',
      salary: '',
      contact: '',
      email: '',
      avatar: '',
      });
      setTabName('Add Employee');
      setActiveTab(0)
  };

  const handleImageUpload = (image: string) => {
    console.log('Uploading image:', image);
    let imageLink = image.split('blob:')
    formData.avatar = imageLink[1]
  };

  const buttonStyle = {
    backgroundColor: '#D32F2F', //
    marginLeft: 10,
  };

  const gridStyle = {
      marginLeft: 95, 
  };

  return (
    <form>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            value={formData.first_name}
            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={formData.last_name}
            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="salary"
            name="salary"
            label="Salary"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="age"
            name="age"
            label="Age"
            fullWidth
            variant="outlined"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact"
            name="contact"
            label="Contact"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
            <ImageUpload onImageUpload={handleImageUpload} />
        </Grid>
        <Grid item xs={12} sm={10} style={gridStyle} textAlign="right">
            <Button variant="contained" onClick={handleSubmit}>
            {selectedEmployee ? 'Update' : 'Submit'}
            </Button>
            <Button variant="contained" style={buttonStyle}  onClick={handleCancel}>
            Cancel
            </Button>
        </Grid>

      </Grid>
      {/* <div className="m-4"> */}
        
      {/* </div> */}
    </form>
  );
};

export default FormComponent;



