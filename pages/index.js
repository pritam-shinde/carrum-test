import Head from "next/head";
import React, { useEffect, useState } from "react";
import AboutNew from "../sections/Home/About/AboutNew";
import AddressNew from "../sections/Home/Address/AddressNew";
import OfferNew from "../sections/Home/Offer/OfferNew";
import ServiceSectionNew from "../sections/Home/ServiceSec/ServiceSectionNew";
import { Hero, PaymentPlan } from "../sections/sections";
import AdvantageSecNew from "../sections/Home/AdvantageSec/AdvantageSecNew";

const Home = ({ data }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic</title>
                <meta name="description" content="Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof." />
                <meta name="robots" content="index" />
            </Head>
            <Hero />
            <main>
                <section className="my-md-5 mt-4">
                    <ServiceSectionNew />
                </section>
                <section className="mt-md-5 mt-4">
                    <AboutNew />
                </section>

                <section className="mt-md-5 mt-4">
                    <AdvantageSecNew />
                </section>

                <section className="mt-md-5 mt-4">
                    <OfferNew />
                </section>

                <section className="mt-md-5 mt-4">
                    <PaymentPlan />
                </section>
                <section className="my-md-5 my-4">
                    <AddressNew />
                </section>
            </main>
        </>
    );
};

export default Home;