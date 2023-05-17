import React from 'react'
import * as S from './styles'
import { QUARTERS } from './data'

const RoadmapItem = ({ children, status, ...props }) => {
  return (
    <S.RoadmapItem {...props}>
      <S.Status status={status}></S.Status>
      <S.RoadmapContent>{children}</S.RoadmapContent>
    </S.RoadmapItem>
  )
}

function RoadmapSection(props) {
  return (
    <S.Section
      title="Roadmap"
      description={`The project development roadmap is designed with reference to important milestones in the development stages, 
      in case there are additions or changes, there will be prior notice to the community.`}
      id="roadmap"
    >
      <S.Wrapper>
        {QUARTERS.map(quarter => (
          <S.Item
            key={quarter.quarter}
            title={quarter.quarter}
            className="roadmap__item"
          >
            <S.RoadmapWrapper>
              {quarter.roadmap.map(item => (
                <RoadmapItem key={item.id} status={item.status}>
                  {item.option}
                </RoadmapItem>
              ))}
            </S.RoadmapWrapper>
          </S.Item>
        ))}
      </S.Wrapper>
    </S.Section>
  )
}

export default RoadmapSection
