"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    // console.log(session);
    const user = session?.user
    // console.log(user);
    const handleSignOut = async() => {
        const {data, error} = await authClient.signOut();
        // console.log("data: ", data, "error: ", error);
        redirect("/signin")
    }

    return (
        <div className="bg-white py-3">
            <nav className="flex items-center justify-between container mx-auto">
                <ul className="flex gap-3">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-destinations"}>Destinations</Link>
                    </li>
                    <li>
                        <Link href={"/my-bookings"}>My Bookings</Link>
                    </li>
                    <li>
                        <Link href={"/add-destination"}>Add Destination</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div>
                    <Image
                        src={"/assets/Wanderlast.png"}
                        height={150}
                        width={150}
                        alt="logo"
                    />
                </div>
                <ul className="flex items-center gap-3">
                    {user ? <>
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <Button className={'rounded-none'} onClick={handleSignOut} variant="danger">Sign Out</Button>
                    </> :
                        <>
                            <li>
                                <Link href={"/signin"}>Login</Link>
                            </li>
                            <li>
                                <Link href={"/signup"}>Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;