import React from 'react';
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { Coin, Extension, LCDClient, MsgSwap, MsgInstantiateContract } from "@terra-money/terra.js";
import { useEffect, useState } from "react";
import { ConnectWallet } from './ConnectWallet'
import { WalletStatus, WalletInfo } from '@terra-dev/use-wallet'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useWallet } from '@terra-money/wallet-provider';
import ReactDOM from 'react-dom'


const client = new LCDClient({
  URL: 'https://lcd.terra.dev',
  chainID: 'columbus-5'
})

/*
const client = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12'
})
*/

const AppNavbar = () => {
	const { status, network, wallets } = useWallet();
	var ust = 0;
	if(status === WalletStatus.WALLET_CONNECTED){
		const balance = client.bank.balance(wallets[0].terraAddress);
		balance.then(result => {
			if(result[0]._coins['uusd']){
				ust = result[0]._coins['uusd'].amount.d;
			}
	 	}).catch(error => {
		 	console.log(error);
	 	});
  }

	return (
		<>
		<Nav>
			<NavMenu>
			</NavMenu>
			<NavBtn>
			{status === WalletStatus.WALLET_CONNECTED && (
				<div>
		      <section>
					<p style={{marginRight: '15px', marginTop: '10px'}}><span id='ust'>{ust}</span> UST</p>
		      </section>
		    </div>
			)}
				<ConnectWallet />
			</NavBtn>
		</Nav>
		</>
	);
};

export default AppNavbar;
