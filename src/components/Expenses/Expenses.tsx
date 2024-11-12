import { InputAdornment, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material";
import { useAppState } from "../../context/AppContext";
import useHandleChange from "../../utils/handleChange";
import { frequency } from "../frequencyOptions";

const Expenses = () => {
    const state = useAppState();
    const handleChange = useHandleChange();

    return (
        <Table>
            {state.expenses.map((expense, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="General Living Expense"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="livingExpense"
                                value={expense.livingExpense}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Credit Card Limit"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="creditCard"
                                value={expense.creditCard}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Residence & Owners Corporation"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="residenceOwnerCorporation"
                                value={expense.residenceOwnerCorporation}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="residenceOwnerCorporationFreq"
                                value={expense.residenceOwnerCorporationFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Private School & Tuition"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="privateSchool"
                                value={expense.privateSchool}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="privateSchoolFreq"
                                value={expense.privateSchoolFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Child Care"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="childCare"
                                value={expense.childCare}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="childCareFreq"
                                value={expense.childCareFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Health Insurance"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="healthInsurance"
                                value={expense.healthInsurance}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="healthInsuranceFreq"
                                value={expense.healthInsuranceFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Income Protection Insurance"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="incomeProtection"
                                value={expense.incomeProtection}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="incomeProtectionFreq"
                                value={expense.incomeProtectionFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Child Support"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="childSupport"
                                value={expense.childSupport}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="childSupportFreq"
                                value={expense.childSupportFreq}
                                onChange={(event) => handleChange(event, 'expenses', expense)}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    {/*
                    Currently this Nested object cannot be used, amount and frequency are flattened
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Child Support"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="amount"
                                value={expense.childSupport.amount}
                                onChange={(event) => handleChange(event, 'expenses', expense, 'childSupport')}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Frequency"
                                name="frequency"
                                value={expense.childSupport.frequency}
                                onChange={(event) => handleChange(event, 'expenses', expense, 'childSupport')}
                            >
                                {frequency.map((option, index) => (
                                    <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                                ))}
                            </TextField>
                        </TableCell>
                    </TableRow>
                    */}
                </TableBody>
            ))}
        </Table>
    )
}

export default Expenses;