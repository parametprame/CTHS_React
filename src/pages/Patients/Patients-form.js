import React from 'react'
import {
    Grid,
    Typography,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import { CountryRegionData } from "react-country-region-selector";
import { TextField, Radio, Select } from 'final-form-material-ui';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '25ch',
        },
    },
}));



const PatientsForm = (props) => {
    const classes = useStyles();
    const GroupBlood = ['A', 'B', "AB", 'O']
    const onSubmit = (value) => {
        console.log(value)
    }

    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                    <form className={classes.root} noValidate autoComplete="true" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="firstName"
                                    component={TextField}
                                    type="text"
                                    label="ชื่อ"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    name="lastName"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    component={TextField}
                                    label="นามสกุล"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="รหัสบัตรประชาชน"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="IDCard"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography paragraph >
                                    วัน/เดือน/ปี เกิด
                            </Typography>
                                <Field
                                    id="outlined-password-input"
                                    type="date"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required={true}
                                    component={TextField}
                                    name='date'
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography paragraph >
                                    สัญชาติ
                                </Typography>
                                <Field
                                    id="country"
                                    select
                                    variant="outlined"
                                    required={true}
                                    style={{ width: '100%' }}
                                    isplayEmpty
                                    component={Select}
                                    name="country"
                                    formControlProps={{ fullWidth: true }}
                                // onChange={props.handleChange("country")}
                                >
                                    {CountryRegionData.map((option, index) => (
                                        <MenuItem key={option[0]} value={option}>
                                            {option[0]}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography paragraph >
                                    เชื้อชาติ
                                </Typography>
                                <Field
                                    id="country2"
                                    select
                                    variant="outlined"
                                    required={true}
                                    style={{ width: '100%' }}
                                    isplayEmpty
                                    component={Select}
                                    name="country2"
                                    formControlProps={{ fullWidth: true }}
                                // onChange={props.handleChange("country")}
                                >
                                    {CountryRegionData.map((option, index) => (
                                        <MenuItem key={option[0]} value={option}>
                                            {option[0]}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </Grid>
                            <Grid item xs={4} >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">สิทธิการรักษา</FormLabel>
                                    <RadioGroup column>
                                        <FormControlLabel
                                            label="นักศึกษา"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="student"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="พนักงานเงินงบประมาณ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="employees"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="ข้าราชการ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="official"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="พนักงานเงินได้"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="incomeEmployee"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="ประกันสังคม"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="socialSecurity"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="พนักงานพิเศษ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="specialStaff"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="พนักงานเปลี่ยนสภาพ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="employeesChangeCondition"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="อื่นๆ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="other"
                                                />
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">สถานะ</FormLabel>
                                    <RadioGroup column>
                                        <FormControlLabel
                                            label="โสด"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="single"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="สมรส"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="marry"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="อื่น ๆ"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="other"
                                                />
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <Field
                                    label="รหัสบัตรประจำตัว"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="idnumber"
                                    component={TextField}
                                />
                                <Field
                                    name="blood"
                                    component={Select}
                                    label="กลุ่มเลือด"
                                    variant="outlined"
                                    type="text"
                                    style={{ marginTop: 20 }}
                                    formControlProps={{ fullWidth: true }}
                                >
                                    {GroupBlood.map((item, index) => (
                                        <MenuItem key={item[0]} value={item}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    label="เบอร์โทรศัพท์"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="tell"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    label="โรงพยาบาลที่ส่งต่อ"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="to_hospital"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph >
                                    เลขบัตรทอง
                                </Typography>
                                <Field
                                    label="เลขบัตรทอง"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="idGoldCard"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph >
                                    วันหมดอายุบัตรทอง
                                </Typography>
                                <Field
                                    id="outlined-password-input"
                                    formControlProps={{ fullWidth: true }}
                                    type="date"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required={true}
                                    component={TextField}
                                    name='dateExpGorldCard'

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="ที่อยู่"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="address"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 16, textAlign:'center', width: '100%'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    บันทึกข้อมูล
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </React.Fragment>
    )
}
export default PatientsForm