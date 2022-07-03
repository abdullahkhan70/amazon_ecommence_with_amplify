/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      title
      image
      description
      images
      avgRating
      ratings
      price
      oldPrice
      ship
      saveToUp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      title
      image
      description
      images
      avgRating
      ratings
      price
      oldPrice
      ship
      saveToUp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      title
      image
      description
      images
      avgRating
      ratings
      price
      oldPrice
      ship
      saveToUp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      quantity
      prodictId
      product {
        id
        title
        image
        description
        images
        avgRating
        ratings
        price
        oldPrice
        ship
        saveToUp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      quantity
      prodictId
      product {
        id
        title
        image
        description
        images
        avgRating
        ratings
        price
        oldPrice
        ship
        saveToUp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      quantity
      prodictId
      product {
        id
        title
        image
        description
        images
        avgRating
        ratings
        price
        oldPrice
        ship
        saveToUp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
