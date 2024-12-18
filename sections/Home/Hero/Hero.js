import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Container, Grid, Stack } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useResponsive from "../../../hooks/useResponsive";
import Styles from "../../../styles/Home.module.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const navbarMenu = [
  {
    label: "HOME",
    href: "/",
    dropdown: null,
  },
  {
    label: "ABOUT US",
    href: "/about-us/",
    dropdown: [
      { label: "PATIENT REFERRAL PROGRAM", href: "/referral-program/" },
      { label: "PAYMENT PLAN", href: "/payment-plan/" },
      { label: "NEW TECHNOLOGIES", href: "/new-technologies/" },
      { label: "OFFER", href: "/offer/" },
      { label: "MEET OUR TEAM", href: "/meet-our-team/" },
      {
        label: "ACCESS MY SUPER",
        href: "/superannuation-to-pay-for-dental-treatment/",
      },
      {
        label: "COVID-19",
        href: "/how-we-can-reduce-the-spread-of-corona-virus-together/",
      },
    ],
  },
  {
    label: "SERVICES",
    href: "/service/",
    dropdown: [
      { label: "MISSING TEETH", href: "/service/missing-teeth/" },
      { label: "WISDOM TEETH REMOVAL", href: "/service/wisdom-teeth-removal/" },
      { label: "CHILD BENEFIT", href: "/service/child-benefit/" },
      { label: "DENTAL IMPLANTS", href: "/service/dental-implants/" },
      { label: "DENTURE", href: "/service/dentures/" },
      { label: "TEETH WHITENING", href: "/service/teeth-whitening/" },
      { label: "CROWN AND BRIDGES", href: "/service/crowns-and-bridge/" },
      { label: "VENEERS", href: "/service/veneers/" },
      {
        label: "INVISALIGN",
        href: "/service/invisalign/",
        subDropdown: [
          {
            label: "INVISALIGN OPEN DAY",
            href: "/service/invisalign-open-day/",
          },
        ],
      },
      { label: "ROOT CANAL", href: "/service/root-canal/" },
      { label: "TEETH CLEANING", href: "/service/teeth-cleaning/" },
      { label: "DENTAL EMERGENCY", href: "/service/dental-emergency/" },
      { label: "TOOTH FILLING", href: "/service/tooth-fillings/" },
      { label: "SMILE DESIGN", href: "/service/smile-design/" },
      { label: "DIGITAL DENTURES", href: "/service/digital-dentures/" },
      {
        label: "IMPLANT SUPPORTED DENTURE",
        href: "/service/implant-supported-denture/",
      },
      { label: "DENTURE TECHNOLOGY", href: "/service/denture-technology/" },
      { label: "SLEEP DENTISTRY", href: "/service/sleep-dentistry/" },
    ],
  },
  {
    label: "DENTAL PROBLEMS",
    href: "/dental-problems/",
    dropdown: [
      { label: "BAD BREATH", href: "/dental-problems/bad-breath" },
      { label: "BITE PROBLEMS", href: "/dental-problems/bite-problems" },
      { label: "BLEEDING GUMS", href: "/dental-problems/bleeding-gums" },
      { label: "BRUXISM", href: "/dental-problems/bruxism" },
      {
        label: "CHIPPED OR CRACKED TOOTH",
        href: "/dental-problems/chipped-or-cracked-tooth",
      },
      { label: "CROOKED TEETH", href: "/dental-problems/crooked-teeth" },
      { label: "DENTAL ABSCESS", href: "/dental-problems/dental-abscess" },
      { label: "DRY SOCKET", href: "/dental-problems/dry-socket" },
      { label: "GUM DISEASE", href: "/dental-problems/gum-disease" },
      {
        label: "KNOCKED OUT TEETH",
        href: "/dental-problems/knocked-out-tooth",
      },
      { label: "SEVERE TOOTHACHE", href: "/dental-problems/severe-toothache" },
      { label: "STAINED TEETH", href: "/dental-problems/stained-teeth" },
      {
        label: "TEETH SENSITIVITY",
        href: "/dental-problems/teeth-sensitivity",
      },
      { label: "TOOTH GAPS", href: "/dental-problems/tooth-gap" },
      {
        label: "WISDOM TOOTH PAIN",
        href: "/dental-problems/wisdom-tooth-pain",
      },
    ],
  },
  {
    label: "BLOG",
    href: "/blog/",
    dropdown: [{ label: "VIDEO GALLERY", href: "/video-gallery" }],
  },
  {
    label: "CONTACT US",
    href: "/contact-us/",
  },
];

const Hero = () => {
  const screenWidth = useResponsive();

  const [activeSlide, setActiveSlide] = useState();

  return (
    <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative">
      {/* Banner Images */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // pagination={{ clickable: true }}
        modules={[
          EffectFade,
          // Pagination,
          Autoplay,
        ]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        <SwiperSlide
          className={`slide ${Styles.slider1}`}
          data-key={1}
        ></SwiperSlide>
        <SwiperSlide
          className={`slide ${Styles.slider2}`}
          data-key={2}
        ></SwiperSlide>
        <SwiperSlide
          className={`slide ${Styles.slider3}`}
          data-key={3}
        ></SwiperSlide>
      </Swiper>

      {/* Hero content */}
      <Box
        style={{
          display: "flex",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      >
        <Container
          style={{ marginTop: "auto", marginBottom: "auto" }}
          maxWidth="xxl"
        >
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack>
                <Box
                  sx={{ marginBottom: "220px", maxWidth: "fit-content" }}
                  className="d-none d-xl-block"
                >
                  <ul className="navbar-nav mx-auto">
                    {navbarMenu.map((menu, index) => {
                      const totalColumnCount = menu.dropdown
                        ? Math.ceil(menu.dropdown.length / 6)
                        : 0;

                      return (
                        <li
                          key={index}
                          className={`nav-item ${menu.dropdown ? "dropdown" : ""
                            }`}
                        >
                          <a
                            href={menu.href}
                            className={`text-white nav-link ${menu.dropdown ? "dropdown-toggle" : ""
                              }`}
                          // {...(menu.dropdown
                          //   ? { "data-bs-toggle": "dropdown" }
                          //   : {})}
                          >
                            {menu.label}
                          </a>
                          {menu.dropdown && (
                            <ul
                              className="dropdown-menu custom-column-count"
                              style={{
                                columnCount:
                                  totalColumnCount === 1 || screenWidth < 768
                                    ? 1
                                    : screenWidth < 1160
                                      ? 2
                                      : totalColumnCount === 3 ||
                                        screenWidth < 1160
                                        ? 3
                                        : totalColumnCount,
                              }}
                            >
                              {menu.dropdown.map((subMenu, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subMenu.href}
                                    className="dropdown-item text-white"
                                  >
                                    {subMenu.label}
                                  </a>
                                  {subMenu.subDropdown && (
                                    <ul className="dropdown-menu2">
                                      {subMenu.subDropdown.map(
                                        (subSubMenu, subSubIndex) => (
                                          <li key={subSubIndex}>
                                            <a
                                              href={subSubMenu.href}
                                              className="dropdown-item2 text-white"
                                            >
                                              {subSubMenu.label}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Box className="pe-5">
                  <div className="row gap-5 gap-xl-0">
                    <div className="col-12 col-xl-7">
                      <h1 className="fw-bold text-white mb-3">
                        Experience Service
                      </h1>
                      <p className="fs-5 text-light mb-4">
                        Our dentists are fully qualified and have years of
                        experience in providing quality dental care.
                      </p>
                      <Link href="/about-us" passHref>
                        <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
                          KNOW MORE
                        </a>
                      </Link>
                    </div>
                    <div className="col-12 col-xl-5">
                      <div className="row g-3">
                        <div className="col-12 col-sm-6">
                          <div
                            className="card text-white p-3 border-0 h-100 d-flex justify-content-between align-items-start"
                            style={{
                              backgroundColor: "rgb(190 185 185 / 50%)",
                              // backgroundColor: "rgba(255, 255, 255, 0.1)",
                              transition: "background-color 0.3s",
                            }}
                          >
                            <h5 className="mb-0">Book Online Appointment</h5>
                            <div
                              className="d-flex align-items-center justify-content-between mt-auto"
                              style={{
                                width: "100%",
                              }}
                            >
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: "#115278",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <Link href="/book-appointment" passHref>
                                  <a className="d-flex align-items-center justify-content-center text-decoration-none text-white p-3">
                                    <ChevronRightIcon
                                      sx={{
                                        fontSize: "2rem",
                                        backgroundColor: "#115278",
                                        borderRadius: "50%",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                          transform: "rotate(-90deg)",
                                        },
                                      }}
                                    />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-sm-6">
                          <div
                            className="card text-white p-3 border-0 h-100 d-flex justify-content-between align-items-start"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              transition: "background-color 0.3s",
                            }}
                          >
                            <h5 className="mb-0">Or Call 03 - 9782 1200</h5>
                            <div
                              className="d-flex align-items-center justify-content-between mt-auto"
                              style={{
                                width: "100%",
                              }}
                            >
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: "#115278",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <Link href="tel:03-9782-1200" passHref>
                                  <a
                                    className="d-flex align-items-center justify-content-center text-decoration-none text-white"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      transition: "transform 0.3s ease"
                                    }}
                                  >
                                    <ChevronRightIcon
                                      sx={{
                                        fontSize: "2rem",
                                        backgroundColor: "#115278",
                                        borderRadius: "50%",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                          transform: "rotate(-90deg)",
                                        },
                                      }}
                                    />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>

                <Stack direction={"row"} gap={1} marginTop={4}>
                  {[1, 2, 3].map((x) => (
                    <Box
                      key={x}
                      style={{
                        padding: "8px",
                        borderRadius: "4px",
                        backgroundColor: activeSlide === x ? "#19BEB9" : "#949494",
                      }}
                    >
                    </Box>
                  ))}
                </Stack>

              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Social */}
      <Stack
        style={{ position: "absolute", top: "50%", right: 0, zIndex: 1 }}
        gap={1.5}
        paddingX={4}
      >
        <a
          href="https://twitter.com/CarrumDownsGrp/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/CarrumDownsDental"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/cddentalgroup/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <FaInstagram />
        </a>
        <a
          href="https://in.pinterest.com/CarrumDownsGrp/_created/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <FaPinterest />
        </a>
      </Stack>
    </Container>
  );
};

export default Hero;




// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import {
//   Box,
//   Button,
//   CardActionArea,
//   Container,
//   Card,
//   Grid,
//   Typography,
// } from "@mui/material";
// import Link from "next/link";
// import { Autoplay, EffectFade, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Styles from "../../../styles/Home.module.css";
// import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';

// const navbarMenu = [
//   {
//     label: "HOME",
//     href: "/",
//     dropdown: null,
//   },
//   {
//     label: "ABOUT US",
//     href: "/about-us/",
//     dropdown: [
//       { label: "PATIENT REFERRAL PROGRAM", href: "/referral-program/" },
//       { label: "PAYMENT PLAN", href: "/payment-plan/" },
//       { label: "NEW TECHNOLOGIES", href: "/new-technologies/" },
//       { label: "OFFER", href: "/offer/" },
//       { label: "MEET OUR TEAM", href: "/meet-our-team/" },
//       {
//         label: "ACCESS MY SUPER",
//         href: "/superannuation-to-pay-for-dental-treatment/",
//       },
//       {
//         label: "COVID-19",
//         href: "/how-we-can-reduce-the-spread-of-corona-virus-together/",
//       },
//     ],
//   },
//   {
//     label: "SERVICES",
//     href: "/service/",
//     dropdown: [
//       { label: "MISSING TEETH", href: "/service/missing-teeth/" },
//       { label: "WISDOM TEETH REMOVAL", href: "/service/wisdom-teeth-removal/" },
//       { label: "CHILD BENEFIT", href: "/service/child-benefit/" },
//       { label: "DENTAL IMPLANTS", href: "/service/dental-implants/" },
//       { label: "DENTURE", href: "/service/dentures/" },
//       { label: "TEETH WHITENING", href: "/service/teeth-whitening/" },
//       { label: "CROWN AND BRIDGES", href: "/service/crowns-and-bridge/" },
//       { label: "VENEERS", href: "/service/veneers/" },
//       {
//         label: "INVISALIGN",
//         href: "/service/invisalign/",
//         subDropdown: [
//           {
//             label: "INVISALIGN OPEN DAY",
//             href: "/service/invisalign-open-day/",
//           },
//         ],
//       },
//       { label: "ROOT CANAL", href: "/service/root-canal/" },
//       { label: "TEETH CLEANING", href: "/service/teeth-cleaning/" },
//       { label: "DENTAL EMERGENCY", href: "/service/dental-emergency/" },
//       { label: "TOOTH FILLING", href: "/service/tooth-fillings/" },
//       { label: "SMILE DESIGN", href: "/service/smile-design/" },
//       { label: "DIGITAL DENTURES", href: "/service/digital-dentures/" },
//       {
//         label: "IMPLANT SUPPORTED DENTURE",
//         href: "/service/implant-supported-denture/",
//       },
//       { label: "DENTURE TECHNOLOGY", href: "/service/denture-technology/" },
//       { label: "SLEEP DENTISTRY", href: "/service/sleep-dentistry/" },
//     ],
//   }, {
//     label: "DENTAL PROBLEMS",
//     href: "/dental-problems/",
//     dropdown: [
//       { label: "BAD BREATH", href: "/dental-problems/bad-breath" },
//       { label: "BITE PROBLEMS", href: "/dental-problems/bite-problems" },
//       { label: "BLEEDING GUMS", href: "/dental-problems/bleeding-gums" },
//       { label: "BRUXISM", href: "/dental-problems/bruxism" },
//       { label: "CHIPPED OR CRACKED TOOTH", href: "/dental-problems/chipped-or-cracked-tooth" },
//       { label: "CROOKED TEETH", href: "/dental-problems/crooked-teeth" },
//       { label: "DENTAL ABSCESS", href: "/dental-problems/dental-abscess" },
//       { label: "DRY SOCKET", href: "/dental-problems/dry-socket" },
//       { label: "GUM DISEASE", href: "/dental-problems/gum-disease" },
//       { label: "KNOCKED OUT TEETH", href: "/dental-problems/knocked-out-tooth" },
//       { label: "SEVERE TOOTHACHE", href: "/dental-problems/severe-toothache" },
//       { label: "STAINED TEETH", href: "/dental-problems/stained-teeth" },
//       { label: "TEETH SENSITIVITY", href: "/dental-problems/teeth-sensitivity" },
//       { label: "TOOTH GAPS", href: "/dental-problems/tooth-gap" },
//       { label: "WISDOM TOOTH PAIN", href: "/dental-problems/wisdom-tooth-pain" }
//     ]
//   },
//   {
//     label: "BLOG",
//     href: "/blog/",
//     dropdown: [
//       { label: "VIDEO GALLERY", href: "/video-gallery" },]
//   },
//   {
//     label: "CONTACT US",
//     href: "/contact-us/",
//   },
// ];

// const socialMediaLinks = [
//   {
//     name: "Twitter",
//     url: "https://twitter.com/CarrumDownsGrp/",
//     icon: <FaTwitter />,
//   },
//   {
//     name: "Facebook",
//     url: "https://www.facebook.com/CarrumDownsDental",
//     icon: <FaFacebook />,
//   },
//   {
//     name: "YouTube",
//     url: "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/",
//     icon: <FaYoutube />,
//   },
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com/cddentalgroup/",
//     icon: <FaInstagram />,
//   },
//   {
//     name: "Pinterest",
//     url: "https://in.pinterest.com/CarrumDownsGrp/_created/",
//     icon: <FaPinterest />,
//   },
// ];
// const Hero = () => {
//   return (
//     <Container maxWidth="xxl" id="home_hero" className="p-0">
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         pagination={{ clickable: true }}
//         modules={[EffectFade, Pagination, Autoplay]}
//         loop={true}
//         slidesPerView={1}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//       >
//         <SwiperSlide
//           className={`slide ${Styles.slider1}`}
//           id="home-hero-slider1"
//         >
//           <Box style={{ paddingTop: "10%", paddingLeft: "10%", maxWidth: "fit-content" }}
//             className="d-none d-xl-block"
//           >
//             <ul className="navbar-nav mx-auto">
//               {navbarMenu.map((menu, index) => (
//                 <li key={index} className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}>
//                   <a href={menu.href} className={`home-anchor  nav-link ${menu.dropdown ? "dropdown-toggle" : ""}`} {...(menu.dropdown ? { "data-bs-toggle": "dropdown" } : {})}>
//                     {menu.label}
//                   </a>
//                   {/* {menu.dropdown && (
//                     <ul className="dropdown-menu" style={{ maxHeight: "350px", height: "100vh", overflow: "scroll", }}>
//                       {menu.dropdown.map((subMenu, subIndex) => (
//                         <li key={subIndex}>
//                           <a href={subMenu.href} className="dropdown-item">
//                             {subMenu.label}
//                           </a>
//                           {subMenu.subDropdown && (
//                             <ul className="dropdown-menu" >
//                               {subMenu.subDropdown.map((subSubMenu, subSubIndex) => (
//                                 <li key={subSubIndex}>
//                                   <a href={subSubMenu.href} className="dropdown-item">
//                                     {subSubMenu.label}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   )} */}

//                   {menu.dropdown && (
//                     <ul
//                       className="dropdown-menu"
//                       style={{
//                         maxHeight: "250px",
//                         overflowY: "auto",
//                         overflowX: "hidden"
//                       }}
//                     >
//                       {menu.dropdown.map((subMenu, subIndex) => (
//                         <li key={subIndex}>
//                           <a href={subMenu.href} className="dropdown-item home-anchor">
//                             {subMenu.label}
//                           </a>
//                           {subMenu.subDropdown && (
//                             <ul className="dropdown-menu">
//                               {subMenu.subDropdown.map((subSubMenu, subSubIndex) => (
//                                 <li key={subSubIndex}>
//                                   <a href={subSubMenu.href} className="dropdown-item">
//                                     {subSubMenu.label}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                 </li>
//               ))}
//             </ul>
//             {/* <ul className="navbar-nav mx-auto text-white">
//               {navbarMenu.map((menu, index) => (
//                 <li
//                   key={index}
//                   className={`nav-item text-white mb-2 pb-2 ${menu.dropdown ? "dropdown" : ""
//                     }`}
//                   style={{ color: "#fff" }}
//                 >
//                   <Link
//                     href={menu.href}
//                     className={`text-white nav-link ${menu.dropdown ? "dropdown-toggle" : ""
//                       }`}
//                     {...(menu.dropdown ? { "data-bs-toggle": "dropdown" } : {})}
//                     style={{ color: "#fff" }}
//                   >
//                     {menu.label}
//                   </Link>
//                   {menu.dropdown && menu.label === "SERVICES" ? (
//                     <div className="dropdown-menu mega-menu p-3" style={{ width: "70vw" }}>
//                       <div className="row">
//                         {menu.dropdown.map((subMenu, subIndex) => (
//                           <div key={subIndex}
//                             className="col-12 col-sm-6 col-md-6 col-lg-4 mb-2">
//                             <a
//                               href={subMenu.href}
//                               className="dropdown-item text-white d-flex flex-wrap text-truncate"
//                               style={{
//                                 maxWidth: "250px",
//                                 whiteSpace: "normal",
//                                 wordWrap: "break-word",
//                               }}
//                             >
//                               {subMenu.label}
//                             </a>
//                             {subMenu.subDropdown && (
//                               <ul className="list-unstyled ps-3">
//                                 {subMenu.subDropdown.map(
//                                   (subSubMenu, subSubIndex) => (
//                                     <li key={subSubIndex}>
//                                       <a
//                                         href={subSubMenu.href}
//                                         className="dropdown-item2"
//                                       >
//                                         {subSubMenu.label}
//                                       </a>
//                                     </li>
//                                   )
//                                 )}
//                               </ul>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                   ) : menu.dropdown && menu.label === "DENTAL PROBLEMS" ? (
//                     <div className="dropdown-menu mega-menu p-3" style={{ width: "70vw" }}>
//                       <div className="row">
//                         {menu.dropdown.map((subMenu, subIndex) => (
//                           <div
//                             key={subIndex}
//                             className="col-12 col-sm-6 col-md-6 col-lg-4 mb-2"
//                           >
//                             <a
//                               href={subMenu.href}
//                               className="dropdown-item text-white d-flex flex-wrap text-truncate"
//                               style={{
//                                 maxWidth: "250px",
//                                 whiteSpace: "normal",
//                                 wordWrap: "break-word",
//                               }}
//                             >
//                               {subMenu.label}
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : menu.dropdown ? (
//                     <ul className="dropdown-menu">
//                       {menu.dropdown.map((subMenu, subIndex) => (
//                         <li key={subIndex}>
//                           <a href={subMenu.href} className="dropdown-item text-white">
//                             {subMenu.label}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : null}
//                 </li>
//               ))}
//             </ul> */}
//           </Box>

//           <Box style={{
//             paddingLeft: "10%",
//             paddingRight: "10%",
//             paddingTop: "6%",
//           }}
//             className="mt-5"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div className="container my-5">
//               <div className="row g-4">
//                 <div className="col-12 col-md-7">
//                   <h1 className="fw-bold text-white mb-3">
//                     Experience Service
//                   </h1>
//                   <p className="fs-5 text-light mb-4">
//                     Our dentists are fully qualified and have years of
//                     experience in providing quality dental care.
//                   </p>
//                   <Link href="/about-us" passHref>
//                     <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
//                       KNOW MORE
//                     </a>
//                   </Link>
//                 </div>

//                 <div className="col-12 col-md-5">
//                   <div className="row g-3">
//                     <div className="col-12 col-sm-12 col-md-12 col-lg-6">
//                       <div
//                         className="card text-white p-3 border-0 h-100 d-flex justify-content-between align-items-start"
//                         style={{
//                           backgroundColor: "rgba(255, 255, 255, 0.1)",
//                           transition: "background-color 0.3s ease",
//                         }}
//                       >
//                         <h5 className="mb-0">Book Online Appointment</h5>
//                         <div
//                           className="d-flex align-items-center justify-content-between mt-auto"
//                           style={{
//                             width: "100%",
//                           }}
//                         >
//                           <div
//                             className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               backgroundColor: "#115278",
//                               transition: "transform 0.3s ease",
//                             }}
//                           >
//                             <Link href="/book-appointment" passHref>
//                               <a
//                                 className="d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
//                                 style={{
//                                   transition: "transform 0.3s ease",
//                                 }}
//                               >
//                                 <ChevronRightIcon
//                                   sx={{
//                                     fontSize: "2rem",
//                                     backgroundColor: "#115278",
//                                     borderRadius: "50%",
//                                     transition: "transform 0.3s ease",
// "&:hover": {
//   transform: "rotate(-90deg)",
// },
//                                   }}
//                                 />
//                               </a>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-12 col-sm-12 col-md-12 col-lg-6">
//                       <div
//                         className="card text-white p-3 border-0 h-100 d-flex justify-content-between align-items-start"
//                         style={{
//                           backgroundColor: "rgba(255, 255, 255, 0.1)",
//                           transition: "background-color 0.3s ease",
//                         }}
//                       >
//                         <h5 className="mb-0">Or Call 03 - 9782 1200</h5>
//                         <div
//                           className="d-flex align-items-center justify-content-between mt-auto"
//                           style={{
//                             width: "100%",
//                           }}
//                         >
//                           <div
//                             className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               backgroundColor: "#115278",
//                               transition: "transform 0.3s ease",
//                             }}
//                           >
//                             <Link href="tel:03-9782-1200" passHref>
//                               <a
//                                 className="d-flex align-items-center justify-content-center text-decoration-none text-white"
//                                 style={{
//                                   width: "100%",
//                                   height: "100%",
//                                   transition: "transform 0.3s ease",
//                                 }}
//                               >
//                                 <ChevronRightIcon
//                                   sx={{
//                                     fontSize: "2rem",
//                                     backgroundColor: "#115278",
//                                     borderRadius: "50%",
//                                     transition: "transform 0.3s ease",
//                                     "&:hover": {
//                                       transform: "rotate(-90deg)",
//                                     },
//                                   }}
//                                 />
//                               </a>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Box>
//           <Box style={{ position: "absolute", top: "50%", right: "2%" }}>
//             <div className="row">
//               <div className="col-12 d-flex flex-column align-items-end">
//                 <ul className="list-unstyled mb-0">
//                   {socialMediaLinks.map((link, index) => (
//                     <li key={index} className="mb-3">
//                       <a
//                         href={link.url}
//                         className="icon-circle d-flex justify-content-center align-items-center text-white text-decoration-none"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {link.icon}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </Box>

//         </SwiperSlide>
//       </Swiper>
//     </Container>
//   );
// };

// export default Hero;
