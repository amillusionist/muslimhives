import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ListItemBox from "../../../components/listItemBox";
import Breadcrumb from '../../../components/Breadcrumb';


const LocationPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main className="flex col gap-20">
        <div>
        <Breadcrumb />
        </div>
        <div className="col">
          <div className="flex width-70 col gap-20">
            <ListItemBox image="https://content.jdmagicbox.com/comp/pune/g4/020pxx20.xx20.180116071920.u1g4/catalogue/publiq-hinjawadi-pune-pubs-4em8w.jpg?clr=#663800"
                         name="Blue Leaf Properties"
                         avgrating="3.7"
                         totalrating="50"
                         address="Warje Malwadi-warje,Pune"
                         text="+91 7894561232" />
            <ListItemBox image="https://content.jdmagicbox.com/comp/pune/y5/020pxx20.xx20.121108140524.p9y5/catalogue/search-pathology-laboratory-dhankawadi-pune-pathology-labs-4x8bmsnwyh.jpg?clr=#392d2d"
                         name="Search Diagnostic Center"
                         avgrating="4.7"
                         totalrating="100"
                         address="Ambegaon Pathar, Pune"
                         text="+91 2589637412" />
          </div>
          <div className="flex width-30"></div>
        </div>
      </main>
    </>
  );
};
export default LocationPage;
