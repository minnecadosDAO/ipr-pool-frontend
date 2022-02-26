import React from 'react';
import '../App.css';
import { Coin, Extension, LCDClient, MsgSwap, MsgInstantiateContract } from "@terra-money/terra.js";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Header from './Header';
import AppNavbar from './AppNavbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const client = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12'
})

const ext = new Extension();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  }),
);

function Bootstrap() {
  const classes = useStyles();

  const [address, setAddress] = useState();

  useEffect(() => {
    const getAddress = async () => {
      const res = await ext.request('connect');
      setAddress(res.payload.address);
    };
    getAddress();
  }, []);

  const swapAll = async () => {
  const balance = await client.bank.balance(address);
  const coins = balance.filter((a) => ["uluna", "uusd"].includes(a.denom));
  const msgs = coins
    .filter((c) => c.amount.gte(1000000))
    .map(
      (c) =>
        new MsgSwap(address, new Coin(c.denom, c.amount.minus(1)), "uusd")
    );

    console.log(coins);
    const payload = await ext.request("post", {
      msgs: [new MsgInstantiateContract(address, 3, {}).toJSON()],
      gasPrices: "0.00506uluna",
      purgeQueue: true,
    });
    console.log(payload);
  };

  return (
    <div className="App">
      <Header />
      <br/>
      Coming soon!
    </div>
  );
}

export default Bootstrap;
