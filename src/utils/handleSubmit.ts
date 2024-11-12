import axios from "axios";
import { useAppState } from "../context/AppContext";
import BankType from "../components/BankType";
import { useState, useEffect } from "react";
import apps from "../api/apps";

const useHandleSubmit = () => {
    const state = useAppState();
    
    // Using useEffect hook with axios async await to fetch data from server
    const [banks, setBanks] = useState<BankType[]>([]);
    // Fetch data at load time so the dependencies must be an empty array
    useEffect(() => {
    const fetch = async () => {
        try {
        // Define the response
        const response = await apps.get('/api/wcb/serviceability/banks');

        // This point indicate the response is already within 200 rage
        console.log(response);

        setBanks(response.data);
        console.log('Fetch successfully');

        } catch (err: any) {
        // axios automatically catch any response error outside 200 range
        
        if (err.response) {
            // Not within 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            // Some unknown error
            console.log(`Error: ${err.message}`);
        }
        }
    }

    fetch();
    }, [])
    // Handle form submission
    const handleSubmit = async (event: any, setResults: any) => {
        // preventDefault to prevent page reloading
        event.preventDefault();

        // Construct request data including all states (sections)
        const application = {
            applicants: state.applicants,
            incomes: state.incomes,
            properties: state.properties,
            loans: state.loans,
            commitments: state.commitments,
            expenses: state.expenses,
        };
        console.log(application);




        // Using axios post request, change URL as needed
        // then(response) will out put response data to display on screen
        try {
        const response =  axios
        .post("http://localhost:5267/api/wcb/serviceability/ServiceabilityResult/", application)
        .then((response) => {
            console.log("Response: ", response.data);
            const data = Object.values<number>(response.data);
            console.log(banks);
            banks.map((bank, index) => {
                bank.maximumBorrow = data[index];
                console.log(`Bank ID: ${index} - ${bank.name}, max borrow: ${bank.maximumBorrow}`);
                // if (bank.maximumBorrow === null || bank.maximumBorrow === 0 || bank.maximumBorrow === undefined)
                // {
                //     bank.maximumBorrow = data[index];
                // }
            })
            console.log(banks);
            setResults(response.data);
        })
        .catch((error) => {
            if (error.response) {
            console.log(error.response);
            console.log("Server responded with error");
            } else if (error.request) {
            console.log("Network error");
            } else {
            console.log(error);
            }
        })
        } catch (error) {
            console.log(error);
        }
    }
    return handleSubmit;
}


export default useHandleSubmit;