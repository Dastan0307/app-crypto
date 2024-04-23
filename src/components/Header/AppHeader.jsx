import { Button, Drawer, Layout, Modal, Select, Space } from 'antd';
import { useCrypto } from '@context/crypto-context'
import { useEffect, useState } from 'react';
import CoinInfoModal from '@modals/CoinInfoModal';
import AddAssetForm from '@screens/addAssetForm/AddAssetForm';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};


export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [coin, setCoin] = useState(null)
  const { crypto } = useCrypto()

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, []);

  function handleSelect(value) {
    setCoin(crypto.find((coin) => coin.id === value))
    setModal(true)
  }

    return (
        <Layout.Header style={headerStyle}>
          <Select
            style={{
              width: 250,
            }}
            open={select}
            onSelect={handleSelect}
            onClick={() => setSelect((prev) => !prev)}
            value="press / to open"
            defaultValue={['china']}
            options={crypto.map(coin => ({
              label: coin.name,
              value: coin.id,
              icon: coin.icon,
            }))}
            optionRender={(option) => (
              <Space>
                <img style={{ width: 20 }} src={option.data.icon} alt="Error :(" />
                {option.data.value}
              </Space>
            )}
          />
          <Button type='primary' onClick={() => setDrawer(true)}>Add Asset</Button>

          <Modal 
            open={modal}
            onCancel={() =>  setModal(false)}
            footer={null}
          >
            <CoinInfoModal coin={coin} />
          </Modal>

          <Drawer 
            width={600} 
            onClose={() => setDrawer(false)} 
            open={drawer}
            destroyOnClose
          >
            <AddAssetForm onClose={() => setDrawer(false)} />
          </Drawer>
        </Layout.Header>
    )
}