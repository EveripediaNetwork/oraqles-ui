export type Statistics = Record<string, StatisticsData>

export interface StatisticsData {
  id: string
  name: string
  location: string
  status: string
  league: League
  season: Season
  team: Team
  own_record: OwnRecord
  opponents: Opponents
  players: Player[]
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

export interface Team {
  id: string
  name: string
  market: string
}

export interface OwnRecord {
  total: Total
  average: OwnRecordAverage
}

export interface Total {
  games_played: number
  minutes: number
  field_goals_made: number
  field_goals_att: number
  field_goals_pct: number
  two_points_made: number
  two_points_att: number
  two_points_pct: number
  three_points_made: number
  three_points_att: number
  three_points_pct: number
  blocked_att: number
  free_throws_made: number
  free_throws_att: number
  free_throws_pct: number
  offensive_rebounds: number
  defensive_rebounds: number
  rebounds: number
  assists: number
  turnovers: number
  assists_turnover_ratio: number
  steals: number
  blocks: number
  personal_fouls: number
  tech_fouls: number
  points: number
  fast_break_pts: number
  flagrant_fouls: number
  points_off_turnovers: number
  second_chance_pts: number
  ejections: number
  foulouts: number
  points_in_paint: number
  efficiency: number
  true_shooting_att: number
  true_shooting_pct: number
}

export interface OwnRecordAverage {
  fast_break_pts: number
  points_off_turnovers: number
  second_chance_pts: number
  minutes: number
  points: number
  off_rebounds: number
  def_rebounds: number
  rebounds: number
  assists: number
  steals: number
  blocks: number
  turnovers: number
  personal_fouls: number
  flagrant_fouls: number
  blocked_att: number
  field_goals_made: number
  field_goals_att: number
  three_points_made: number
  three_points_att: number
  free_throws_made: number
  free_throws_att: number
  two_points_made: number
  two_points_att: number
  points_in_paint: number
  efficiency: number
  true_shooting_att: number
}

export interface Opponents {
  total: Total
  average: OpponentsAverage
}

export interface OpponentsAverage {
  fast_break_pts: number
  points_off_turnovers: number
  second_chance_pts: number
  minutes: number
  points: number
  off_rebounds: number
  def_rebounds: number
  rebounds: number
  assists: number
  steals: number
  blocks: number
  turnovers: number
  personal_fouls: number
  flagrant_fouls: number
  blocked_att: number
  field_goals_made: number
  field_goals_att: number
  three_points_made: number
  three_points_att: number
  free_throws_made: number
  free_throws_att: number
  two_points_made: number
  two_points_att: number
  points_in_paint: number
  efficiency: number
  true_shooting_att: number
}

export interface Player {
  id: string
  full_name: string
  first_name: string
  last_name: string
  position: string
  primary_position: string
  jersey_number: string
  total: Total
  average: PlayerAverage
}

export interface PlayerAverage {
  minutes: number
  points: number
  off_rebounds: number
  def_rebounds: number
  rebounds: number
  assists: number
  steals: number
  blocks: number
  turnovers: number
  personal_fouls: number
  flagrant_fouls: number
  blocked_att: number
  field_goals_made: number
  field_goals_att: number
  three_points_made: number
  three_points_att: number
  free_throws_made: number
  free_throws_att: number
  two_points_made: number
  two_points_att: number
  efficiency: number
  true_shooting_att: number
}
