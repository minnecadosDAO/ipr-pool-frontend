import React from 'react';
import '../App.css';
import { Coin, Extension, LCDClient, MsgSwap, MsgInstantiateContract } from "@terra-money/terra.js";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
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



  return (
    <div className="App">
      <Header />
      <br/>
      Coming soon!
    </div>
  );
}

export default Bootstrap;
