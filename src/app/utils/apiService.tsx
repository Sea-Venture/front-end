import axios from "axios";

const API_BASE_URL = "https://sea-venture.org";

export const fetchLocations = async (): Promise<{ id: string; name: string }[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/locations/`);
  return response.data;
};

export const fetchActivities = async (): Promise<{ id: string; name: string }[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/activities/`);
  return response.data;
};

export const fetchActivityById = async (id: string): Promise<Record<string, unknown>> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/activities/${id}`);
  return response.data;
}

export const fetchLocationById = async (id: string): Promise<Record<string, unknown>> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/locations/${id}`);
  return response.data;
}

export const fetchEventByActivityId = async (id: string): Promise<Record<string, unknown>[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/events/activity/${id}`);
  return response.data;
}

export const fetchEventByLocationId = async (id: string): Promise<Record<string, unknown>[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/events/location/${id}`);
  return response.data;
}

export const fetchEventByLocationIdAndActivityId = async (
  locationId: string,
  activityId: string
): Promise<Record<string, unknown>[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/events/activity/location/${locationId}/${activityId}`);
  return response.data;
}

export const fetchUserByEmail = async (email: string): Promise<Record<string, unknown>> => {
  const response = await axios.post(
    `${API_BASE_URL}/api/user/profile/`,
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const fetchUserIdByEmail = async (email: string): Promise<{ id: string }> => {
  const response = await axios.get(
    `${API_BASE_URL}/api/user/profile/getid`,
    {
      params: { email },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export const createGuide = async (guideData: Record<string, unknown>): Promise<Record<string, unknown>> => {
  const response = await axios.post(
    `${API_BASE_URL}/api/guide/`,
    guideData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export const updateUserRole = async (userId: number, role: string): Promise<Record<string, unknown>> => {
  const response = await axios.put(
    `${API_BASE_URL}/api/user/profile/role/${userId}`,
    { role },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export const fetchAllBeaches = async (): Promise<Record<string, unknown>[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/beaches/`);
  return response.data;
}

export const createLocation = async (locationData: {
  name: string;
  lat: number;
  lng: number;
  pic: string;
}): Promise<Record<string, unknown>> => {
  const response = await axios.post(
    `${API_BASE_URL}/api/user/locations/`,
    locationData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const createEvent = async (eventData: object): Promise<Record<string, unknown>> => {
  const response = await axios.post(
    `${API_BASE_URL}/api/user/events/`,
    eventData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerUser = async (userData: { userName: string; email: string; password: string }): Promise<Record<string, unknown>> => {
  const response = await axios.post(`${API_BASE_URL}/api/user/auth/register`, userData);
  return response.data;
};

export const loginUser = async (loginData: { email: string; password: string }): Promise<Record<string, unknown>> => {
  const response = await axios.post(`${API_BASE_URL}/api/user/auth/login`, loginData);
  return response.data;
};

export const weatherUpdate = async (beach: { beach: string }): Promise<Record<string, unknown>> => {
  const response = await axios.get(`${API_BASE_URL}/api/user/forecast/`, {
    params: { beach: beach.beach },
  });
  return response.data;
};



