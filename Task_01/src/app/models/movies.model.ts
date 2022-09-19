export interface Movie {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection?: Collection | null,
  budget?: number,
  genre_ids: number[],
  genres?: Genre[],
  homepage?: string,
  id: number,
  imdb_id?: "string",
  original_language: string,
  original_title: string,
  overview: string,
  poster_path: string,
  production_companies?: Company[],
  production_countries?: Country[],
  release_date: string,
  revenue?: number, 
  runtime?: number, 
  spoken_languages?: Language [],
  status?: string, 
  tagline?: string,

  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  popularity: number,
}

interface Genre {
  id: number,
  name: string,
}

interface Company {
  id: number, 
  logo_path: string, 
  name: string, 
  origin_country: string,
}

interface Country {
  iso_3166: string,
  name: string,
}

interface Language {
  english_name: string,
  iso_639_1: string,
  name: string,
}

interface Collection {
  backdrop_path: string, 
  id: number, 
  name: string, 
  poster_path: string,
}