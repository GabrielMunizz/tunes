export type AlbumType = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: Date;
  trackCount: number;
  currency:string;
};

export type UserType = {
  name: string;
  email: string;
  image: string;
  description: string;
};

export type SongType = {
  artistName?: string,
  collectionName?: string,
  trackId: number,
  trackName: string,
  previewUrl: string,
};

export type InputTextType = React.ChangeEvent<HTMLInputElement>;

export type FormSubmitType = React.FormEvent<HTMLFormElement>;
