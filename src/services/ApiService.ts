class ApiService {
  getHeaders = () => {
    return new Headers({});
  };

  get = async (url: string, options: any) => {
    const getRequest = new Request(url, {
      method: "GET",
      headers: { ...this.getHeaders(), ...options.headers },
      cache: "default",
    });

    return fetch(getRequest).then(
      (response) => {
        if (response.status === 200) {
          return response.json().then((data) => {
            return data;
          });
        } else {
          throw new Error("Failed to load data");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };
}

const apiService = new ApiService();

export default apiService;
