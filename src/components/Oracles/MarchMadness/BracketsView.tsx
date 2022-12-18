import React from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import {
  Bracket,
  Seed,
  SeedItem,
  SeedTeam,
  IRenderSeedProps,
} from 'react-brackets'
import { Bracketed, Game, Team, Tournament } from '@/types/MarchMadness'
import { RiTrophyFill } from 'react-icons/ri'

const regions = [
  'South Regional',
  'East Regional',
  'West Regional',
  'Midwest Regional',
]

const GetGamesInOrder = (games: Game[]) => {
  return games.sort((a, b) => {
    const aTitle = a.title.match('Game ([0-9]+)')
    const bTitle = b.title.match('Game ([0-9]+)')
    if (aTitle && bTitle) {
      return Number(aTitle[1]) > Number(bTitle[1]) ? 1 : -1
    }
    return 0
  })
}

const GetBracketsInOrder = (round: number, brackets?: Bracketed[]) => {
  let allGames: Game[] = []

  regions.forEach(region => {
    const regionBracket = brackets?.find(b => b.bracket.name === region)
    if (!regionBracket) return
    allGames = allGames.concat(GetGamesInOrder(regionBracket.games))
  })
  return allGames
}

const convertFromSportRadar = (data: Tournament) => {
  const firstFour = GetBracketsInOrder(
    0,
    data.rounds.find(r => r.sequence === 1)?.bracketed,
  )
  const firstRound = GetBracketsInOrder(
    1,
    data.rounds.find(r => r.sequence === 2)?.bracketed,
  )
  const secondRound = GetBracketsInOrder(
    2,
    data.rounds.find(r => r.sequence === 3)?.bracketed,
  )
  const sweet16 = GetBracketsInOrder(
    3,
    data.rounds.find(r => r.sequence === 4)?.bracketed,
  )
  const eliteEight = GetBracketsInOrder(
    4,
    data.rounds.find(r => r.sequence === 5)?.bracketed,
  )
  const finalFour = data.rounds.find(r => r.sequence === 6)?.games as Game[]

  const nationalChampionship = data.rounds.find(r => r.sequence === 7)?.games
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

const convertFromGameObjToSeeds = (games: Game[], j: number) => {
  let i = j
  return games.map(g => {
    i += 1
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
      id: i,
      date: `${new Date(g.scheduled).toDateString()} ${new Date(
        g.scheduled,
      ).toLocaleTimeString('en-US')}`,
      teams: [g.home, g.away],
      winner,
      game: g,
    }
  })
}

const SeedTeamWrapper = ({
  winner,
  team,
  team_points,
}: {
  winner: string
  team: Team
  team_points: number
}) => {
  const isWinner = winner === team?.alias
  return (
    <SeedTeam className={isWinner ? 'winner' : 'no-winner'}>
      <Flex alignItems="center" fontWeight={500} gap="1" fontSize="xs">
        {team?.alias || 'NO TEAM '} {team?.seed && `(${team?.seed})`}
        {isWinner ? <Icon as={RiTrophyFill} fill="yellow.500" /> : ''}
      </Flex>

      <div style={{ display: 'inline' }}>{team_points}</div>
    </SeedTeam>
  )
}

const CustomSeed = ({ seed, breakpoint }: IRenderSeedProps) => {
  const eventDateObj = new Date(seed.date as string)

  const EventDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(eventDateObj)

  const EventTime = eventDateObj.toLocaleTimeString('en-US', {
    minute: '2-digit',
    hour: '2-digit',
  })

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <Box
        border="1px solid"
        borderColor="bracketsCardBorder"
        borderRadius="6px"
        w="full"
      >
        <SeedItem className="event_bracket_style">
          <div>
            {seed ? (
              <>
                <SeedTeamWrapper
                  winner={seed.winner}
                  team={seed.teams[0] as Team}
                  team_points={seed.game.home_points}
                />
                <SeedTeamWrapper
                  winner={seed.winner}
                  team={seed.teams[1] as Team}
                  team_points={seed.game.away_points}
                />
              </>
            ) : null}
          </div>
        </SeedItem>
        <Flex
          w="full"
          justifyContent="space-between"
          bgColor="bracketsCardBottomBg"
          p="2.5"
        >
          <Text color="bracketsFooterText" fontSize="11px" fontWeight={500}>
            {EventDate}
          </Text>
          <Text color="bracketsFooterText" fontSize="11px" fontWeight={500}>
            {EventTime}
          </Text>
        </Flex>
      </Box>
    </Seed>
  )
}

export const ReactBrackets = ({ tournament }: { tournament: Tournament }) => {
  const {
    firstFour,
    firstRound,
    secondRound,
    sweet16,
    eliteEight,
    finalFour,
    nationalChampionship,
  } = convertFromSportRadar(tournament)

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
      seeds: convertFromGameObjToSeeds(nationalChampionship as Game[], i) || [],
    },
  ]

  return (
    <div>
      <Bracket
        bracketClassName="brackets"
        swipeableProps={{
          enableMouseEvents: true,
          animateHeight: true,
          ignoreNativeScroll: true,
        }}
        rounds={firstFourRound}
        renderSeedComponent={CustomSeed}
      />
      <Bracket
        bracketClassName="brackets"
        rounds={rounds}
        renderSeedComponent={CustomSeed}
        swipeableProps={{
          enableMouseEvents: true,
          animateHeight: true,
          ignoreNativeScroll: true,
        }}
      />
    </div>
  )
}

const MarchMadnessBracketsView = ({
  tournament,
}: {
  tournament: Tournament
}) => {
  if (!tournament) return <></>

  return (
    <Flex>
      <ReactBrackets tournament={tournament} />
    </Flex>
  )
}

export default MarchMadnessBracketsView
