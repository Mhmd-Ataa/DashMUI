import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';




const currencies = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manager',
        label: 'Manager',
    },
    {
        value: 'User',
        label: 'User',
    },
];

const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    let onSubmit = () => {
        handleClick();
    }

    return <>
        <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{
                display: "flex", flexDirection: "column", gap: 3, my: 2
            }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                    helperText={errors.firstName ? "Invalid Input" : null}
                    error={errors.firstName}
                    {...register("firstName", { required: true, maxLength: 20 })}
                    label="First Name"
                    variant="filled"
                    sx={{ flex: 1 }} />
                <TextField
                    helperText={errors.lastName ? "Invalid Input" : null}
                    error={errors.lastName}
                    {...register("lastName", { required: true, maxLength: 20 })}
                    label="Last Name"
                    variant="filled"
                    sx={{ flex: 1 }} />
            </Box>

            <TextField
                helperText={errors.Email ? "Invalid Input" : null}
                error={errors.Email}
                {...register("Email", { required: true, pattern: regEmail })}
                label="Email"
                variant="filled" />

            <TextField
                helperText={errors.Contacts ? "Invalid Input" : null}
                error={errors.Contacts}
                {...register("Contacts", { required: true, pattern: phoneRegExp })}
                label="Contacts Number"
                variant="filled" />


            <TextField label="Address 1" variant="filled" />
            <TextField label="Address 2" variant="filled" />


            <TextField
                variant="filled"
                select
                label="Select"
                defaultValue="User" >

                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}

            </TextField>

            <Box sx={{ textAlign: "right" }}>
                <Button  type="submit" variant="contained">Create New User</Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        User is added successfully!
                    </Alert>
                </Snackbar>
            </Box>




        </Box>
    </>
}



export default Form;