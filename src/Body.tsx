import Applicant from "./components/Applicants/Applicant";
import Property from "./components/Properties/Property";
import { useAppState } from "./context/AppContext";
import SectionContainer from "./components/section/SectionContainer";
import Commitments from "./components/Commitments/Commitments";
import { headerStyle, sectionContainerStyle } from "./styles/sectionStyles";
import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Expenses from "./components/Expenses/Expenses";
import ProposedLoan from "./components/Loans/ProposedLoan";
import useHandleSubmit from "./utils/handleSubmit";
import { useEffect, useState } from "react";
import BankType from "./components/BankType";
import axios from "axios";
import apps from "./api/apps";

const Body = () => {
    const state = useAppState();
    const handleSubmit = useHandleSubmit();

    // // Using useEffect hook with axios async await to fetch data from server
    // const [banks, setBanks] = useState<BankType[]>([]);
    // // Fetch data at load time so the dependencies must be an empty array
    // useEffect(() => {
    //   const fetch = async () => {
    //     try {
    //       // Define the response
    //       const response = await apps.get('/api/wcb/serviceability/banks');

    //       // This point indicate the response is already within 200 rage
    //       console.log(response);

    //       setBanks(response.data.banks);
    //       console.log('Fetch successfully');

    //     } catch (err: any) {
    //       // axios automatically catch any response error outside 200 range
        
    //       if (err.response) {
    //         // Not within 200 response range
    //         console.log(err.response.data);
    //         console.log(err.response.status);
    //         console.log(err.response.headers);
    //       } else {
    //         // Some unknown error
    //         console.log(`Error: ${err.message}`);
    //       }
    //     }
    //   }

    //   fetch();
    // }, [])

    const [results, setResults] = useState<BankType[]>([]);
    return (
        <div id="mainBody">
            <form>
                <Paper elevation={3} className="Section">
                    <Box sx={headerStyle}>
                        <Typography variant="h5">{'Proposed Loan'}</Typography>
                    </Box>
                    <Box><ProposedLoan/></Box>
                </Paper>

                <SectionContainer
                    headerLabel='Applicants'
                    instanceType='applicants'
                    numberOfInstances={state['applicants'].length}
                    collapsed={false}
                    children={<Applicant/>}
                />
                
                <SectionContainer
                    headerLabel='Properties'
                    instanceType='properties'
                    numberOfInstances={state['properties'].length}
                    collapsed={true}
                    children={<Property/>}
                />

                <SectionContainer
                    headerLabel='Commitments'
                    instanceType='commitments'
                    numberOfInstances={state['commitments'].length}
                    collapsed={true}
                    children={<Commitments/>}
                />

                <Paper elevation={3} className="Section">
                    <Box sx={headerStyle}>
                        <Typography variant="h5">{'Expenses'}</Typography>
                    </Box>
                    <Box><Expenses/></Box>
                </Paper>


                <Button 
                    type="submit" 
                    variant="contained"
                    onClick={(event) => handleSubmit(event, setResults)}>
                    Calculate
                </Button>
                
            </form>
            <Paper elevation={3} id="resultTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5">Index</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Bank Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5">Maximum Borrow</Typography>
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            results.map((result, index) => (
                                <TableRow key={index}>
                                    <TableCell>{result.id}</TableCell>
                                    <TableCell>{result.name}</TableCell>
                                    <TableCell>{result.maximumBorrow}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default Body