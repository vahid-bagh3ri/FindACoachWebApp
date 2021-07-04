export default {
  login() {},
  async singup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs8V4lECWOTcPI266qnjXb6YhavldvHQw',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || 'Failed to authenticate.'
      );
      throw error;
    }
    console.log(responseData);
  }
};
