import { API_BASE_URL, API_KEY } from "@/constants/env";

type Props = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  options?: RequestInit;
};

const apiClient = async <T>({
  method = "GET",
  path,
  options,
}: Props): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Finnhub-Token": API_KEY,
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default apiClient;
