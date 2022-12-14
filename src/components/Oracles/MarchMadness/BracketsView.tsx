import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Bracket, Seed, SeedItem, SeedTeam } from 'react-brackets'

interface MarchMadnessBracketsViewProps {
  //   tournament: {
  //     id: string
  //     league: {
  //       id: string
  //       alias: string
  //       name: string
  //     }
  //     location: string
  //     name: string
  //     rounds: {
  //       id: string
  //       name: string
  //       sequence: number
  //       game: []
  //       bracketed: {
  //         bracket: {
  //           id: string
  //           location: string
  //           name: string
  //         }
  //         games: {
  //           id: string
  //           status: string
  //         }[]
  //       }[]
  //     }[]
  //   }
  tournament: any
}

const regions = [
  'South Regional',
  'East Regional',
  'West Regional',
  'Midwest Regional',
]

const GetGamesInOrder = games => {
  return games.sort((a, b) =>
    Number(a.title.match('Game ([0-9]+)')[1]) >
    Number(b.title.match('Game ([0-9]+)')[1])
      ? 1
      : -1,
  )
}

const GetBracketsInOrder = (round, brackets: any) => {
  let allGames: any[] = []

  regions.forEach(region => {
    const regionBracket = brackets.find(b => b.bracket.name === region)

    if (!regionBracket) {
      return
    }

    allGames = allGames.concat(GetGamesInOrder(regionBracket.games))
  })

  return allGames
}

const convertFromSportRadar = data => {
  const firstFour = GetBracketsInOrder(
    0,
    data.rounds.find(r => r.sequence === 1).bracketed,
  )

  const firstRound = GetBracketsInOrder(
    1,
    data.rounds.find(r => r.sequence === 2).bracketed,
  )
  const secondRound = GetBracketsInOrder(
    2,
    data.rounds.find(r => r.sequence === 3).bracketed,
  )
  const sweet16 = GetBracketsInOrder(
    3,
    data.rounds.find(r => r.sequence === 4).bracketed,
  )
  const eliteEight = GetBracketsInOrder(
    4,
    data.rounds.find(r => r.sequence === 5).bracketed,
  )
  const finalFour = data.rounds.find(r => r.sequence === 6).games
  const nationalChampionship = data.rounds.find(r => r.sequence === 7).games
  return {
    firstFour,
    firstRound,
    secondRound,
    sweet16,
    eliteEight,
    finalFour,
    nationalChampionship,
  }
}

const convertFromGameObjToSeeds = (games, j) =>
  games.map(g => {
    j += 1

    let winner

    if (g.home_points && g.away_points) {
      if (g.home_points > g.away_points) {
        winner = g.home.alias
      } else {
        winner = g.away.alias
      }
    } else {
      winner = ''
    }

    return {
      id: j,
      date: `${new Date(g.scheduled).toDateString()} ${new Date(
        g.scheduled,
      ).toLocaleTimeString('en-US')}`,
      teams: [g.home, g.away],
      winner,
      game: g,
    }
  })

const SeedTeamWrapper = ({ winner, team, team_points, tooltip_position }) => {
  const isWinner = winner === team?.alias
  return (
    <SeedTeam style={{ color: isWinner ? 'green' : 'white' }}>
      <div style={{ fontWeight: isWinner ? '700' : '400' }}>
        {isWinner ? '🏆' : ''}
        {team?.alias || 'NO TEAM '} {team?.seed && `(${team?.seed})`}
      </div>

      <div style={{ display: 'inline' }}>{team_points}</div>
    </SeedTeam>
  )
}

const CustomSeed = (_seed, breakpoint, roundIndex) => {
  const { seed } = _seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem>
        <div>
          {seed ? (
            <>
              <SeedTeamWrapper
                winner={seed.winner}
                team={seed.teams[0]}
                team_points={seed.game.home_points}
                tooltip_position="top"
              />
              <SeedTeamWrapper
                winner={seed.winner}
                team={seed.teams[1]}
                team_points={seed.game.away_points}
                tooltip_position="bottom"
              />
            </>
          ) : null}
        </div>
      </SeedItem>
      <div className="sc-gKsewC ha-DNGW">{seed.date}</div>
    </Seed>
  )
}

export const ReactBrackets = ({ data }) => {
  const {
    firstFour,
    firstRound,
    secondRound,
    sweet16,
    eliteEight,
    finalFour,
    nationalChampionship,
  } = convertFromSportRadar(data)
  const i = 1
  const j = 0
  const firstFourRound = [
    {
      title: 'First Four',
      seeds: convertFromGameObjToSeeds(firstFour, j),
    },
  ]
  const rounds = [
    {
      title: 'First Round',
      seeds: convertFromGameObjToSeeds(firstRound, i),
    },
    {
      title: 'Second Round',
      seeds: convertFromGameObjToSeeds(secondRound, i) || [],
    },
    {
      title: 'Sweet 16',
      seeds: convertFromGameObjToSeeds(sweet16, i) || [],
    },
    {
      title: 'Elite Eight',
      seeds: convertFromGameObjToSeeds(eliteEight, i) || [],
    },
    {
      title: 'Final Four',
      seeds: convertFromGameObjToSeeds(finalFour, i) || [],
    },
    {
      title: 'National Championship',
      seeds: convertFromGameObjToSeeds(nationalChampionship, i) || [],
    },
  ]

  return (
    <div>
      <Bracket rounds={firstFourRound} renderSeedComponent={CustomSeed} />
      <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />
    </div>
  )
}

const MarchMadnessBracketsView = ({
  tournament,
}: MarchMadnessBracketsViewProps) => {
  // console.log(rounds)

  return (
    <Flex overflowX="scroll">
      <ReactBrackets data={tournament} />
    </Flex>
  )
}

export default MarchMadnessBracketsView
