import { Statistics, StatisticsData } from './Statistics'

export type MarchMadnessFullData = {
  tournament: Tournament
  statistics: StatisticsData[]
}

export interface MarchMadnessData {
  tournament: Tournament
  statistics_hash: string
}

export interface Tournament {
  id: string
  name: string
  location: string
  status: string
  league: League
  season: Season
  rounds: Round[]
}

export interface League {
  id: string
  name: string
  alias: string
}

export interface Season {
  id: string
  year: number
  type: string
}

export interface Round {
  id: string
  sequence: number
  name: string
  games: Game[]
  bracketed: Bracketed[]
}

export interface Game {
  id: string
  status: string
  title: string
  coverage: string
  scheduled: string
  home_points: number
  away_points: number
  neutral_site: boolean
  conference_game: boolean
  venue: Venue
  broadcast: Broadcast
  home: Team
  away: Team
  round: number
}

export interface Venue {
  id: string
  name: string
  capacity: number
  address: string
  city: string
  state: string
  zip: string
  country: string
}

export interface Broadcast {
  network: string
}

export interface Team {
  name: string
  alias: string
  id: string
  seed: number
  source: Source
}

export interface Source {
  id: string
  title: string
  status: string
  coverage: string
  home_team: string
  away_team: string
  scheduled: string
  outcome: string
}

export interface Bracketed {
  bracket: Bracket
  games: Game[]
}

export interface Bracket {
  id: string
  name: string
  location: string
}
