/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import introImage from '/assets/images/intro_image.jpg';
import introImage1 from '/assets/images/intro_image1.jpg';
import introImage2 from '/assets/images/intro_image2.jpg';

import Card from '@/components/common/Card';
import ReviewCard from '@/components/common/ReviewCard';

import styles from './Home.module.css';

const cardList = [
  {
    id: 1,
    slug: 'greek-salad',
    title: 'Greek Salad',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    thumbnailUrl: '/assets/images/foods/greek_salad_thumb.jpg',
    price: 250,
  },
  {
    id: 2,
    slug: 'pasta',
    title: 'Pasta',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    thumbnailUrl: '/assets/images/foods/pasta_thumb.jpg',
    price: 200,
  },
  {
    id: 3,
    slug: 'pork-grilled',
    title: 'Pork Grilled',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    thumbnailUrl: '/assets/images/foods/pork_grilled_thumb.jpg',
    price: 300,
  },
];

const reviewCardList = [
  {
    slug: 'review-1',
    name: 'Monica',
    message: `It's very delicious, variable dishes!`,
    avatarUrl: '/assets/images/avatar/avatar1.png',
    reviewScore: 5,
  },
  {
    slug: 'review-2',
    name: 'Dustin',
    message: `It's very delicious, variable dishes!`,
    avatarUrl: '/assets/images/avatar/avatar2.png',
    reviewScore: 5,
  },
  {
    slug: 'review-3',
    name: 'Mina',
    message: `It's very delicious, variable dishes!`,
    avatarUrl: '/assets/images/avatar/avatar3.png',
    reviewScore: 5,
  },
  {
    slug: 'review-4',
    name: 'Tim',
    message: `It's very delicious, variable dishes!`,
    avatarUrl: '/assets/images/avatar/avatar4.png',
    reviewScore: 4,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={classNames('main-green-bg-color', styles.intro)}>
        <div className={classNames('container', styles.introWrapper)}>
          <aside className={styles.introText}>
            <h2>
              <strong>LITTLE LEMON</strong>
            </h2>
            <h3>
              <strong>HO CHI MINH CITY</strong>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book
            </p>
          </aside>

          <aside className={styles.image}>
            <img src={introImage} alt="intro" />
          </aside>
        </div>
      </section>

      <section className={classNames('main-white-bg-color', styles.specials)}>
        <div className={classNames('container', styles.specialsWrapper)}>
          <div className={styles.specialsHeader}>
            <h2>
              <strong>Specials</strong>
            </h2>
            <button onClick={() => navigate('/menu')} className="yellow-btn">
              Online Menu
            </button>
          </div>

          <div className={styles.specialsCards}>
            {cardList.map((item) => (
              <Card
                key={item.slug}
                id={item.id}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={classNames('main-green-bg-color', styles.testimonial)}>
        <div className={classNames('container', styles.testimonialWrapper)}>
          <h2>
            <strong>TESTIMONIALS</strong>
          </h2>
          <div className={styles.testimonialCards}>
            {reviewCardList.map((item) => (
              <ReviewCard
                key={item.slug}
                avatarUrl={item.avatarUrl}
                name={item.name}
                message={item.message}
                reviewScore={item.reviewScore}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={classNames('main-white-bg-color', styles.about)}>
        <div className={classNames('container', styles.introWrapper)}>
          <aside className={styles.introText}>
            <h2>
              <strong>LITTLE LEMON</strong>
            </h2>
            <h3>
              <strong>HO CHI MINH CITY</strong>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book
            </p>
          </aside>

          <aside className={styles.image}>
            <img src={introImage2} alt="intro" />
            <img src={introImage1} alt="intro 1" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default Home;
