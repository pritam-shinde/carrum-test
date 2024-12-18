import React from "react";
import Top from "../../../public/carrum-new/about-us.jpg";
import { Container, Box, Typography } from "@mui/material";

const AboutNew = () => {
    return (
        <>
            <Container maxWidth="xxl" className="p-0" style={{ marginTop: "5%" }}>
                <Box sx={{
                    backgroundImage: `url(${Top.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "100vh", md: "100vh" },
                    position: "relative",
                }}
                    className="about-content"
                >
                    <Box
                        sx={{
                            zIndex: 2,
                            color: "white",
                            textAlign: "left",
                            maxWidth: { xs: "90%", md: "70%", lg: "50%" },
                            p: { xs: 2, md: 12 },
                            borderRadius: "8px",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1.5rem", md: "2.5rem" },
                                mb: 2,
                            }}
                        >
                            Welcome to Carrum Downs Dental
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "light",
                                fontSize: { xs: "1.2rem", md: "1.8rem" },
                                mb: 3,
                            }}
                        >
                            at Shop T5, Hall Road!
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                            }}
                        >
                            Most Trusted Family Dentist in Carrumdowns
                        </Typography>

                        <Typography
                            paragraph
                            sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                mb: 2,
                            }}
                        >
                            Our practice provides our patients with comprehensive services
                            under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions
                            to Dentures, our clinic's wide range of affordable services will
                            put a big smile on your face. We believe in giving our patients a
                            choice in treatment and will always educate and discuss treatment
                            options before a decision is made.
                        </Typography>
                        <Typography
                            paragraph
                            sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                mb: 2,
                            }}
                        >
                            Our staff are very friendly and will receive you with a smile, and
                            our warm and inviting office will provide you with a relaxing
                            experience. Our dentist/staff are very good with children and will
                            do whatever it takes to calm them down and distract them with
                            iPads while the treatment is performed.
                        </Typography>
                        <Typography
                            paragraph
                            sx={{
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                mb: 2,
                            }}
                        >
                            We accept dental vouchers from the public dental services
                            (Victorian Dental Scheme and Child Dental Benefit Schedule). Our dentist speaks English, Hindi, Tamil, Arab, Malayalam, and Urdu.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AboutNew;

// import React from 'react';
// import Top from '../../../public/carrum-new/about-us.jpg'; // Your background image
// import Styles from '../../../styles/Home.module.css';
// import { Container, Grid, Box, Typography } from '@mui/material';

// const AboutNew = () => {
//     return (
//         <>
//             <Container maxWidth="xxl" className="p-0">
//                 <Box
//                     sx={{
//                         backgroundImage: `url(${Top.src})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         height: { xs: '600px', md: '800px' },
//                         position: 'relative',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             position: 'absolute',
//                             inset: 0,
//                             backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay effect
//                             zIndex: 1,
//                         }}
//                     ></Box>
//                     <Box
//                         sx={{
//                             zIndex: 2,
//                             color: 'white',
//                             textAlign: 'center',
//                             maxWidth: { xs: '90%', md: '60%' },
//                             p: { xs: 2, md: 4 },
//                             borderRadius: '8px',
//                         }}
//                     >
//                         <Typography variant="h4" className="fw-bold mb-3">
//                             Welcome to Carrum Downs Dental
//                         </Typography>
//                         <Typography variant="h5" className="fw-light mb-4">
//                             at Shop T5, Hall Road!
//                         </Typography>
//                         <Typography paragraph>
//                             Our practice provides our patients with comprehensive services under one roof. From{' '}
//                             <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>Dental Implants</span> to
//                             Cosmetic Dentistry and{' '}
//                             <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
//                                 Wisdom tooth extractions
//                             </span>{' '}
//                             to Dentures, our clinic's wide range of affordable services will put a big smile on your face. We
//                             believe in giving our patients a choice in treatment and will always educate and discuss
//                             treatment options before a decision is made.
//                         </Typography>
//                         <Typography paragraph>
//                             Our staff are very friendly and will receive you with a smile, and our warm and inviting office
//                             will provide you with a relaxing experience. Our dentist/staff are very good with children and
//                             will do whatever it takes to calm them down and distract them with iPads while the treatment is
//                             performed.
//                         </Typography>
//                         <Typography paragraph>
//                             We accept dental vouchers from the public dental services (Victorian Dental Scheme and{' '}
//                             <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>Child Dental Benefit Schedule</span>). Our
//                             dentist speaks English, Hindi, Tamil, Arab, Malayalam, and Urdu.
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Container>
//         </>
//     );
// };

// export default AboutNew;
