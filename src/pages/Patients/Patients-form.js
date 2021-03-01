import React from 'react'
import { TextField, Grid, Typography, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CountryRegionData } from "react-country-region-selector";


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: '25ch',
      },
    },
  }));


  
const PatientsForm  = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('student');
    const [state, setState] = React.useState('single');
    const GroupBlood = ['A', 'B', "AB", 'O']
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    
    return(
        <React.Fragment>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="ชื่อ"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="นามสกุล"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="รหัสบัตรประชาชน"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography paragraph >
                                วัน/เดือน/ปี เกิด
                            </Typography>
                            <TextField
                                id="outlined-password-input"
                                type="date"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography paragraph >
                                สัญชาติ
                            </Typography>
                            <TextField
                                id="country"
                                select
                                variant="outlined"
                                required={true}
                                style={{width: '100%'}}
                                isplayEmpty
                                // onChange={props.handleChange("country")}
                            >
                                {CountryRegionData.map((option, index) => (
                                <MenuItem key={option[0]} value={option}>
                                    {option[0]}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography paragraph >
                                เชื้อชาติ
                            </Typography>
                            <TextField
                                id="country"
                                select
                                variant="outlined"
                                required={true}
                                style={{width: '100%'}}
                                isplayEmpty
                                // onChange={props.handleChange("country")}
                            >
                                {CountryRegionData.map((option, index) => (
                                <MenuItem key={option[0]} value={option}>
                                    {option[0]}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography paragraph >
                                สิทธิการรักษา
                            </Typography>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="student" control={<Radio />} label="นักศึกษา" />
                                <FormControlLabel value="employees" control={<Radio />} label="พนักงานเงินงบประมาณ" />
                                <FormControlLabel value="official" control={<Radio />} label="ข้าราชการ" />
                                <FormControlLabel value="incomeEmployee" control={<Radio />} label="พนักงานเงินได้" />
                                <FormControlLabel value="socialSecurity" control={<Radio />} label="ประกันสังคม" />
                                <FormControlLabel value="specialStaff" control={<Radio />} label="พนักงานพิเศษ" />
                                <FormControlLabel value="employeesChangeCondition" control={<Radio />} label="พนักงานเปลี่ยนสภาพ" />
                                <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />

                            </RadioGroup>
                            </FormControl>       
                        </Grid>
                        <Grid item xs={4}>
                            <Typography paragraph >
                                สถานะ
                            </Typography>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={state} onChange={handleChangeState}>
                                <FormControlLabel value="single" control={<Radio />} label="โสด" />
                                <FormControlLabel value="marry" control={<Radio />} label="สมรส" />
                                <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
                            </RadioGroup>
                            </FormControl>       
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="รหัสบัตรประจำตัว"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                            <TextField
                                label="กลุ่มเลือด"
                                type="text"
                                variant="outlined"
                                style={{width: '100%',marginTop: 20}}
                                required={true}
                                select
                                displayEmpty
                            >
                                {GroupBlood.map((item, index) => (
                                    <MenuItem key={item[0]} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="เบอร์โทรศัพท์"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="โรงพยาบาลที่ส่งต่อ"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography paragraph >
                                เลขบัตรทอง
                            </Typography>
                            <TextField
                                label="เลขบัตรทอง"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                size='medium'
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography paragraph >
                                วันหมดอายุบัตรทอง
                            </Typography>
                            <TextField
                                id="outlined-password-input"
                                type="date"
                                variant="outlined"
                                style={{width: '100%'}}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="ที่อยู่"
                                type="text"
                                variant="outlined"
                                style={{width: '100%'}}
                                size='medium'
                                required={true}
                                multiline
                            />
                        </Grid>
                    </Grid>
                </form>
        </React.Fragment>
    )
}
export default PatientsForm