
import MyBookingCard from "@/components/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";


const myBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    // console.log(user.id);

    const res = await fetch(`http://localhost:5260/booking/${user.id}`);
    const myBooking = await res.json();
    // console.log(myBooking);
    return (
        <div>
            <div className="container mx-auto my-5">
                <h1 className="text-xl font-bold">My Bookings:</h1>
                <p className="text-muted">Manage and view your upcoming travel plans</p>
                {myBooking.length === 0 ? <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-2xl font-bold text-muted text-center">No booking found, Please book now..</h1>
                    <Link href={"/all-destinations"} className="py-2 px-3 bg-cyan-500 text-white font-bold hover:bg-cyan-800">Back to Destinations</Link>
                </div> : <div className="flex flex-col gap-3">
                    {
                        myBooking.map(booking => <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>)
                    }
                </div>}
            </div>
        </div>
    );
};

export default myBookingPage;