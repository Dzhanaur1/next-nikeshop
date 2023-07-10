import { API_URL } from ".";

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/catalog`);
  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/item/${id}`);

  return await response.json();
}
