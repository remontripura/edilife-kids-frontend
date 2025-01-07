"use server";

import { cookies } from "next/headers";

type ApiErrorMessage = {
  path: string;
  message: string;
};

type IProps = {
  data: object;
  postUrl: string;
};

type ApiResponse = {
  success: boolean;
  data?: any;
  message?: string;
  errorMessages?: ApiErrorMessage[];
};

export const postData = async ({
  data,
  postUrl,
}: IProps): Promise<ApiResponse> => {
  const cookieStore = cookies();
  //   const token = cookieStore.get("gameToken")?.value;

  try {
    const response = await fetch(`${process.env.BASE_URL}${postUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `${token}`,
      },
      body: JSON.stringify(data),
    });

    const responseData: ApiResponse = await response.json();
    if (!response.ok || !responseData.success) {
      return responseData;
    }
    return responseData;
  } catch {
    return {
      success: false,
    };
  }
};
