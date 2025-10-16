import React, { useEffect } from 'react';
import { Profile } from "@/lib/generated/prisma";
import toast from "react-hot-toast";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

import { useAuth } from '@clerk/nextjs';


const DEFAULT_PROFILE: Profile = {
    id: "", 
    userId: "",
    title: "",
    description: "",
    profileimageUrl: "",
    createdAt: new Date(),
    updatedAt: new Date(),
};
interface ProfileEditorContextState {
  edittedProfile: Profile;
  setEdittedProfile: Dispatch<SetStateAction<Profile>>;
  save: () => Promise<void>;
}

const ProfileEditorContext =
  createContext<ProfileEditorContextState | null>(null);

export const ProfileEditorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
        const { userId } = useAuth();

  const [edittedProfile, setEdittedProfile] =
    useState<Profile>(DEFAULT_PROFILE);

    useEffect(() => {

        const fetchProfile = async () => {
                    const fetchedProfile = await axios
                    .get(`/api/profile?userId=${userId}`)
                    .then((resp) => {
                        const fetchedProfile = resp.data.data;
                        return fetchedProfile;
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error("Failed to fetch your Profile!");
                        return DEFAULT_PROFILE;
                        });
                             setEdittedProfile(fetchedProfile);
                    };

            fetchProfile();
            }, [userId]);


  const save = async () => {
    try {
      const response = await axios.request({
        url: "/api/profile",
        method: edittedProfile.id ? "PUT" : "POST",
        data: {
          ...edittedProfile,
        },
      });

       const updatedProfile = response.data.data;

      if (updatedProfile) {
        setEdittedProfile(updatedProfile);
        toast.success("Profile has been saved successfully!");
      }
    } catch (error) {
      toast.error("Failed to save your Profile!");
    }
  };

  return (
    <ProfileEditorContext.Provider
      value={{
        edittedProfile,
        setEdittedProfile,
        save,
      }}
    >
      {children}
    </ProfileEditorContext.Provider>
  );
};

  export function useProfileEditorContext()
  {
    const context = useContext(ProfileEditorContext);
    if (!context) {
      throw new Error("useProfileEditorContext must be used within a ProfileEditorContextProvider"
      );
    }
      return context;
  }

