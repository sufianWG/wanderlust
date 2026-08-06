"use client"
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteBooking = ({ booking }) => {
    const { _id, destinationName } = booking;
    const handleDeleteBooking = async () => {
        
        const res = await fetch(`http://localhost:5260/booking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);

        if(data.deletedCount > 0){
            window.location.reload()
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button variant='danger' className={'flex items-center justify-center gap-2'}> <FaTrash></FaTrash> Cancel</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete {destinationName} permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteBooking;