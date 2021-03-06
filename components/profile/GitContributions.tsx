import React, { useContext } from 'react'
import { Heatmap, HeatmapData } from 'react-github-heatmap'
import ReactTooltip from 'react-tooltip'
import useRequest from '../../lib/utils/useRequest'
import ThemeContext from '../../lib/context/ThemContext'

type Props = {
  githubId: string
  style?: React.CSSProperties
  className?: string
}

const GitContributions: React.FunctionComponent<Props> = ({
  githubId,
  style,
  className
}) => {
  const { isDarkMode } = useContext(ThemeContext)

  const { data: contributionData, error } = useRequest<HeatmapData>(
    {
      url: `/api/${githubId}`
    },
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  )

  if (error) {
    return (
      <div
        className={`${className} bg-red-100 border-l-4 border-red-500 text-red-700 p-4`}
      >
        <p className='font-bold'>Error</p>
        <p>Can't get github contributions Data</p>
      </div>
    )
  }

  if (!contributionData) {
    return (
      <div className={`${className} flex justify-center h-32 `}>
        <article className='spinner' />
        <style jsx>{`
          .spinner {
            position: relative;
            color: #86a8e7 !important;
            pointer-events: none;
          }

          .spinner::after {
            content: '';
            position: absolute !important;
            top: calc(50% - (5em / 2));
            left: calc(50% - (5em / 2));
            display: block;
            width: 5em;
            height: 5em;
            border: 2px solid currentColor;
            border-radius: 9999px;
            border-right-color: transparent;
            border-top-color: transparent;
            animation: spinAround 500ms infinite linear;
          }

          @keyframes spinAround {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className={className} style={style}>
      <Heatmap
        data={contributionData}
        theme={
          isDarkMode
            ? {
                background: '#181818',
                text: '#f8f8f2',
                grade4: '#ff79c6',
                grade3: '#bd93f9',
                grade2: '#6272a4',
                grade1: '#44475a',
                grade0: '#282a36'
              }
            : {
                background: 'transparent',
                text: '#000',
                grade4: '#196127',
                grade3: '#239a3b',
                grade2: '#7bc96f',
                grade1: '#c6e48b',
                grade0: '#ebedf0'
              }
        }
      >
        <ReactTooltip delayShow={100} html />
      </Heatmap>
      {isDarkMode ? (
        <style jsx global>{`
          .react-github-heatmap__meta {
            color: white !important;
          }
        `}</style>
      ) : (
        <style jsx global>{`
          .react-github-heatmap__meta {
            color: black !important;
          }
        `}</style>
      )}
    </div>
  )
}

export default GitContributions
