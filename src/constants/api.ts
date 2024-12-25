export const API = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/signup',
    REFRESH_TOKEN: '/auth/refresh-token',
    FORGOT_PASSWORD: '/auth/forgot-password',
    VERIFY_TOKEN: '/auth/verify-token',
    RESET_PASSWORD: '/auth/reset-password',
  },
  PROFILE: {
    GET_PROFILE: '/auth/profile',
    UPDATE_PROFILE: '/auth/account/change',
    UPDATE_AVATAR: '/auth/account/change-avatar',
    CHANGE_PASSWORD: '/auth/account/change-password',
    GET_TIMEZONE: '/auth/account/timezones',
    GET_LANGUAGE: '/auth/account/languages',
    GET_COUNTRY: '/auth/account/countries',
    GET_PROVINCE: '/auth/account/provinces',
    GET_DISTRICT: '/auth/account/districts',
    GET_WARD: '/auth/account/wards',
    GET_BILLING_INFO: '/auth/profile/default-billing-info'
  },
  DASHBOARD: {
    TRANSACTION_SUMMARY: '/dashboard/transaction-payment-summary',
    CREDIT_SUMMARY: '/dashboard/credit-summary',
    SMS_INSIGHT: '/dashboard/sms-insight',
    CREDIT_LOG: '/dashboard/credit-logs'
  },
};
