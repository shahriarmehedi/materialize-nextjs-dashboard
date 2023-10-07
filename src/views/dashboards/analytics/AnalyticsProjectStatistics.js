// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { useEffect, useState } from 'react'



const AnalyticsProjectStatistics = () => {


  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setDatas(data?.projectStatistics))
  }, [])


  const data = datas?.data

  return (
    <Card>
      <CardHeader
        title='Project Statistics'
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              lineHeight: 2,
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.17px',
              textTransform: 'uppercase'
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              lineHeight: 2,
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.17px',
              textTransform: 'uppercase'
            }}
          >
            Budget
          </Typography>
        </Box>
        {data?.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? [4, 4, 5] : undefined
              }}
            >
              <Avatar variant='rounded' sx={{ mr: 3, width: 50, height: 42, backgroundColor: 'background.default' }}>
                <img alt='avatar' src={item.src} width={item.imgWidth} height={item.imgHeight} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>
                <CustomChip
                  skin='light'
                  size='small'
                  color='primary'
                  label={item.chipText}
                  sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
                />
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AnalyticsProjectStatistics
