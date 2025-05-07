import { gapi } from 'gapi-script';

export const initGoogleApi = async () => {
    return new Promise((resolve, reject) => {
        gapi.load('client', async () => {
            try {
                await gapi.client.init({
                    apiKey: "AIzaSyCoPD4M3KldulNgmAPN3ghnTwl-sVz3R_A",
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                });
                resolve(true)
            } catch(error) {
                console.error("Error initializing Google API: ", error);
                reject(error)
            }
        });
    });
};

export const listUpcomingEvents = async() => {
    if (!gapi.client.calendar) {
        throw new Error("gapi.client.calendar is not defined. Did you run initGoogleApi() first?");
    }

    const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
    })
    return response.result.items;
}