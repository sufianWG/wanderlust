"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash  } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        const { name, email, imgurl, password } = formValues
        // console.log(email, imgurl, password);
        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image: imgurl,
            password,
        });
        console.log(data, error);
        if (!error) {
            await authClient.signOut();
            router.push('/signin')
        } else {
            toast("Registration Failed, Please try again")
        }
    };
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    }
    return (
        <Card className='mx-auto my-5 max-w-100 p-2 md:p-4'>
            <Form
                className="flex mx-auto w-94 flex-col gap-4" onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="imgurl"
                    type="url"
                >
                    <Label>Image Url</Label>
                    <Input placeholder="url" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type={isVisible ? "text" : "password"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                    className={'relative'}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Button
                        isIconOnly
                        aria-label={isVisible ? "Hide password" : "Show password"}
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                        className={'absolute right-2 translate-y-1/2 top-2.5'}
                    >
                        {isVisible ? <FaEye className="size-4" /> : <FaEyeSlash className="size-4" />}
                    </Button>
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button className={'bg-[#0F7180] hover:bg-[#075A66]'} type="submit">
                        Sign Up
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <div className='mt-3'>
                <Button className={'w-full text-base rounded-full bg-transparent text-[#0F7180] border border-[#0F7180] hover:border-[#075A66] hover:bg-[#075A66] hover:text-white'} onClick={handleGoogleLogin}> <FaGoogle></FaGoogle> Sign In With Google</Button>
            </div>
        </Card >


    );
};

export default SignUpPage;