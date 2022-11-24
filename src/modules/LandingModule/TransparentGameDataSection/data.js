import {
  BattleIcon,
  StatisficsIcon,
  RankIcon,
  LevelsIcon
} from '/public/svgs/transparent'

export const TRANSPARENTS = [
  {
    id: 1,
    icon: <BattleIcon />,
    title: 'Battle',
    content: `All of the game's crucial parameters are stored 
    on-chain, allowing for comprehensive verification of a match. 
    Information on a battle, including kill/death ratio, kill totals, 
    casualty counts, and point totals.`
  },
  {
    id: 2,
    icon: <StatisficsIcon />,
    title: 'Statistics',
    content: `All player statistics data is also recorded on-chain
     to give irrefutable evidence of a player's success.Wins, losses, 
     winning percentage, and total games played.`
  },
  {
    id: 3,
    icon: <RankIcon />,
    title: 'Rank',
    content: `There is a leaderboard where players can see where 
    they are in comparison to the rest of the pack. 
    A player's rank determines the reward they earn.`
  },
  {
    id: 4,
    icon: <LevelsIcon />,
    title: 'Levels',
    content: `Compete in more games to get access to better equipment. 
    The promotional perks a player receives are directly proportional to their player level.`
  }
]
