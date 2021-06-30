export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      messsage: payload.message
    };
    const response = await fetch(
      `https://find-a-coach-web-app-df0e6-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        methods: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  }
};
