import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Styles from '../../../styles/components-style/layout-style/header/Header.module.css';
import { Navbar, Topbar } from './Component/Components';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsDesktop(window.innerWidth > 1199);
      setIsDesktop(window.innerWidth > 1199);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 50 && isDesktop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isDesktop]);

  return (
    <header className={`${Styles.header} ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}} `}>
      <Container maxWidth="1600px" className="px-0 px-lg-2">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <Navbar isScrolled={isScrolled} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;


// import { Container, Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Styles from '../../../styles/components-style/layout-style/header/Header.module.css';
// import { Navbar, Topbar } from './Component/Components';

// const Header = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     // Check if window is defined (only in the browser)
//     if (typeof window !== 'undefined') {
//       const handleResize = () => setIsDesktop(window.innerWidth > 1199);

//       // Set initial state
//       setIsDesktop(window.innerWidth > 1199);

//       // Add resize listener
//       window.addEventListener('resize', handleResize);

//       // Clean up on component unmount
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleScroll = () => {
//         const headerStyle = document.querySelector('header').style;

//         if (window.scrollY > 50 && isDesktop) {
//           headerStyle.backgroundColor = '#fff';
//           headerStyle.boxShadow = '0 1rem 3rem rgba(0, 0, 0, 0.175)';
//         } else if (window.scrollY <= 50 && isDesktop) {
//           headerStyle.backgroundColor = 'rgba(255, 255, 255, 0.5)';
//           headerStyle.boxShadow = 'none';
//         } else if (!isDesktop && window.scrollY > 0) {
//           headerStyle.backgroundColor = '#fff';
//           headerStyle.boxShadow = '0 1rem 3rem rgba(0, 0, 0, 0.175)';
//         }
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }
//   }, [isDesktop]);

//   return (
//     <header className={Styles.header}>
//       <Container maxWidth="1600px" className="px-0 px-lg-2">
//         <Grid container>
//           <Grid item xs={12} md={10} className="mx-auto">
//             <Navbar />
//           </Grid>
//         </Grid>
//       </Container>
//     </header>
//   );
// };

// export default Header;



// import { Container, Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Styles from '../../../styles/components-style/layout-style/header/Header.module.css';
// import { Navbar, Topbar } from './Component/Components';

// const Header = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     // Check if window is defined (only in the browser)
//     if (typeof window !== 'undefined') {
//       const handleResize = () => setIsDesktop(window.innerWidth > 1199);

//       // Set initial state
//       setIsDesktop(window.innerWidth > 1199);

//       // Add resize listener
//       window.addEventListener('resize', handleResize);

//       // Clean up on component unmount
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleScroll = () => {
//         const headerStyle = document.querySelector('header').style;

//         if (window.scrollY > 50 && isDesktop) {
//           headerStyle.backgroundColor = '#fff';
//           headerStyle.boxShadow = '0 1rem 3rem rgba(0, 0, 0, 0.175)';
//         } else if (window.scrollY <= 50 && isDesktop) {
//           headerStyle.backgroundColor = 'rgba(255, 255, 255, 0.5)';
//           headerStyle.boxShadow = 'none';
//         } else if (!isDesktop && window.scrollY > 0) {
//           headerStyle.backgroundColor = '#fff';
//           headerStyle.boxShadow = '0 1rem 3rem rgba(0, 0, 0, 0.175)';
//         }
//       };

//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }
//   }, [isDesktop]);

//   return (
//     <header className={Styles.header}>
//       <Container maxWidth="1600px" className="px-0 px-lg-2">
//         <Grid container>
//           <Grid item xs={12} md={10} className="mx-auto">
//             {isDesktop &&
//             <Topbar />
//             }
//             <Navbar />
//           </Grid>
//         </Grid>
//       </Container>
//     </header>
//   );
// };

// export default Header;