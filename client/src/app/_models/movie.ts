import { Actor } from "./actor";
import { Rating } from "./rating";

export interface Movie {
    id: number;
    title: string;
    coverUrl: string;
    releaseDate: Date;
    description: string;
    ratings: Rating[];
    isMovie:boolean;
    mediaType: MediaType;
    cast: Actor[];
  }

  export enum MediaType {
    Movie = 'Movie',
    TvShow = 'TvShow'
  }