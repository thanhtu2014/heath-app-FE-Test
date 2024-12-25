
import React, { createContext } from 'react';

export interface PageTitle {
  title: string | null;
  backUrl: string | null;
  createdAt: string | null;
  status: string | null;
}

export interface CurrentUser {
  creditBalance: number;
}

export interface GlobalContextType {
  pageTitle: PageTitle;
  setPageTitle: React.Dispatch<React.SetStateAction<PageTitle>>;
  triggerFetchProfile: boolean;
  setTriggerFetchProfile: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: CurrentUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
}

export const GlobalContext: React.Context<GlobalContextType> = createContext<GlobalContextType>(undefined);