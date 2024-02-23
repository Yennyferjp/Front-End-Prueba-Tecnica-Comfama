const BASE_URL = 'http://localhost:9090';

export async function fetchAnimes(searchTerm = '', page = 0, limit = 10) {
  try {
    let url = `${BASE_URL}/anime?page=${page}&limit=${limit}`;
    if (searchTerm) {
      url += `&title=${searchTerm}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch anime list');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching anime data:', error);
    throw error;
  }
}
