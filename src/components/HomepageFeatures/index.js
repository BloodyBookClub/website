import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Regelmäßige Posts',
    Svg: require('@site/static/img/bookshelf.svg').default,
    description: (
      <>
        Wir werden hier regelmäßig Blogposts veröffentlichen,
        die von unseren Mitgliedern geschrieben sind! Sie werden
        immer interessant und abwechselnd sein!
      </>
    ),
  },
  {
    title: 'Kostenlos',
    Svg: require('@site/static/img/group.svg').default,
    description: (
      <>
        Dieser Blog bleibt für immer kostenlos für euch! Wir 
        sammeln keinerlei Nutzerdaten und betreiben diese 
        Webseite als Hobby!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
