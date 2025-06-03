import axios from "axios";
import { getIdToken } from "./firebase";

const API_BASE_URL = "http://seaventures.ddns.net:8080";

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

export const fetchUserByEmail = async (email: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch user by email.");
  }

  const response = await axios.post(
    `${API_BASE_URL}/api/user/profile/`,
    { email }, // Send the email in the request body
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Ensure the content type is JSON
      },
    }
  );

  return response.data;
};

export const fetchUserIdByEmail = async (email: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch user ID by email.");
  }

  const response = await axios.get(
    `${API_BASE_URL}/api/user/profile/getid`,
    {
      params: { email },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}


export const createGuide = async (guideData: any): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to create a guide.");
  }

  const response = await axios.post(
    `${API_BASE_URL}/api/guide/`,
    guideData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export const updateUserRole = async (userId: Number, role: string): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to update user role.");
  }

  const response = await axios.put(
    `${API_BASE_URL}/api/user/profile/role/${userId}`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export const fetchAllBeaches = async (): Promise<any[]> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to fetch all beachers.");
  }

  const response = await axios.get(`${API_BASE_URL}/api/user/beaches/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export const createLocation = async (locationData: {
  name: string;
  lat: number;
  lng: number;
  pic: string;
}): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to create a location.");
  }

  const response = await axios.post(
    `${API_BASE_URL}/api/user/locations/`,
    locationData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const createEvent = async (eventData: {}): Promise<any> => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("You are not logged in. Please log in to create an event.");
  }

  const response = await axios.post(
    `${API_BASE_URL}/api/user/events/`,
    eventData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const registerUser = async (userData: { userName: string; email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/api/user/auth/register`, userData);
  return response.data;
};

export const loginUser = async (loginData: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/api/user/auth/login`, loginData);
  return response.data;
};

export const weatherUpdate = async (beach: { beach: string }) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_BASE_URL}/api/user/forecast/`, {
    params: { beach: beach.beach },
  });
  return response.data;
};



