import { useSelector } from 'react-redux';

const Detail = () => {
  const { detail } = useSelector((state) => state.newsState);
  console.log('🚀 ~ file: Detail.jsx:9 ~ Detail ~ detail:', detail);

  return (
    <div>
      <div>
        <h1>{detail.title}</h1>
        <p>{detail.subtitle}</p>
        <img src={detail.image} alt={detail.title} />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Detail;
