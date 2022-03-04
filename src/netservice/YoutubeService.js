class YoutubeService {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  // mostPopular
  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=kr&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  // search
  async searchResult(searchValueTxt) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchValueTxt}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default YoutubeService;
