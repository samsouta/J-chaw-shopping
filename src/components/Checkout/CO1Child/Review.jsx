import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <h1 className=' text-nun text-[#2C2825] text-2xl font-bold'>
        Order Confirmed
      </h1>
      <Grid mt={1} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <h1 className='  text-nun text-[#2C2825] text-xl font-bold'>
            Shipping
          </h1>
          <span className=' text-mon text-md text-[#2C2825] block font-mono'>John Smith</span>
          <span className=' text-mon text-md text-[#2C2825] text-wrap font-mono' >{addresses.join(', ')}</span>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <h1 className='  text-nun text-[#2C2825] text-xl font-bold'>
            Payment Method
          </h1>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <span  className=' text-mon text-md text-[#2C2825] font-mono'>{payment.name}</span>
                </Grid>
                <Grid item xs={6}>
                  <span  className=' text-mon text-md text-[#2C2825]  font-mono'>{payment.detail}</span>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
