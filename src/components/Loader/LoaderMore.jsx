import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const LoaderMore = () => {
  return (
    <div className={css.container}>
      <ClipLoader color='#5c6297' loading={true} size={80} />
    </div>
  );
};

export default LoaderMore;
