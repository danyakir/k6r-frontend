import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { StatusCodes } from "http-status-codes";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";
import { validateApiError, validateStatusCode } from "@utils";

const axiosInstance = axios.create({
  baseURL: import.meta.env.SERVER_BASE_URL || "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const currentGroup = sessionStorage.getItem(
    STRINGS.sessionStorage.currentGroup
  );
  config.headers["X-Current-Group"] = currentGroup;

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.code === "ERR_NETWORK") {
      showToast(STRINGS.errors.serviceUnavailable, "error");
      return;
    }

    if (error.status == StatusCodes.UNAUTHORIZED) {
      handleUnathorized(error);
      return;
    }

    const data: unknown = error.response?.data;
    validateApiError(data);
    validateStatusCode(error.status);

    handleKnownErrors[error.status](data.description);

    console.log(error);

    throw error;
  }
);

const handleKnownErrors: Record<number, (description: string) => void> = {
  [StatusCodes.FORBIDDEN]: (description) => handleForbidden(description),
  [StatusCodes.UNPROCESSABLE_ENTITY]: (description) =>
    handleUnprocceable(description),
  [StatusCodes.BAD_REQUEST]: (description) => showToast(description, "error"),
  [StatusCodes.CONFLICT]: (description) => showToast(description, "error"),
  [StatusCodes.INTERNAL_SERVER_ERROR]: () =>
    showToast(STRINGS.errors.internalServerError, "error"),
};

const handleForbidden = (description: string) =>
  (window.location.href = `/login?message=${description}`);

const handleUnprocceable = (description: string) =>
  (window.location.href = `/error?message=${description}`);

const handleUnathorized = (error: AxiosError) => {
  const baseUrl = axiosInstance.defaults.baseURL;
  const loginPath = error.response?.headers["location"];
  const redirectUrl = loginPath
    ? `${baseUrl}${loginPath}`
    : `${baseUrl}${import.meta.env.SERVER_LOGIN_ROUTE || "/oauth/login"}`;

  window.location.href = redirectUrl;
};

export default axiosInstance;
