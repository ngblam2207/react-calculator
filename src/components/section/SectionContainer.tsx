import { Box, Collapse, Button, Paper, IconButton, Typography, Stack } from "@mui/material";
import { ReactNode, useState } from "react";
import { handleAddInstanceButton, headerStyle, sectionContainerStyle } from "../../styles/sectionStyles";
import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";
import useHandleAddInstance from "../../utils/handleAddInstance";

// Section Container properties
// children contains instances within the section
interface SectionProps {
    headerLabel: string;
    instanceType: string;
    numberOfInstances: number;
    collapsed: boolean;
    children: ReactNode;
}
const SectionContainer = ({
    headerLabel,
    instanceType,
    numberOfInstances,
    collapsed,
    children,
}: SectionProps) => {
    // Collapse is passed as a props to set the default state upon user load the app
    const [collapse, setCollapse] = useState(collapsed);

    const handleAddInstance = useHandleAddInstance();

    return (
        <Paper elevation={3} className="Section">
            {/* Section header including */}
            <Box sx={headerStyle} >
                {/* Section header with number of instance */}
                <Typography variant="h5">{`${headerLabel} (${numberOfInstances})`}</Typography>
                {/* Button to add new instance into the section */}
                <Button
                    variant="contained"
                    startIcon={<Add/>}
                    onClick={() => {
                        handleAddInstance(instanceType);
                        // if the current section container is collapsed, expand when add new instance
                        if (collapse) {
                            setCollapse(false);
                        }
                    }}
                    sx={{handleAddInstanceButton}}
                >
                    Add {headerLabel}
                </Button>
            </Box>

            {/* Button to expand/collapse the section */}
            <IconButton onClick={() => setCollapse(!collapse)}>
                {collapse ? <ExpandMore/> : <ExpandLess/>}
            </IconButton>

            {/* Expanding/Collapsing section */}
            <Collapse
                in={!collapse}
                style={{ transformOrigin: "0 0 0" }}
                {...(!collapse ? { timeout: 300 } : {})}
            >
                <Box>{children}</Box>
            </Collapse>
        </Paper>
    );
};

export default SectionContainer