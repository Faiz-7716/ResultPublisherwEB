export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  // Setup headers
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  // NOTE: Add JWT auth token logic here if required by the endpoint

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `API Error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Search
  search: (query: string, type?: string) => 
    fetchWithAuth(`/search?q=${encodeURIComponent(query)}${type ? `&type=${type}` : ''}`),
  
  // Datasets
  getDatasets: (domainType?: string) => 
    fetchWithAuth(`/datasets${domainType ? `?domainType=${domainType}` : ''}`),
  
  // Complaints
  getComplaints: (sort: 'trending' | 'top' | 'new' = 'trending') => 
    fetchWithAuth(`/complaints?sort=${sort}`),
    
  // Votes
  getVoteBoxes: () => 
    fetchWithAuth(`/votes`),
    
  // Analytics
  getGlobalAnalytics: () => 
    fetchWithAuth(`/analytics/global`),
};
