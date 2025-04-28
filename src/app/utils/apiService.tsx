import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const fetchLocations = async (): Promise<{ id: string; name: string }[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch locations.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/locations/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Ensure the API returns an array of objects with `id` and `name`
};

export const fetchActivities = async (): Promise<{ id: string; name: string }[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch activities.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/activities/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Ensure the API returns an array of objects with `id` and `name`
};

export const fetchActivityById = async (id: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch activity by ID.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/activities/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export const  fetchLocationById = async (id: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch location by ID.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/locations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export const fetchEventByActivityId = async (id: string): Promise<any[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch events.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/events/activity/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data;
  return data
}

export const fetchEventByLocationId = async (id: string): Promise<any[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch events.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/events/location/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data;
  return data
}

export const fetchEventByLocationIdAndActivityId = async (locationId: string, activityId: string): Promise<any[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch events.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/events/activity/location/${locationId}/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data;
  return data
}




