import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

const validateApiError: (
  data: unknown
) => asserts data is { description: string; error: string } = (data) => {
  if (
    typeof data == "object" &&
    data != null &&
    "description" in data &&
    "error" in data &&
    typeof (data as { description: string }).description === "string" &&
    typeof (data as { error: string }).error === "string"
  ) {
    return;
  } else {
    showToast(STRINGS.errors.internalServerError, "error");
  }
};

const validateStatusCode: (
  status: number | undefined
) => asserts status is number = (status) => {
  if (!status) {
    showToast(STRINGS.errors.internalServerError, "error");
  }
};

export { validateApiError, validateStatusCode };
