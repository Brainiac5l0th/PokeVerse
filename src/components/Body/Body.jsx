import { Container, Grid } from '@material-ui/core';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonBody from './PokemonBody';
import useStyle from './style';

const Body = () => {
  const classes = useStyle();
  const [limit, setLimit] = useState(25);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async () => {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}/?offset=25`)
        .then(res => setData(res.data.results));
    }
    catch (e) {
      console.log('there is an error.', e);
    }
    setLimit(limit + 25);
    if (data.length ===1126 ) {
      setHasMore(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h3 className={classes.loading}>Loading...</h3>}
      className={classes.oHidden}
    >
      <Container>
        <Grid container spacing={2}>
          {data && data.map(data => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={data.name}>
              <PokemonBody data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  )
}

export default Body