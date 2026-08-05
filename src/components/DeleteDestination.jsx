"use client"
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteDestination = ({destination}) => {
    const { _id, destinationName} = destination;
    const deleteHandle = async() => {
        console.log(`Delete the ${destinationName}`);
        const res = await fetch(`http://localhost:5260/destination/${_id}`,{
            method: "DELETE",
            headers:{
                "content-type" : "application/json"
            }
        })
        const data = await res.json()
        console.log(data);

        if(data.deletedCount > 0){
            redirect("/all-destinations");
        }
        
    }
    return (
        <AlertDialog>
            <Button className="p-2 rounded-none cursor-pointer flex gap-1 items-center" variant='danger-soft'> <FaTrash></FaTrash> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
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
                            <Button onClick={deleteHandle} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteDestination;