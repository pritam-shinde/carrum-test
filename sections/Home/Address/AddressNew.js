import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import Scan from '../../../public/sidebar/scan.png';

const AddressNew = () => {
    return (
        <div className="d-flex flex-column align-items-center p-4" style={{ marginBottom: 'clamp(180px,5vw,300px)' }}>
            <div className="position-relative w-100 container">
                <div className="d-flex flex-column align-items-center">
                    <iframe
                        title="mapFrame"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1665396657093!5m2!1sen!2sin"
                        className="w-100 map-frame rounded-2"
                        style={{ border: 0, height: '600px', maxHeight: "60vh" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div
                        className="contact-info bg-white shadow-lg p-2 rounded"
                        style={{
                            width: '98%',
                            maxWidth: '1000px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <div className="d-flex flex-wrap align-items-start justify-content-center gap-5">
                            <div className="">
                                <img
                                    src={Scan.src}
                                    alt="QR Code for directions"
                                    className="img-fluid"
                                    style={{
                                        maxWidth: '180px',
                                        backgroundColor: '#f2f2f2',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                    }}
                                />
                                <h6 className="text-dark-blue text-center">Scan for Direction</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                                <h4 className="text-dark-blue mt-1">Carrum Downs Dental Group</h4>
                                <p className="fw-semibold">
                                    <IoMdHome className="light-color me-3" size={24} />
                                    Shop T5, 100 Hall Road, Carrum Downs
                                </p>
                                <p className="">
                                    <FaPhoneAlt className="light-color me-4" size={20} />
                                    <a href="tel:03-9782-1200" className='text-dark'>03 - 9782 1200</a>
                                </p>
                                <p>
                                    <FaEnvelope className="light-color me-4" size={20} />
                                    <a href="mailto:carrumdownsdental@gmail.com" className='text-dark'>carrumdownsdental@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .map-frame {
                        height: 300px;
                    }

                    .contact-info {
                        position: static !important;
                        margin-top: 20px !important;
                        text-align: center;
                    }
                }

                @media (min-width: 769px) {
                    .contact-info {
                        position: absolute;
                        bottom: clamp(-150px, -5%, -100px) !important;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }

                @media (max-width: 480px) {
                    .map-frame {
                        height: 250px;
                    }

                    .fw-bold {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AddressNew;




// import React from 'react';
// import Scan from '../../../public/sidebar/scan.png';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const AddressNew = () => {
//     return (
//         <div
//             className="d-flex flex-column align-items-center p-4"
//             style={{ marginBottom: 'clamp(100px,5vw,200px' }}
//         >
//             <div className="position-relative w-100 container">
//                 <iframe
//                     title="mapFrame"
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1665396657093!5m2!1sen!2sin"
//                     className="w-100"
//                     style={{ border: 0, height: '400px', maxHeight: '50vh' }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//                 <div
//                     className="position-absolute bg-white shadow-lg p-4 rounded"
//                     style={{
// bottom: 'clamp(-120px, -5%, -50px)',
// left: '50%',
// transform: 'translateX(-50%)',
// width: '100%',
// maxWidth: '800px',
// boxSizing: 'border-box',
//                     }}
//                 >
//                     <div className="d-flex flex-wrap flex-column flex-md-row align-items-center justify-content-center">
//                         <div className="text-center mb-3 mb-md-0">
//                             <img
//                                 src={Scan.src}
//                                 alt="QR Code for directions"
//                                 className="img-fluid"
//                                 style={{
//                                     maxWidth: '120px',
//                                     backgroundColor: '#f2f2f2',
//                                     borderRadius: '8px',
//                                     overflow: 'hidden',
//                                 }}
//                             />
//                             <h6 className="mt-3 text-dark-blue">
//                                 Scan for Direction
//                             </h6>
//                         </div>
//                         <div className="ms-md-4 text-center text-md-start mt-3 mt-md-0">
//                             <h4 className="fw-bold">
//                                 Carrum Downs Dental Group
//                             </h4>
//                             <p className="mb-1">
//                                 <FaMapMarkerAlt className="text-primary me-2" />
//                                 Shop T5, 100 Hall Road, Carrum Downs
//                             </p>
//                             <p className="mb-1">
//                                 <FaPhoneAlt className="text-primary me-2" />
//                                 03 - 9782 1200
//                             </p>
//                             <p>
//                                 <FaEnvelope className="text-primary me-2" />
//                                 carrumdownsdental@gmail.com
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <style jsx>{`
//                 @media (max-width: 768px) {
//                     .position-absolute {
//                         bottom: -100px !important;
//                         padding: 16px !important;
//                         width: calc(100% - 20px) !important;
//                     }
//                     .fw-bold {
//                         font-size: 1.2rem;
//                     }
//                 }
//                 @media (max-width: 480px) {
//                     .position-absolute {
//                         bottom: -80px !important;
//                         padding: 12px !important;
//                     }
//                     .fw-bold {
//                         font-size: 1rem;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default AddressNew;


// import React from 'react';
// import Scan from '../../../public/sidebar/scan.png';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const AddressNew = () => {
//     return (
//         <div className="d-flex flex-column align-items-center p-4" style={{ marginBottom: '15%' }}>
//             <div className="position-relative w-100 container">
//                 <iframe
//                     title="mapFrame"
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v166539665    93!5m2!1sen!2sin"
//                     className="w-100"
//                     style={{ border: 0, height: '400px', maxHeight: '50vh' }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//                 <div
//                     className="position-absolute bg-white shadow-lg p-4 rounded"
//                     style={{
//                         bottom: '-120px',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         width: '90%',
//                         maxWidth: '800px',
//                     }}
//                 >
//                     <div className="d-flex flex-wrap flex-column flex-md-row align-items-center justify-content-center">
//                         <div className="text-center mb-3 mb-md-0">
//                             <img
//                                 src={Scan.src}
//                                 alt="QR Code for directions"
//                                 className="img-fluid"
//                                 style={{
//                                     maxWidth: '120px',
//                                     backgroundColor: '#f2f2f2',
//                                     borderRadius: '8px',
//                                     overflow: 'hidden',
//                                 }}
//                             />
//                             <h6 className="mt-3 text-dark-blue">Scan for Direction</h6>
//                         </div>
//                         <div className="ms-md-4 text-center text-md-start mt-3 mt-md-0">
//                             <h4 className="fw-bold">Carrum Downs Dental Group</h4>
//                             <p className="mb-1">
//                                 <FaMapMarkerAlt className="text-primary me-2" />
//                                 Shop T5, 100 Hall Road, Carrum Downs
//                             </p>
//                             <p className="mb-1">
//                                 <FaPhoneAlt className="text-primary me-2" />
//                                 03 - 9782 1200
//                             </p>
//                             <p>
//                                 <FaEnvelope className="text-primary me-2" />
//                                 carrumdownsdental@gmail.com
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddressNew;

