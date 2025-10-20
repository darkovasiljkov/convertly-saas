"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Account } from '@/lib/generated/prisma';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';


interface AccountContainerProps {
    account: Account;
}
export default function AccountContainer({account}: AccountContainerProps) {

      const [username, setUsername] = useState(account.username);

       const [isSaving, setIsSaving] = useState(false);

        const updateUsername = async () => {
    setIsSaving(true);
    axios
      .put("/api/account", { username })
      .then((res) => {
        if (!res.data.success) {
          toast.error(
            res.data.message?.message ||
              "Something went wrong saving the username."
          );
          console.error(res.data);
          return;
        }

        const updatedAccount = res.data.data;
        if (updatedAccount) {
          setUsername(updatedAccount.username);
          toast.success("Username updated successfully!");
        }
      })
      .catch((error) => {
        console.error("Something went wrong saving the username.");
        console.error(error);
        toast.error(
          "Something went wrong saving the username. Please try again."
        );
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

 return (
    <div className="flex h-full w-full flex-col m-8 gap-y-4 items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-700">Account Home</h1>
      <hr />
      <div className="w-fit">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Username
        </label>
        <Input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username here..."
        />
      </div>
      <div className="flex flex-row gap-x-4">
        <Button
          variant="outline"
          onClick={() => setUsername(account?.username || "")}
        >
          Cancel
        </Button>
        <Button onClick={updateUsername}>
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>
      <hr />
      <h2 className="text-xl text-gray-700">Subscription</h2>
      <div className="flex flex-row gap-x-2">
        <p className="font-semibold text-gray-700">Status:</p>
      </div>
      {/* <Button onClick={handleStripe} variant="outline" className="w-fit">
        {isActive ? "Manage Subscription" : "Upgrade to Pro"}
      </Button> */}
    </div>
  );
}
