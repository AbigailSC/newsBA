import { useSelector } from 'react-redux';
import { getUserImg } from '@utils/getUserImg';
import { Favorites, InfoProfileBox } from '@components';

const Profile = () => {
  const { user, favorites } = useSelector((state) => state.authState);
  const username = user.user;
  const avatar = getUserImg(username.displayName);

  return (
    <section className="flex flex-col items-center justify-start gap-20 pb-5 lg:pb-10">
      <header className="flex flex-col w-full">
        <div
          className="relative w-full bg-cover h-36"
          style={{
            backgroundImage:
              'url(https://www.gamespot.com/a/bundles/gamespotsite/images/bg-auth.jpg)'
          }}
        >
          <img
            src={username.photoURL === null ? avatar : username.photoURL}
            alt="username avatar"
            className="absolute bottom-0 w-32 left-1/2 right-1/2 transform translate-x-[-50%] translate-y-1/2 rounded-full border-zinc-200 border-[3px]"
          />
        </div>
      </header>
      <div className="flex flex-col items-center w-full">
        <h3 className="text-2xl font-medium capitalize">
          {username.displayName}
        </h3>
        <span className="text-zinc-400">{username.email}</span>
      </div>
      <InfoProfileBox length={favorites.length} />
      <article className="flex flex-col gap-2 px-5 md:px-16 lg:px-24">
        <h3 className="text-2xl font-medium capitalize">Favorite news</h3>
        {favorites.length > 0 ? (
          <Favorites data={favorites} />
        ) : (
          <p className="text-zinc-400">You haven&apos;t added anything yet</p>
        )}
      </article>
    </section>
  );
};

export default Profile;
