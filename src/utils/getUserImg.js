export const getUserImg = (username) => {
  const img = `https://ui-avatars.com/api/?name=${username
    }?color=ff0000&background=random&size=400&font-size=0.4&rounded=true`
  return img;
}