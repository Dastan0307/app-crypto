import { useContext } from "react";
import { Layout, Card, Statistic, List, Typography, Spin, Tag} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from "@utils/utils";
import CryptoContext from "@context/crypto-context";

const siderStyle = {
    padding: '1rem'
  };

export default function AppLayout() {
  const { loading, assets } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {
        assets.map((asset) => (
          <Card key={asset.id} style={{ marginBottom: '1rem' }}>
          <Statistic
            title={capitalize(asset.id)}
            value={asset.totalAmount}
            precision={2}
            valueStyle={{ color: asset.grow ? '#3f8600': '#cf1322' }}
            prefix={asset.grow ? <ArrowDownOutlined /> : <ArrowUpOutlined />} 
            suffix="$" 
          />
          <List
          size="small"
            dataSource={[
              {title: "Total Profit", value: asset.totalProfit, withTag: true},
              {title: "Asset Amount", value: asset.amount, isPlain: true},
            ]}
            renderItem={(item) => (
          <List.Item>
            <span>{item.title}</span>
            <span>
              {item.withTag && (
                <Tag color={asset.grow ? 'green' : 'red'}>
                  {asset.growPercent}
                </Tag>
              )}
              {item.isPlain && item.value}
              {!item.isPlain && (
                <Typography.Text type={asset.grow ? 'success': 'danger'}>{item.value.toFixed(2)}$</Typography.Text>
              )}
            </span>
          </List.Item>
            )}
          />
        </Card>
        ))
      }
    </Layout.Sider>
  )
}

