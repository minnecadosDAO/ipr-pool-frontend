import React from 'react';
import '../App.css';
import { Coin, Extension, LCDClient, MsgSwap, MsgInstantiateContract } from "@terra-money/terra.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Header from './Header';
import AppNavbar from './AppNavbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {AnchorEarn, CHAINS, NETWORKS } from '@anchor-protocol/anchor-earn';
import ReactDOM from 'react-dom'

const client = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
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
  const classNames = useStyles();
  const [address, setAddress] = useState();

  useEffect(() => {
    const getAddress = async () => {
      const res = await ext.request('connect');
      console.log(res.payload.address);
      setAddress(res.payload.address);
    };
    getAddress();
  }, []);


  if(address){
    const anchorEarn = new AnchorEarn({
      chain: CHAINS.TERRA,
      network: NETWORKS.BOMBAY_12,
      address: address,
    });

    const marketInfo = anchorEarn.market({currencies: ['uusd'],});
    var anchorRate;
    var teir1;
    var teir2;
    var teir3;
    var teir4;

    marketInfo.then(result => {
      anchorRate = result.markets[0].APY;
      console.log(anchorRate);
      teir1 = (anchorRate * .5 * 100).toFixed(2);
      teir2 = (anchorRate * .6 * 100).toFixed(2);
      teir3 = (anchorRate * .7 * 100).toFixed(2);
      teir4 = (anchorRate * .8 * 100).toFixed(2);
      ReactDOM.render(teir1, document.getElementById('t1'));
      ReactDOM.render(teir2, document.getElementById('t2'));
      ReactDOM.render(teir3, document.getElementById('t3'));
      ReactDOM.render(teir4, document.getElementById('t4'));
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <Header />

      <br/>
      Initial Public Raise Pool coming soon! Preview below!
      <br/>
      <div style={{ width: '90%', padding: '20px', position: 'relative', left: '40px'}}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classNames.paper} style={{color: 'white', backgroundColor: '#018505'}}>
            0-1 Month
            <p><span id='t1'>{teir1}</span>% APR</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classNames.paper} style={{color: 'white', backgroundColor: '#018505'}}>
            1-6 Months
            <p><span id='t2'>{teir2}</span>% APR</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classNames.paper} style={{color: 'white', backgroundColor: '#018505'}}>
            6-12 Months
            <p><span id='t3'>{teir3}</span>% APR</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classNames.paper} style={{color: 'white', backgroundColor: '#018505'}}>
            12+ Months
            <p><span id='t4'>{teir4}</span>% APR</p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={1}>
        </Grid>

        <Grid item xs={6} sm={3}>

        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classNames.paper} style={{backgroundColor: '#018505', color: 'white'}}>
            <h2>Deposit UST</h2><br/>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="visually-hidden">UST</label>
                <input type="number" className="form-control" disabled/>
              </div>
              <div className="col-md-6">
                <button disabled type="submit" className="btn" style={{backgroundColor: '#003B37', color: 'white'}}>Deposit</button>
              </div>
            </form>
            <br/><br/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classNames.paper} style={{backgroundColor: '#018505', color: 'white'}}>
            <h2>Withdraw UST</h2><br/>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="visually-hidden">UST</label>
                <input disabled type="number" className="form-control"/>
              </div>
              <div className="col-md-3">
                <button disabled type="submit" className="btn" style={{backgroundColor: '#003B37', color: 'white'}}>Withdraw</button>
              </div>
            </form>
            <br/><br/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={1}>
        </Grid>
        <br/>
        <Grid item xs={6} sm={3}>

        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classNames.paper} style={{backgroundColor: '#018505', color: 'white'}}>
            <h2>Claim MIN</h2><br/>
            <form className="row g-3">
              <div className="col-md-6">
                Claimable: 100 MIN
              </div>
              <div className="col-md-6">
                <button disabled type="submit" className="btn" style={{backgroundColor: '#003B37', color: 'white'}}>Claim MIN</button>
              </div>
            </form>
            <br/><br/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classNames.paper} style={{backgroundColor: '#018505', color: 'white'}}>
            <h2>Sell MIN</h2><br/>
            <form className="row g-3">
              <div className="col-md-6">
                Balance: 100 MIN
              </div>
              <div className="col-md-6">
                <button disabled type="submit" className="btn" style={{backgroundColor: '#003B37', color: 'white'}}>Sell MIN</button>
              </div>
            </form>
            <br/><br/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={1}>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default Bootstrap;
