export class Api {
  static request(url, method = "GET", body) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    }).then((res) => res.json());
  }

  static get(url) {
    return this.request(url);
  }

  static post(url, body) {
    return this.request(url, "POST", body);
  }
}
