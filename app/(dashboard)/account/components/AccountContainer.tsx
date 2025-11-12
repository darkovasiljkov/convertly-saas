"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Account, Subscription } from '@prisma/client'
import { getPayingStatus } from '@/utils/stripe';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';


interface AccountContainerProps {
    account: Account;
    subscription: Subscription | null;
}
export default function AccountContainer({account, subscription}: AccountContainerProps) {

  const [isActive, setIsActive] = useState(getPayingStatus(subscription));

  const [username, setUsername] = useState(account.username);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsActive(getPayingStatus(subscription));
  }, [subscription]);

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

  const handleStripe = async () => {
    try {
      const response = await axios.get("/api/stripe");

      if (response.data.url)
      {
        window.location.href = response.data.url;
      }
      else
      {
        console.error("No URL returned from Stripe API");
        toast.error("Something went wrong with Stripe. Please try again.");
      }
    }
    catch (error)
    {
      console.error("No URL returned from Stripe API");
      toast.error("Something went wrong with Stripe. Please try again.");
    }
  }

  return (
    <div className="flex justify-center pt-20 px-4 bg-[#fafafa]">
      <div className="flex flex-col items-center justify-start w-full max-w-md bg-white shadow-lg rounded-xl p-8 gap-y-4">
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Account Home
        </h1>
           <p className="text-sm text-gray-500">Manage your profile and subscription</p>
        <hr className="w-full" />

        <div className="w-full">
          <label className="mb-2 block text-sm font-bold text-gray-700 text-left">
            Username
          </label>
          <Input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username here..."
          />
        </div>

        <div className="flex flex-row gap-x-4 mt-2">
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

        <hr className="w-full" />
        <h2 className="text-xl text-gray-700 text-center">Subscription</h2>
        <div className="flex flex-row gap-x-2 text-gray-700">
          <p className="font-medium">Plan:</p>
          <p className="font-semibold">{isActive ? "Premium" : "Free"}</p>
        </div>

        <Button onClick={handleStripe} variant="outline" className="w-fit mt-2">
          {isActive ? "Manage Subscription" : "Upgrade to Premium"}
        </Button>
      </div>
    </div>
  );
}