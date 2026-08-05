"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Calendar, Card, DateField, Label } from '@heroui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

// user: userId, username, userImage
// destination: destinationId, destinationName, price, destinationImage, country
// bokinginfo: departure date,


const BookingCard = ({ destination }) => {
    // console.log(destination);
    const [departureDate, setDepartureDate] = useState(null);
    // console.log(new Date(departureDate));
    const { _id, destinationName, imageUrl, price } = destination;
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user
    // console.log("user: ", user);

    const userId = session?.user?.id
    // console.log("userId ", userId);
    const handleBooking = async () => {
        const bookingInfo = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            destinationImg: imageUrl,
            price,
            departureDate: new Date(departureDate)
        }
        console.log(bookingInfo);

        const res = await fetch('http://localhost:5260/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
        const data = await res.json();
        console.log(data);
        if(data.insertedId){
            toast.success(`Booked the ${destinationName} successfully`)
        }
    }

    return (
        <div>
            <Card className='rounded-none border shadow'>
                <div>
                    <h3 className='text-sm text-muted'>Starting From</h3>
                    <h2 className='text-3xl font-bold text-cyan-500'>${price}</h2>
                    <small className='text-sm text-muted'>Per Person</small>
                </div>
                <div>
                    <div>
                        <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
                            <Label>Departure Date:</Label>
                            <DateField.Group>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                <DateField.Suffix>
                                    <Calendar className="size-4 text-muted" />
                                </DateField.Suffix>
                            </DateField.Group>
                        </DateField>
                    </div>
                </div>
                <Button onClick={handleBooking} className={'text-lg font-bold bg-cyan-500 rounded-none w-full'}>Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;