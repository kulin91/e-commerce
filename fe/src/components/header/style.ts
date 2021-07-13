
export const style = {
  header: {
    height: 100,
    // width: '50vw',
    backgroundColor: '#212121',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerForLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: {
      left: 80,
      right: 80,
    },
    textDecoration: 'none',
  },

  link: {
    textDecoration: 'none',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fafafa',
    '&:hover': {
      // fontSize: 21,
      fontWeight: 'bold',
      color: '#D50000',
    }
  },

  boxForPriceLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  priceLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

};