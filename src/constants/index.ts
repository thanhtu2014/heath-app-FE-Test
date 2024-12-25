interface Env {
  API_BASE_URL: string | undefined;
  OPEN_API_BASE_URL: string | undefined;
  WEBSITE_URL: string | undefined;
}

const ENV: Env = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  OPEN_API_BASE_URL: process.env.REACT_APP_OPEN_API_BASE_URL,
  WEBSITE_URL: process.env.REACT_APP_WEBSITE_URL,
};

const HEADER = [
  { id: 1, title: "自分の記録", icon: "../assets/images/my_record_icon.svg", url: "/" },
  { id: 2, title: "チャレンジ", icon: "../assets/images/challenge_icon.svg", url: "/contact" },
  { id: 3, title: "お知らせ", icon: "../assets/images/warning_icon.svg", url: "/privacy-policy" },
];

const MENU_MOBILE = [
  { id: 1, title: "自分の記録", url: "/" },
  { id: 2, title: "体重グラフ", url: "/contact" },
  { id: 3, title: "目標", url: "/privacy-policy" },
  { id: 4, title: "選択中のコース", url: "/refund-policy" },
  { id: 5, title: "コラム一覧", url: "/term-and-conditions" },
  { id: 6, title: "設定", url: "/term-and-conditions" },
];

const StorageKey = {
  authUser: '@auth:user',
};

interface Routes {
  ROOT_PATH: string;
  DASHBOARD_PATH: string;
  LOGIN_PATH: string;
  SIGNUP_PATH: string;
  FORGOT_PASSWORD: string;
  RESET_PASSWORD: string;
  PROFILE: {
    INDEX: string;
  };
  CONTACT_US: string;
  API: string;
  SERVER_ERROR: string;
}

const ROUTES: Routes = {
  ROOT_PATH: '/',
  DASHBOARD_PATH: '/',
  LOGIN_PATH: '/signin',
  SIGNUP_PATH: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/update-password',
  PROFILE: {
    INDEX: '/profile',
  },
  CONTACT_US: '/contact-us',
  API: '/apis',
  SERVER_ERROR: '/500',
};

const PAGE_SIZE: number = 10;

export {
  ENV,
  ROUTES,
  StorageKey,
  PAGE_SIZE,
  HEADER,
  MENU_MOBILE,
}; 
