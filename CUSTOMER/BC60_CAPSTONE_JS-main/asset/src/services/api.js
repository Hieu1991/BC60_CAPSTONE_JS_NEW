function Api() {
  this.fetchData = function () {
    const promise = axios({
      url: "https://658702b0468ef171392f21df.mockapi.io/api/Product",
      method: "GET",
    });
    return promise;
  };
}
