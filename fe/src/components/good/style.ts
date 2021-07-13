export const style = {

  goodContainer: {
    height: 350,
    width: 300,
    // backgroundColor: '#131313',
    border: '2px solid #131313',
    borderRadius: '2%',
    margin: 20,
    padding: 10,
  },

  goodImg: {
    width: '100%',
    height: '60%',
    backgroundColor: '#bdbdbd',
  },

  containerForBox: {
    display: 'flex',
  },

  boxForDescription: {
    flex: 5,
  },

  goodTitle: {
    margin: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#131313',
  },

  goodDescription: {
    margin: 15,
    color: '#131313',
  },

  boxForPrice: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  boxForButton: {
    display: 'flex',
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerForQuantity: {
    display: 'flex',
  },

  changeQuantity: {
    margin: {
      left: 7,
      right: 7,
    },
    fontSize: 30,
    flex: 1,
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#E0E0E0',
    '&:hover': {
      backgroundColor: '#bdbdbd',
    }
  },

  quantity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },

  addToBasket: {
    margin: {
      left: 9,
      right: 9,
    },
    flex: 1,
    border: 'none',
    height: 34,
    backgroundColor: '#607D8B',
    color: '#fafafa',
    borderRadius: 19,
    '&:hover': {
      color: '#76FF03',
      height: 36,
    },
    '&:disabled': {
      '&:hover': {
        color: '#D50000',
        height: 36,
      },
    }
  }

};