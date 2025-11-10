import { prismadb } from "@/lib/prismadb";
import { auth, currentUser} from '@clerk/nextjs/server';
import React from 'react'
import { generateFromEmail } from "unique-username-generator";
import AccountContainer from './components/AccountContainer';


export default async function  AccountPage() {

const fetchAccounts = async (userId: string) => {
let account = await prismadb.account.findUniqueOrThrow({where: {userId}});
    if (!account)
    {
        const user = await currentUser()
        if (!user) throw new Error("No user found");
        const baseEmail = user.emailAddresses[0].emailAddress;

        account = await prismadb.account.create({
            data: {
                userId: userId,
                email: baseEmail,
                username: generateFromEmail(baseEmail, 3),
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });
    }
    return account;

};

const fetchSubscription = (userId: string) => {
    return prismadb.subscription.findUniqueOrThrow({
      where: { userId }
    });
  }

const {userId} = await auth();

if (!userId) throw new Error("User not found!");
 
const [account, subscription] = await Promise.all([
  fetchAccounts(userId),
  fetchSubscription(userId),
]);
  return <AccountContainer account={account} subscription={subscription} />;
};

