import React from 'react'
import dynamic from 'next/dynamic'
import { governanceToken, nonFungibleToken } from './data'
import * as S from './styles'

const DonutChart = dynamic(() => import('./ChartComponents'), {
  ssr: false
})

function TokenEconomicSection() {
  return (
    <S.Wrapper>
      <S.Title>Token Economic</S.Title>
      <S.Content>
        <S.Infor>
          <S.TokenName>Governance Token</S.TokenName>
          <div>
            <S.Properties>
              <span>Name of Token:</span>
              <span>{governanceToken.name}</span>
            </S.Properties>
            <S.Properties>
              <span>Symbol:</span>
              <span>{governanceToken.symbol}</span>
            </S.Properties>
            <S.Properties>
              <span>Type:</span>
              <span>{governanceToken.type}</span>
            </S.Properties>
            <S.Properties>
              <span>Chain:</span>
              <span>{governanceToken.chain}</span>
            </S.Properties>
            <S.Properties>
              <span>Total supply:</span>
              <span>
                {governanceToken.total} {governanceToken.symbol}
              </span>
            </S.Properties>
            <S.Properties className="allocation">Allocation</S.Properties>
            <S.Properties>
              <span>Community:</span>
              <span>{governanceToken.allocation.Community}%</span>
            </S.Properties>
            <S.Properties>
              <span>Early Backer:</span>
              <span>{governanceToken.allocation.EarlyBacker}%</span>
            </S.Properties>
            <S.Properties>
              <span>Backers:</span>
              <span>{governanceToken.allocation.Backers}%</span>
            </S.Properties>
            <S.Properties>
              <span>Team:</span>
              <span>{governanceToken.allocation.Team}%</span>
            </S.Properties>
          </div>
          <S.TokenName>Non Fungible Token</S.TokenName>
          <div>
            <S.Properties>
              <span>Name of Token:</span>
              <span>{nonFungibleToken.name}</span>
            </S.Properties>
            <S.Properties>
              <span>Symbol:</span>
              <span>{nonFungibleToken.symbol}</span>
            </S.Properties>
            <S.Properties>
              <span>Type:</span>
              <span>{nonFungibleToken.type}</span>
            </S.Properties>
            <S.Properties>
              <span>Chain:</span>
              <span>{nonFungibleToken.chain}</span>
            </S.Properties>
          </div>
        </S.Infor>
        <div>
          <DonutChart dataChart={governanceToken} />
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export default TokenEconomicSection
