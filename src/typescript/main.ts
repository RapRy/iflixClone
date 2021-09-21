class ApiFetch {
  protected baseUrl: string;
  protected apiKey: string;

  constructor() {
    this.baseUrl = "https://api.themoviedb.org/3/";
    this.apiKey = "d4bd55a4692da71940b8ab24f94031e2";
  }

  public async fetchGenres(): Promise<object> {
    const res = await fetch(
      `${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`
    );

    if (res.status === 200) {
      const data = await res.json();
      return data;
    }

    return { message: "no list" };
  }
}

class Genre extends ApiFetch {
  constructor() {
    super();
  }
  public genreList = async (): Promise<void> => {
    const list: object = await this.fetchGenres();

    console.log(list);
  };
}

const genre = new Genre();

genre.genreList();
