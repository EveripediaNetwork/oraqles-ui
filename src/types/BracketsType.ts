export type GamesType = {
  away: GamesAwayType
  away_points: number
  broadcast: {
    network: string
    satellite: string
  }
  conference_game: boolean
  coverage: string
  home: {
    alias: string
    id: string
    name: string
    seed: number
  }
  home_points: number
  id: string
  neutral_site: boolean
  round: number
  scheduled: string
  status: string
  title: string
  venue: {
    address: string
    capacity: number
    city: string
    country: string
    id: string
    name: string
    state: string
    zip: string
  }
}

export type GamesAwayType = {
  alias: string
  id: string
  name: string
  seed: number
  source: {
    away_team: string
    coverage: string
    home_team: string
    id: string
    outcome: string
    scheduled: string
    status: string
    title: string
  }
}

export type ConvertFromSportRadarType = {
  id: string
  league: {
    alias: string
    id: string
    name: string
  }
  location: string
  name: string
  rounds: {
    id: string
    name: string
    sequence: number
    games: GamesType[]
    bracketed: BracketedType[]
  }[]
  season: {
    id: string
    type: string
    year: number
  }
  status: string
}

export type BracketedType = {
  bracket: {
    id: string
    location: string
    name: string
  }
  games: GamesType[]
}

export type SeedTeamWrapperType = {
  winner: string
  team: GamesAwayType
  team_points: number
}

export type TournamentType = {
  tournament: ConvertFromSportRadarType
  statistics: {}
}
