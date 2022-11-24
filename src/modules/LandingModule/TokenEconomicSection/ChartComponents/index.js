import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

function ChartComponent({ dataChart }) {
  const [labels, setLabels] = useState([])
  const [dataDonut, setDataDonut] = useState([])

  const handleCreateLabels = useCallback(() => {
    const newLabels = []
    const newData = []
    for (const item in dataChart.allocation) {
      if (Object.prototype.hasOwnProperty.call(dataChart.allocation, item)) {
        newLabels.push(item)
        newData.push(dataChart.allocation[item])
      }
    }
    setLabels(newLabels)
    setDataDonut(newData)
  }, [dataChart])

  useEffect(() => {
    handleCreateLabels()
  }, [handleCreateLabels])

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataDonut,
        backgroundColor: [
          '#6880E8',
          '#DB5252',
          '#F4801D',
          '#1F4D7D',
          '#66CC00',
          '#FF33CC',
          '#FFFF00'
        ],
        hoverOffset: 30,
        offset: 5,
        cutout: '80%',
        radius: '70%',
        borderColor: [
          '#6880E8',
          '#DB5252',
          '#F4801D',
          '#1F4D7D',
          '#66CC00',
          '#FF33CC',
          '#FFFF00'
        ],
        borderWidth: 1
      }
    ],
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      }
    }
  }

  return (
    <>
      <S.Wrapper>
        <Doughnut data={data} />
        <S.Text>
          <div>Total supply</div>
          <S.Total>
            {dataChart.total} {dataChart.symbol}
          </S.Total>
          <div>100%</div>
        </S.Text>
      </S.Wrapper>
    </>
  )
}

export default ChartComponent
