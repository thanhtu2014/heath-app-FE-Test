import { API } from '@/constants/api';
import http from '@/http';
import { alertError, alertSuccess } from '@/utils/notification';
import { camelize, snakelize } from '@/utils/parse';
import { upperCase } from 'lodash';

export async function getProfile() {
  try {
    const res = await http.get(API.PROFILE.GET_PROFILE);
    if (res.status === 200) {
      const { data } = camelize(res);
      return {
        success: true,
        data,
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
  }
}

export async function updateAvatar(value) {
  try {
    const formData = new FormData();
    formData.append('avatar', value);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    const { status } = await http.post(
      API.PROFILE.UPDATE_AVATAR,
      formData,
      config,
    );
    if (status === 200) {
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}

export async function updateProfile({
  firstName,
  lastName,
  language,
  timezone,
  avatar,
  defaultBillingFirstName,
  defaultBillingLastName,
  defaultBillingEmail,
  defaultBillingPhone,
  defaultBillingTaxNumber,
  defaultBillingCityId,
  defaultBillingZipcode,
  defaultBillingAddress,
  defaultBillingWardId,
  defaultBillingCountryId,
  defaultBillingDistrictId,
}) {
  try {
    const payload = snakelize({
      firstName,
      lastName,
      language,
      timezone,
      avatar,
      defaultBillingFirstName,
      defaultBillingLastName,
      defaultBillingEmail,
      defaultBillingPhone,
      defaultBillingTaxNumber,
      defaultBillingZipcode,
      defaultBillingAddress,
      defaultBillingCity: defaultBillingCityId,
      defaultBillingCountry: defaultBillingCountryId,
      defaultBillingDistrict: defaultBillingDistrictId,
      defaultBillingWard: defaultBillingWardId,
    });
    const { status } = await http.post(
      API.PROFILE.UPDATE_PROFILE,
      payload,
    );
    if (status === 200) {
      alertSuccess('PROFILE_SUCCESS');
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  } catch (error) {
    console.log(error);
    if (error.response) {
      const { errorCode, errorDetail } = camelize(error.response.data);
      if (!errorDetail) {
        alertError(errorCode);
      } else {
        const keys = Object.keys(errorDetail);
        keys.forEach(key => {
          const fieldErrorCode = upperCase(key).replace(' ', '_');
          alertError(fieldErrorCode);
        });
      }
    } else {
      alertError('APPLICATION_ERROR');
    }
    return {
      success: false,
    };
  }
}

export async function updateBillingInfomation({
  defaultBillingFirstName,
  defaultBillingLastName,
  defaultBillingEmail,
  defaultBillingPhone,
  defaultBillingTaxNumber,
  defaultBillingCityId,
  defaultBillingZipcode,
  defaultBillingAddress,
  defaultBillingWardId,
  defaultBillingCountryId,
  defaultBillingDistrictId,
}) {
  try {
    const payload = snakelize({
      defaultBillingFirstName,
      defaultBillingLastName,
      defaultBillingEmail,
      defaultBillingPhone,
      defaultBillingTaxNumber,
      defaultBillingZipcode,
      defaultBillingAddress,
      defaultBillingCity: defaultBillingCityId,
      defaultBillingCountry: defaultBillingCountryId,
      defaultBillingDistrict: defaultBillingDistrictId,
      defaultBillingWard: defaultBillingWardId,
    });
    const { status } = await http.post(
      API.PROFILE.UPDATE_PROFILE,
      payload,
    );
    if (status === 200) {
      alertSuccess('UPDATE_BILLING_INFORMATION_SUCCESS');
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  } catch (error) {
    console.log(error);
    if (error.response) {
      const { errorCode } = camelize(error.response.data);
      alertError(errorCode);
    } else {
      alertError('APPLICATION_ERROR');
    }
    return {
      success: false,
    };
  }
}

export async function changePassword({ currentPassword, newPassword }) {
  try {
    const payload = snakelize({ currentPassword, newPassword });

    const { status } = await http.post(API?.PROFILE?.CHANGE_PASSWORD, payload);
    if (status === 200) {
      alertSuccess('PASSWORD_SUCCESS');
      return {
        success: true,
      };
    }
    return {
      success: false,
    };
  } catch (error) {
    console.log(error);

    if (error.response) {
      const { errorCode } = camelize(error.response.data);
      alertError(errorCode);
    } else {
      alertError('APPLICATION_ERROR');
    }
    return {
      success: false,
    };
  }
}

export async function getCountry({ name }) {
  try {
    const params = {
      name,
      pageSize: 100,
    };
    const { status, data } = await http.get(API.PROFILE.GET_COUNTRY, {
      params: snakelize(params),
    });

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
  }
}

export async function getProvince({ name, countryId }) {
  try {
    const params = {
      name,
      countryId,
      pageSize: 100,
    };
    const { status, data } = await http.get(API.PROFILE.GET_PROVINCE, {
      params: snakelize(params),
    });
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
  }
}

export async function getDistrict({ name, provinceId }) {
  try {
    const params = {
      name,
      provinceId,
      pageSize: 100,
    };
    const { status, data } = await http.get(API.PROFILE.GET_DISTRICT, {
      params: snakelize(params),
    });
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
  }
}

export async function getWard({ name, districtId }) {
  try {
    const params = {
      name,
      districtId,
      pageSize: 100,
    };
    const { status, data } = await http.get(API.PROFILE.GET_WARD, {
      params: snakelize(params),
    });
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
  }
}

export async function getBillingInfo() {
  try {
    const { status, data } = await http.get(API.PROFILE.GET_BILLING_INFO);
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
  }
}
