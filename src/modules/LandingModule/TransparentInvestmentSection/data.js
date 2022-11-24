import {
  MintIcon,
  StakeIcon,
  MarketIcon,
  GovernaneIcon
} from '/public/svgs/transparent'

export const TRANSPARENTS = [
  {
    id: 1,
    icon: <MintIcon />,
    title: 'Mint',
    content: `RedGame's Mint NFT tool gives players a bigger 
    voice in how their suggestions are applied throughout 
    the game, with granular control over aesthetic details 
    like character design, outfit, and weaponry.`
  },
  {
    id: 2,
    icon: <StakeIcon />,
    title: 'Stake for access',
    content: `Item minting requires RBRD tokens for use in the 
    game's crafting system. Through the staking protocol, 
    players can swap their RBR tokens for RBRD tokens. 
    The number of RBRD tokens required to mint a given item will vary.`
  },
  {
    id: 3,
    icon: <MarketIcon />,
    title: 'BattleMarketplace',
    content: `A place to discover, buy & sell, trade your NFT collection and others. Low transaction costs, optional royalty fees.`
  },
  {
    id: 4,
    icon: <GovernaneIcon />,
    title: 'Governance',
    content: `The network is managed by a decentralized 
    autonomous organization (DAO), and its token 
    holders (RBR) are given a voice in determining key 
    protocol settings inside the decentralized application (dApp).`
  }
]
