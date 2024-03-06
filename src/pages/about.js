"use client";
import React, {lazy, Suspense, useState } from "react";
import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/header';



export default function About() {
  return (
    <>
    <Head>
        <title>About-MuslimHives</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
      <main className='__about__'>
        <section className=''>
          <div className='bannerbox'>
            <div className='container_cms flex-center'>
              <div className='banner-heading'>
                About MuslimHive
              </div>
            </div>
          </div>
        </section>
        <section className='about-content-section'>
          <div className='container-mid'>
            <div className='about-row'>
              <div className='about-row-left flex col gap-30'>
                <div className='aboutrow-wrapper flex col gap-10'>
                  <div className='aboutrow-heading'>
                    About us
                  </div>
                  <div className='aboutrow-content'>
                    <p>
                      MuslimHive Limited is India's No. 1 Local Search engine that provides local search related services to users across India through
                      multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888)
                      and text (SMS). MuslimHive has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day
                      tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider
                      of local search and related information to being an enabler of such transactions. MuslimHive has also launched JD Omni, an end-to-end
                      business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business
                      online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay,
                      a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform
                      to provide curated content on latest happenings to users. The organisation also aims to make communication between users and
                      businesses seamless through its Real Time Chat Messenger.
                    </p>
                  </div>
                </div>

                <div className='aboutrow-wrapper flex col gap-10'>
                  <div className='aboutrow-heading'>
                    MuslimHive's Mission
                  </div>
                  <div className='aboutrow-content'>
                    <p>
                      To provide fast, free, reliable, and comprehensive information to our users and enable discovery and transactions for all products and services.
                    </p>
                  </div>
                </div>

                <div className='aboutrow-wrapper flex col gap-10'>
                  <div className='aboutrow-heading'>
                    Corporate Information
                  </div>
                  <div className='aboutrow-content'>
                    <p>
                      The company's operations began in 1996 with offering local search services under the MuslimHive brand, which is
                      Now the leading local search engine in India.
                      The official website www.MuslimHive.com was launched in 2007.
                      MuslimHive's search services are available to users across multiple platforms such as website, mobile website, Apps, voice and text (SMS).
                      MuslimHive's search services bridge the gap between users and businesses by helping users find relevant providers of products and services effortlessly, while helping businesses listed in MuslimHive's database to market their offerings.
                    </p>
                  </div>
                </div>

                <div className='aboutrow-wrapper flex col gap-10'>
                  <div className='aboutrow-heading'>
                    MuslimHive Facts
                  </div>
                  <div className='aboutrow-content'>
                    <p>
                      MuslimHive Apps are available on Android and iOS platforms and have location - based services for mobile internet users.
                      MuslimHive's voice services are available on 8888888888, their operator assisted hot line number, across India, which is accessible 24 hours a day, 7 days a week with multi-lingual support.
                      MuslimHive has a database of approximately 40.2 million listings as of September 30, 2023.
                      It has 171.7 million quarterly unique users across web, mobile, App & voice platforms as of September 30, 2023.
                      MuslimHive users have contributed 145.8 million reviews and ratings for various listings as of September 30, 2023.
                      MuslimHive had approximately 560,830 campaigns as of September 30, 2023. Business owners have the option to list their business on MuslimHive's database for free.
                      With the registered & corporate office based in Mumbai, MuslimHive also has offices across India in Ahmedabad, Bengaluru, Chandigarh, Chennai, Coimbatore, Delhi, Hyderabad, Jaipur, Kolkata and Pune
                    </p>
                  </div>
                </div>
              </div>
              <div className='about-row-right'>
                <div>
                  For more details on MuslimHive's quarterly and annual performances you may check:
                </div>
                <ul>
                  <li>Company Presentation</li>
                  <li>Company Presentation</li>
                  <li>Company Presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
      </main>

    </>
  )
}
