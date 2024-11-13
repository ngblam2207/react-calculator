import { Button, Collapse, IconButton, InputAdornment, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, TextField } from '@mui/material';
import useHandleChange from '../../utils/handleChange';
import useHandleAddNested from '../../utils/handleAddNested';
import useHandleDeleteInstance from '../../utils/handleDeleteInstance';
import useHandleDeleteNested from '../../utils/handleDeleteNested';
import { useAppState } from '../../context/AppContext';
import { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Property = () => {
    const state = useAppState();
    const [collapse, setCollapse] = useState(false);

    const handleAddNested = useHandleAddNested();
    const handleChange = useHandleChange();
    const handleDeleteInstance = useHandleDeleteInstance();
    const handleDeleteNested = useHandleDeleteNested();

    return(
        <Table>
            {state.properties.map((property, index) => (
                <TableBody key={index}>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <TextField
                                size="small"
                                type="text"
                                label="Address"
                                name="address"
                                value={property.address}
                                onChange={(event) => handleChange(event, 'properties', property)}
                            />
                        </TableCell>
                        <TableCell rowSpan={1}>
                            <Button 
                                size="small"
                                variant="outlined"
                                startIcon={<DeleteIcon/>}
                                onClick={() => handleDeleteInstance(property.instanceId, 'properties', 'loans')}
                            >
                                Property
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Monthly Income"
                                name="monthlyIncome"
                                value={property.monthlyIncome}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                onChange={(event) => handleChange(event, 'properties', property)}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                size="small"
                                type="number"
                                label="Monthly Expense"
                                name="monthlyExpense"
                                value={property.monthlyExpense}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">$</InputAdornment>
                                    )
                                }}
                                onChange={(event) => handleChange(event, 'properties', property)}
                            />
                        </TableCell>
                        <TableCell>
                            <Button
                                size="small"
                                variant="contained"
                                startIcon={<AddIcon/>}
                                onClick={() => {
                                    handleAddNested( property, 'loans');
                                    if (collapse) { setCollapse(false) }
                                }}
                            >
                                Loan
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} align='center'>
                            <IconButton onClick={() => setCollapse(!collapse)}>
                                {collapse ? <ExpandMore/> : <ExpandLess/>}
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={4}>
                            <Collapse in={!collapse}>
                                <Table>
                                    {property.loans.map((loan, index) => (
                                    <TableBody key={index}>
                                        <TableRow>
                                            <TableCell>
                                                <TextField
                                                size="small"
                                                type="number"
                                                label="Loan Limit"
                                                name="loanAmount"
                                                value={loan.loanAmount}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">$</InputAdornment>
                                                    )
                                                }}                                                
                                                onChange={(event) => handleChange(event, 'properties', property, 'loans', loan.instanceId)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                size="small"
                                                type="number"
                                                label="Balance"
                                                name="balance"
                                                value={loan.balance}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">$</InputAdornment>
                                                    )
                                                }}
                                                onChange={(event) => handleChange(event, 'properties', property, 'loans', loan.instanceId)}
                                                />
                                            </TableCell>
                                            <TableCell rowSpan={2}>
                                                <Button 
                                                    size="small"
                                                    variant="contained"
                                                    startIcon={<RemoveIcon />}
                                                    onClick={() => handleDeleteNested(property, loan.instanceId, 'loans')}
                                                >
                                                Loan
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <TextField
                                                size="small"
                                                type="number"
                                                label="Interest Rate"
                                                name="interestRate"
                                                value={loan.interestRate}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start">%</InputAdornment>
                                                    )
                                                }}
                                                onChange={(event) => handleChange(event, 'properties', property, 'loans', loan.instanceId)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                size="small"
                                                type="number"
                                                label="Loan Term"
                                                name="loanTerm"
                                                value={loan.loanTerm}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start">Years</InputAdornment>
                                                    )
                                                }}
                                                onChange={(event) => handleChange(event, 'properties', property, 'loans', loan.instanceId)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    ))}
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={3} align='center'>
                                                Loan associated: {property.loans.length}
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </TableBody>
            ))}
        </Table>
    )
}

export default Property