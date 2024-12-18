import { Box, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import BlueOulinedBtn from "../../../components/custom-buttons/BlueOulinedBtn/BlueOulinedBtn";

const ServiceSectionNew = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width]);

    return (
        <>
            <Container maxWidth="xxl" id="service" style={{ marginTop: "5%" }}>
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <div className="mb-5">
                            <p className="fs-5">Pride in professional service</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="fw-bold fs-1 text-light-blue">
                                    Personalised care that you <br /> can depend on
                                </h2>
                                <Box>
                                    <BlueOulinedBtn anchor={true} btnTitle="VIEW ALL SERVICES" btnLink="/service/" />
                                </Box>
                            </div>
                        </div>

                        <div className="row mx-auto">
                            <ServiceCard
                                imageSrc="/carrum-new/service_1.jpg"
                                imageAlt="Dental Implants"
                                title="Wisdom Teeth"
                                subtitle="Removal"
                                description="Our dentist can perform wisdom tooth removal in an affordable, pain-free way. Starting from $200*."
                                hoverBackgroundColor="#19beb9"
                                imageFirst={true}
                            />
                            <ServiceCard
                                imageSrc="/carrum-new/service_2.jpg"
                                imageAlt="Dental Implants"
                                title="Dental"
                                subtitle="Implants"
                                description="Renew your smile and chewing ability. We offer complete implant procedure including implant, abutment, and crown."
                                hoverBackgroundColor="#19beb9"
                                imageFirst={false}
                                hoverDirection="bottom-to-top"
                            />
                            <ServiceCard
                                imageSrc="/carrum-new/service_3.jpg"
                                imageAlt="Wisdom Teeth Removal"
                                title="Child"
                                subtitle="Benefit"
                                description="Eligible kids can get up to $1000* worth of free dental services."
                                hoverBackgroundColor="#19beb9"
                                imageFirst={true}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const ServiceCard = ({ imageSrc, imageAlt, title, subtitle, description, hoverBackgroundColor, imageFirst, hoverDirection = "top-to-bottom", }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="col-12 col-md-6 col-lg-4 p-0 margin-x">
            <div
                className="card border-0 h-100 border-radius-none"
                style={{
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                {imageFirst ? (
                    <>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover img-fluid"
                            width={350}
                            height={250}
                        />
                        <div
                            className="card-body text-center p-5 service-card border-radius-none"
                            style={{
                                minHeight: "250px",
                                position: "relative",
                                overflow: "hidden",
                                color: hover ? "white" : "black",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <div
                                style={{
                                    content: '""',
                                    position: "absolute",
                                    top: hover ? "0" : "-100%",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    background: hoverBackgroundColor,
                                    transition: "top 0.3s ease",
                                    zIndex: 0,
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-15%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 2,
                                    color: hover ? "white" : "#19beb9",
                                    fontSize: "3.5rem",
                                }}
                            >
                                <TiArrowSortedDown />
                            </div>
                            <h5
                                className="fw-bold heading-color"
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {title}
                                <br />
                                {subtitle}
                            </h5>
                            <p
                                className="text-dark"
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {description}
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className="card-body text-center p-5 service-card border-radius-none"
                            style={{
                                minHeight: "250px",
                                position: "relative",
                                overflow: "hidden",
                                color: hover ? "white" : "black",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <div
                                style={{
                                    content: '""',
                                    position: "absolute",
                                    [hoverDirection === "bottom-to-top" ? "bottom" : "top"]: hover
                                        ? "0"
                                        : "-100%",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    background: hoverBackgroundColor,
                                    transition: hoverDirection === "bottom-to-top" ? "bottom 0.3s ease" : "top 0.3s ease",
                                    zIndex: 0,
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-13%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 2,
                                    color: hover ? "white" : "#19beb9",
                                    fontSize: "3.5rem",
                                }}
                            >
                                <TiArrowSortedUp />
                            </div>
                            <h5
                                className="fw-bold heading-color"
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {title}
                                <br />
                                {subtitle}
                            </h5>
                            <p
                                className="text-dark"
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {description}
                            </p>
                        </div>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover img-fluid"
                            width={350}
                            height={250}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceSectionNew;




// import { Container, Grid } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ServiceSectionNew = () => {
//     const [width, setWidth] = useState();

//     useEffect(() => {
//         setWidth(window.innerWidth);
//     }, [width]);

//     return (
//         <>
//             <Container maxWidth="xxl" id="service" style={{ marginTop: "5%" }}>
//                 <Grid container>
//                     <Grid item xs={12} md={10} className="mx-auto">
//                         <div className="mb-5">
//                             <p className="fs-5">Pride in professional service</p>
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2 className="fw-bold fs-1 text-light-blue">
//                                     Personalised care that you <br /> can depend on
//                                 </h2>
//                                 <Link
//                                     href="/service"
//                                     className="d-block px-4 py-2 text-dark text-center rounded"
//                                 >
//                                     View All Services
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="row mx-auto">
//                             <ServiceCard
//                                 imageSrc="/carrum-new/service_1.jpg"
//                                 imageAlt="Dental Implants"
//                                 title="Wisdom Teeth"
//                                 subtitle="Removal"
//                                 description="Our dentist can perform wisdom tooth removal in an affordable, pain-free way. Starting from $200*."
//                                 hoverBackgroundColor="#19beb9"
//                                 imageFirst={true}
//                             />
//                             <ServiceCard
//                                 imageSrc="/carrum-new/service_2.jpg"
//                                 imageAlt="Dental Implants"
//                                 title="Dental"
//                                 subtitle="Implants"
//                                 description="Renew your smile and chewing ability. We offer complete implant procedure including implant, abutment, and crown."
//                                 hoverBackgroundColor="#19beb9"
//                                 imageFirst={false}
//                                 hoverDirection="bottom-to-top"
//                             />
//                             <ServiceCard
//                                 imageSrc="/carrum-new/service_3.jpg"
//                                 imageAlt="Wisdom Teeth Removal"
//                                 title="Child"
//                                 subtitle="Benefit"
//                                 description="Eligible kids can get up to $1000* worth of free dental services."
//                                 hoverBackgroundColor="#19beb9"
//                                 imageFirst={true}
//                             />
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </>
//     );
// };

// const ServiceCard = ({ imageSrc, imageAlt, title, subtitle, description, hoverBackgroundColor, imageFirst, hoverDirection = "top-to-bottom", }) => {
//     const [hover, setHover] = useState(false);

//     return (
//         <div className="col-md-6 col-lg-4 p-0">
//             <div
//                 className="card border-0 h-100 border-radius-none"
//                 style={{
//                     overflow: "hidden",
//                     transition: "transform 0.3s",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 }}
//             >
//                 {imageFirst ? (
//                     <>
//                         <Image
//                             src={imageSrc}
//                             alt={imageAlt}
//                             className="object-cover img-fluid"
//                             width={350}
//                             height={250}
//                         />
//                         <div
//                             className="card-body text-center p-5 service-card border-radius-none"
//                             style={{
//                                 minHeight: "250px",
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 color: hover ? "white" : "black",
//                                 transition: "color 0.3s ease",
//                             }}
//                             onMouseEnter={() => setHover(true)}
//                             onMouseLeave={() => setHover(false)}
//                         >
//                             <div
//                                 style={{
//                                     content: '""',
//                                     position: "absolute",
//                                     top: hover ? "0" : "-100%",
//                                     left: "0",
//                                     width: "100%",
//                                     height: "100%",
//                                     background: hoverBackgroundColor,
//                                     transition: "top 0.3s ease",
//                                     zIndex: 0,
//                                 }}
//                             ></div>
//                             <h5
//                                 className="fw-bold heading-color"
//                                 style={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 {title}
//                                 <br />
//                                 {subtitle}
//                             </h5>
//                             <p
//                                 className="text-dark"
//                                 style={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 {description}
//                             </p>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <div
//                             className="card-body text-center p-5 service-card border-radius-none"
//                             style={{
//                                 minHeight: "250px",
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 color: hover ? "white" : "black",
//                                 transition: "color 0.3s ease",
//                             }}
//                             onMouseEnter={() => setHover(true)}
//                             onMouseLeave={() => setHover(false)}
//                         >
//                             <div
//                                 style={{
//                                     content: '""',
//                                     position: "absolute",
//                                     [hoverDirection === "bottom-to-top" ? "bottom" : "top"]: hover
//                                         ? "0"
//                                         : "-100%",
//                                     left: "0",
//                                     width: "100%",
//                                     height: "100%",
//                                     background: hoverBackgroundColor,
//                                     transition: hoverDirection === "bottom-to-top" ? "bottom 0.3s ease" : "top 0.3s ease",
//                                     zIndex: 0,
//                                 }}
//                             ></div>
//                             <h5
//                                 className="fw-bold heading-color"
//                                 style={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 {title}
//                                 <br />
//                                 {subtitle}
//                             </h5>
//                             <p
//                                 className="text-dark"
//                                 style={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 {description}
//                             </p>
//                         </div>
//                         <Image
//                             src={imageSrc}
//                             alt={imageAlt}
//                             className="object-cover img-fluid"
//                             width={350}
//                             height={250}
//                         />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ServiceSectionNew;


