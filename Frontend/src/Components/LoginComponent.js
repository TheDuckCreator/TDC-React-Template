import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import config from "../config.json";

export default function LoginComponent() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-1/2 border border-shamrock-200 rounded-lg p-4'>
        <h2 className='text-lg text-center font-medium'>Login</h2>
        <div className='flex justify-center'>
          <div className='w-3/4 py-6 '>
            <FormControl className='mb-2'>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' name='email' placeholder='your@email.com' />
            </FormControl>
            <FormControl className='mb-4'>
              <FormLabel>Password</FormLabel>
              <Input type='password' name='password' placeholder='******' />
            </FormControl>
            <Button colorScheme='brand' isFullWidth>
              Login
            </Button>

            <Button
              isFullWidth
              className='mt-2'
              as='a'
              href={process.env.REACT_APP_API_URL + "/auth/github"}
            >
              Sign in With GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
