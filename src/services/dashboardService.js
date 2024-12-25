import { API } from '@/constants/api';
import http from '@/http';
import { camelize, snakelize } from '@/utils/parse';

export async function getTransactionSummary() {
  try {
    const { status, data } = await http.get(API.DASHBOARD.TRANSACTION_SUMMARY);
    if (status === 200) {
      return {
        success: true,
        data: camelize(data),
      };
    }
    return {
      success: false,
      data: null,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: null,
    };
  };
};

export async function getCreditSummary() {
  try {
    const { status, data } = await http.get(API.DASHBOARD.CREDIT_SUMMARY);
    if (status === 200) {
      return {
        success: true,
        data: camelize(data),
      };
    }
    return {
      success: false,
      data: {},
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: {},
    };
  };
}

export async function getSmsInsight({ datePeriod = 7 }) {
  try {
    const params = snakelize({ datePeriod });
    const { status, data } = await http.get(API.DASHBOARD.SMS_INSIGHT, { params });
    if (status === 200) {
      return {
        success: true,
        data: camelize(data),
      };
    }
    return {
      success: false,
      data: [],
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: [],
    };
  };
}
