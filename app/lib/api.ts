export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    cache: options?.cache ?? "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data ${endpoint}`;

    try {
      const errorData = await res.json();
      errorMessage =
        errorData?.message ||
        errorData?.error ||
        errorMessage;
    } catch {
      // ignore JSON parse error
    }

    throw new Error(errorMessage);
  }

  return (await res.json()) as T;
}

// ==========================
// Image URL Helper
// ==========================
export function getImageUrl(path?: string): string {
  // fallback kalau kosong
  if (!path) {
    return "/images/categories/placeholder.png";
  }

  // kalau sudah full URL
  if (path.startsWith("http")) {
    return path;
  }

  // kalau cuma filename / relative path dari API
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}