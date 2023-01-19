import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography, TextField, Box } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard>
                            <Grid container spacing={gridSpacing}>
                                <Grid item md={8} xs={12}>
                                    <Typography variant="h2" sx={{ mb: 2 }}>
                                        Good Evening, Conor O'Toole
                                    </Typography>

                                    <Typography variant="subtitle1" fontSize={16} sx={{ mb: 2 }}>
                                        Welcome to your dashboard for <strong>Paddy's Pizza.</strong> <br />
                                        Check out these personalized tips and performance statistics from LoyLap.
                                    </Typography>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Box sx={{ px: 2, pt: 0.25 }}>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            fullWidth
                                            onChange={() => null}
                                            SelectProps={{
                                                native: true
                                            }}
                                        >
                                            <option value="Test">Franchise view</option>
                                        </TextField>
                                    </Box>

                                    <Box sx={{ mt: 2, px: 2, pt: 0.25 }}>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            fullWidth
                                            onChange={() => null}
                                            SelectProps={{
                                                native: true
                                            }}
                                        >
                                            <option value="Test">All Branches</option>
                                        </TextField>
                                    </Box>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
