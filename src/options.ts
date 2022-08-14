const opts = {
  getDetectOpts: (text: string) => ({
    method: 'GET',
    url: 'https://translo.p.rapidapi.com/api/v3/detect',
    params: { text },
    headers: {
      'X-RapidAPI-Key': 'e12f850556msh911ad9e2a5bce78p1413aejsn2570ec432280',
      'X-RapidAPI-Host': 'translo.p.rapidapi.com'
    }
  }),
  getTranslateOpts: (to: string, text: string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("to", to);
    encodedParams.append("text", text);

    return {
      method: 'POST',
      url: 'https://translo.p.rapidapi.com/api/v3/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'e12f850556msh911ad9e2a5bce78p1413aejsn2570ec432280',
        'X-RapidAPI-Host': 'translo.p.rapidapi.com'
      },
      data: encodedParams
    };
  },
};

export default opts;