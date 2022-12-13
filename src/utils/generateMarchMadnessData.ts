export const arrangeGames = games => {
  return games.sort((a, b) =>
    Number(a.title.match('Game ([0-9]+)')[1]) >
    Number(b.title.match('Game ([0-9]+)')[1])
      ? 1
      : -1,
  )
}

// export const GenerateMarchMadnessBracket = () => {

// }
