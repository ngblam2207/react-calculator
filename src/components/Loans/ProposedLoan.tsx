import { InputAdornment, MenuItem, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material"
import { useAppState } from "../../context/AppContext"
import useHandleChange from "../../utils/handleChange";

const ProposedLoan = () => {
    const state = useAppState();
    const handleChange = useHandleChange();

    return(
        <Table>
            {state.loans.map((loan, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Loan Amount"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="loanAmount"
                                value={loan.loanAmount}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Security Value"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                name="securityValue"
                                value={loan.securityValue}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Interest Rate"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">%</InputAdornment>
                                    )
                                }}
                                name="interestRate"
                                value={loan.interestRate}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Loan Term"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">Years</InputAdornment>
                                    )
                                }}
                                name="loanTerm"
                                value={loan.loanTerm}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                select
                                label="Repayment Type"
                                name="repaymentType"
                                value={loan.repaymentType}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            >
                                <MenuItem value={'Principle & Interest'}>Principle & Interest</MenuItem>
                                <MenuItem value={'Interest Only'}>Interest Only</MenuItem>
                            </TextField>
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Interest Only Term"
                                disabled={loan.repaymentType !== 'Interest Only'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">Years</InputAdornment>
                                    )
                                }}
                                name="interestOnlyTerm"
                                value={loan.interestOnlyTerm}
                                onChange={(event) => handleChange(event, 'loans', loan)}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            ))}
                
        </Table>
    )
        
}

export default ProposedLoan