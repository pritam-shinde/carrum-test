import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { SectionalHeading } from "../../../components/components";
import Image from "next/image";

const AdvantageSecNew = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, transparent 60%), url("/carrum-new/our-advantage.jpg")`,
                backgroundSize: "100% 60%", // Make the image cover horizontally but only half vertically
                backgroundPosition: "top center", // Align the image to the top
                backgroundRepeat: "no-repeat",
                py: 4,
            }}
            className="advantage-bg"
        >
            <Container maxWidth="xxl">
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Box py={2}>
                            <SectionalHeading
                                variant="h2"
                                align="center"
                                color="var(--dark-blue)"
                                title="Our Advantage"
                            />
                        </Box>
                    </Grid>

                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent={isSmallScreen ? "flex-start" : "space-around"}
                        sx={{ mt: 0 }}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h5"
                                className="heading-color"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 1,
                                    textAlign: isSmallScreen ? "left" : "left",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span>After Hour</span> <span>Appointments</span>
                            </Typography>
                            <Typography sx={{ textAlign: isSmallScreen ? "left" : "left" }}>
                                We are open after hours by appointment and also open on Saturdays.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h5"
                                className="heading-color"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 1,
                                    textAlign: isSmallScreen ? "left" : "right",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span>Modern</span> <span>Dentistry</span>
                            </Typography>
                            <Typography sx={{ textAlign: isSmallScreen ? "left" : "right" }}>
                                The field of dentistry is constantly evolving. New techniques and
                                procedures expand dentists' capabilities and deliver more
                                effective treatments.
                            </Typography>
                        </Grid>
                    </Grid>

                    {!isSmallScreen && (
                        <Box>
                            <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Image
                                        src="/carrum-new/our-advantage.webp"
                                        alt="Our Advantage"
                                        width={1000}
                                        height={600}
                                        priority
                                        className="img-fluid"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    )}

                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent={isSmallScreen ? "flex-start" : "space-around"}
                        sx={{ mt: 0 }}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h5"
                                className="heading-color"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 1,
                                    textAlign: isSmallScreen ? "left" : "left",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span>Dental</span> <span>Insurance</span>
                            </Typography>
                            <Typography sx={{ textAlign: isSmallScreen ? "left" : "left" }}>
                                We accept most dental insurance and public dental vouchers (CDBS and VDS).
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h5"
                                className="heading-color"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 1,
                                    textAlign: isSmallScreen ? "left" : "right",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span>Dental</span> <span>Emergency</span>
                            </Typography>
                            <Typography sx={{ textAlign: isSmallScreen ? "left" : "right" }}>
                                Starting your day with a missing tooth or pain? Call us now.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AdvantageSecNew;

