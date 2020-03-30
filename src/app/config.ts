const WINDOW_HTTP =    location.protocol;
const WINDOW_URL =     location.hostname;

const SERVER_URL = 'http://192.168.1.7:';
// const SERVER_URL = WINDOW_HTTP + '//' + WINDOW_URL + ':';
const PORT = '4000';

const devMode = 'ON_PREMISE';
// let devMode = 'LOCALHOST';
// let devMode = 'PRODUCTION';

export const LOCAL_HOST_SERVER = 'http://localhost:5000';

export const SOCKET_EVENTS = {
  NEW_SERVER_EVENT : devMode === 'ON_PREMISE' ? 'new_event_occurred' : 'message',
  USER_JOINED_EVENT : devMode === 'ON_PREMISE' ? 'user_joined' : 'message'

  // NEW_SERVER_EVENT : devMode === 'PRODUCTION' ? 'new_event_occurred' : 'message',
  // USER_JOINED_EVENT : devMode === 'PRODUCTION' ? 'user_joined' : 'message'
};

const configs = {
  ON_PREMISE: {
    LOGIN_URL : SERVER_URL + PORT + '/auth/login',
    REGISTER_URL : SERVER_URL + PORT + '/auth/signup',
    UPLOAD_IMAGE : SERVER_URL + PORT +  '/api/upload_image_for_processing',
  },
  LOCALHOST: {
    SERVER_ADDRESS_REALTIME : LOCAL_HOST_SERVER,
    SERVER_ADDRESS : '192.168.0.16',
    SERVER_ADDRESS_FOR_REGISTER : 'http://192.168.0.16:',

    TODAYS_ATTENDANCE : LOCAL_HOST_SERVER + '/employee-attendance',
    LOGIN_URL: LOCAL_HOST_SERVER + '/login',
    REGISTER_URL : SERVER_URL + PORT + '/awiros_ms/attendence/api/register_user_for_attendence',
    LIST_OF_REGISTER_URL : LOCAL_HOST_SERVER + '/list_of_registered_users',
  },
  PRODUCTION: {
    SERVER_ADDRESS_REALTIME : WINDOW_HTTP + '//' + WINDOW_URL + ':' + PORT,
    SERVER_ADDRESS : WINDOW_URL,
    SERVER_ADDRESS_FOR_REGISTER : WINDOW_HTTP + '//' + WINDOW_URL + ':',

    TODAYS_ATTENDANCE : SERVER_URL + PORT + '/awiros_ms/attendence/api/console_data',
    LOGIN_URL : SERVER_URL + PORT + '/awiros_ms/attendence/api/login',
    REGISTER_URL : SERVER_URL + PORT + '/awiros_ms/attendence/api/register_user_for_attendence',
    LIST_OF_REGISTER_URL : SERVER_URL + PORT + '/awiros_ms/attendence/api/list_of_registered_users',
  }
};

export const config = configs[devMode];


