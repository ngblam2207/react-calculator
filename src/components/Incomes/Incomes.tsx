import { InputAdornment, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import useHandleChange from "../../utils/handleChange";
import { ApplicantType } from "../Applicants/ApplicantType";
import { frequency } from "../frequencyOptions";

const Incomes = ({applicant}: { applicant: ApplicantType }) => {
    // There will always be one income instance in incomes array from applicant
    const income = applicant.incomes[0];
    const handleChange = useHandleChange();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Income Sources</TableCell>
                    <TableCell>Frequency</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TextField
                            size="small"
                            type="number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
                            label="Base Income"
                            name="baseIncome"
                            value={income.baseIncome}
                            onChange={(event) => handleChange(
                                event,
                                'applicants',
                                applicant,
                                'incomes',
                                income.instanceId)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            label="Frequency"
                            name="baseIncomeFreq"
                            value={income.baseIncomeFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant, 'incomes', income.instanceId)}
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
                            label="Overtime Income"
                            name="overtimeIncome"
                            value={income.overtimeIncome}
                            onChange={(event) => handleChange(
                                event,
                                'applicants',
                                applicant,
                                'incomes',
                                income.instanceId)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            label="Frequency"
                            name="overtimeIncomeFreq"
                            value={income.overtimeIncomeFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant, 'incomes', income.instanceId)}
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
                            label="Bonus Income"
                            name="bonusIncome"
                            value={income.bonusIncome}
                            onChange={(event) => handleChange(
                                event,
                                'applicants',
                                applicant,
                                'incomes',
                                income.instanceId)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            label="Frequency"
                            name="bonusIncomeFreq"
                            value={income.bonusIncomeFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant, 'incomes', income.instanceId)}
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
                            label="Commission Income"
                            name="commissionIncome"
                            value={income.commissionIncome}
                            onChange={(event) => handleChange(
                                event,
                                'applicants',
                                applicant,
                                'incomes',
                                income.instanceId)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            label="Frequency"
                            name="commissionIncomeFreq"
                            value={income.commissionIncomeFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant, 'incomes', income.instanceId)}
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
                            label="Other Income"
                            name="otherIncome"
                            value={income.otherIncome}
                            onChange={(event) => handleChange(
                                event,
                                'applicants',
                                applicant,
                                'incomes',
                                income.instanceId)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            size="small"
                            select
                            label="Frequency"
                            name="otherIncomeFreq"
                            value={income.otherIncomeFreq}
                            onChange={(event) => handleChange(event, 'applicants', applicant, 'incomes', income.instanceId)}
                        >
                        {frequency.map((option, index) => (
                            <MenuItem key={index} value={option.label}>{option.label}</MenuItem>
                        ))}
                        </TextField>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default Incomes;