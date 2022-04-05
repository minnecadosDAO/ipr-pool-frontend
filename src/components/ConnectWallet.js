import { useWallet, WalletStatus } from '@terra-dev/use-wallet'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import React from "react";

export const ConnectWallet = () => {
  const {
    status,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet()

  return (
    <div>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableInstallTypes.map((connectType) => (
            <Button
              variant="outline-success"
              key={`install-${connectType}`}
              onClick={() => install(connectType)}
            >
              Install {connectType}
            </Button>
          ))}
          {availableConnectTypes.map((connectType) => (
            <Button
              key={`connect-${connectType}`}
              onClick={() => connect(connectType)}
              style={{marginRight: '10px', background: '#018505'}}
            >
              Connect {connectType}
            </Button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <Button
          variant="success"
          onClick={() => disconnect()}
        >
          Disconnect
        </Button>
      )}
    </div>
  )
}
