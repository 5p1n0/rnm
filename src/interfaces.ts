export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Character extends ResourceBase {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: Episode[];
}

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: Character[];
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: Character[];
}

