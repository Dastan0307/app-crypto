import { Layout, Typography } from 'antd'
import { useCrypto } from '@context/crypto-context'
import PortfolioChart from '../../screens/PortfolioChart/PortfolioChart';
import AssetsTable from '../../screens/AssetsTable/AssetsTable';


const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
};

export default function AppContent() {
  const { assets, crypto } = useCrypto()

  const crpytoPriceMap = crypto.reduce((start, c) => {
    start[c.id] = c.price
    return start
  }, {})

    return (
        <Layout.Content style={contentStyle}>
          <Typography.Title level={3} style={{textAlign: 'left', color: '#fff'}}>
            Portfolio: {''}
            {assets
              .map((asset) => asset.amount * crpytoPriceMap[asset.id])
              .reduce((start, n) => (start += n), 0)
              .toFixed(2)
            }$
          </Typography.Title>
          <PortfolioChart />
          <AssetsTable />
        </Layout.Content>
    )
}