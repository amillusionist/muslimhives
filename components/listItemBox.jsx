import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Button from "./button";
import IconButton from "./iconbutton";
import StarRating from "./starRating";
import { IoLocationSharp } from "react-icons/io5";

export default function ListItemBox({image , name , avgrating, totalrating, address, categories, buttons , text}){
    return(
        <div className='mhresultItemBox flex gap-20'>
        <div>
            <Link href="#">
                <div><Image className="mhresultItemBoxImg" src={`${image}`} width={180} height={180} objectFit="cover" /></div>
            </Link>
        </div>
        <div className='flex col space-between'>
            <div className='flex col gap-10'>
            <h2>
                <Link href="#" className='flex gap-5'>
                    <div>{name}</div>
                </Link>
                <span></span>
            </h2>
            <div className='flex gap-10'>
                <div className='vendBox-avgrating'>{avgrating}</div>
                <StarRating  />
                <div>{totalrating}+ Ratings</div>
            </div>
            <div className='listItemBoxadress'><IoLocationSharp size={20} />{address}</div>
            <div className='flex gap-20'>
                <div className='servicetags'>Estate Agents</div>
                <div className='servicetags'>Estate Agents for residential</div>
            </div>
            </div>
            <div>
                <div className='flex gap-20'>
                    <Button link="#" type="button" label={text} color="button primary-button" />
                    <Button link="#" type="button" label="Menu" color="flex gap-5 button border-button" />
                    <div>
                    <IconButton link="#" src="http://localhost:1337/uploads/icons8_whatsapp_15a0026578.gif" color="your-color" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}